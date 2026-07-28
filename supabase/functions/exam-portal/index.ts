import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY')!

const supabaseAdmin = createClient(SUPABASE_URL, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, content-type, x-client-info, apikey',
  }
}

const GRADING_PROMPT = `You are grading a student's theory answer for a weekly Spaces test, against a model answer. Score strictly on whether the student's answer captures the key ideas of the model answer, not on writing style or length. Respond with ONLY JSON: {"score": <integer 0-100>, "feedback": "<one or two sentences, specific and constructive>"}.`

async function gradeTheoryAnswer(question: string, modelAnswer: string, studentAnswer: string) {
  if (!studentAnswer || !studentAnswer.trim()) {
    return { score: 0, feedback: 'No answer was submitted for this question.' }
  }
  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'gpt-4o-mini', temperature: 0.2, response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: GRADING_PROMPT },
          { role: 'user', content: `Question: ${question}\n\nModel answer: ${modelAnswer}\n\nStudent's answer: ${studentAnswer}` },
        ],
      }),
    })
    const body = await res.json()
    if (!res.ok) throw new Error(body?.error?.message || 'Grading failed')
    const parsed = JSON.parse(body.choices[0].message.content)
    const score = Math.max(0, Math.min(100, Number(parsed.score) || 0))
    return { score, feedback: String(parsed.feedback || '').trim() || 'No feedback generated.' }
  } catch (err) {
    return { score: null, feedback: `Could not auto-grade this answer: ${err.message}. A reviewer may need to grade it manually.` }
  }
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders() })
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: corsHeaders() })
  }

  const authHeader = req.headers.get('Authorization')
  if (!authHeader) {
    return new Response(JSON.stringify({ error: 'Missing authorization' }), { status: 401, headers: corsHeaders() })
  }
  const callerClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: { headers: { Authorization: authHeader } },
  })
  const { data: callerData, error: callerError } = await callerClient.auth.getUser()
  if (callerError || !callerData?.user?.id) {
    return new Response(JSON.stringify({ error: 'Could not verify caller' }), { status: 401, headers: corsHeaders() })
  }
  const userId = callerData.user.id

  let body
  try {
    body = await req.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), { status: 400, headers: corsHeaders() })
  }

  const action = body.action

  // ── List published weekly tests, with whether this user already attempted each ──
  if (action === 'list_tests') {
    const { data: tests, error } = await supabaseAdmin
      .from('spaces_weekly_tests')
      .select('*')
      .eq('status', 'published')
      .order('publish_date', { ascending: false })
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })

    const testIds = (tests || []).map(t => t.id)
    let attemptMap = new Map()
    if (testIds.length > 0) {
      const { data: attempts } = await supabaseAdmin
        .from('spaces_weekly_test_attempts')
        .select('test_id, status, mcq_score, mcq_total, theory_score, theory_total')
        .eq('user_id', userId)
        .in('test_id', testIds)
      attemptMap = new Map((attempts || []).map((a: any) => [a.test_id, a]))
    }

    const enriched = (tests || []).map(t => ({ ...t, my_attempt: attemptMap.get(t.id) || null }))
    return new Response(JSON.stringify({ ok: true, tests: enriched }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  // ── Start (or resume) an attempt ──────────────────────────────
  if (action === 'start_attempt') {
    const testId = body.test_id
    if (!testId) return new Response(JSON.stringify({ error: 'test_id is required' }), { status: 400, headers: corsHeaders() })

    const { data: existing, error: existingErr } = await supabaseAdmin
      .from('spaces_weekly_test_attempts')
      .select('*')
      .eq('user_id', userId)
      .eq('test_id', testId)
      .maybeSingle()
    if (existingErr) return new Response(JSON.stringify({ error: existingErr.message }), { status: 500, headers: corsHeaders() })

    if (existing?.status === 'completed') {
      return new Response(JSON.stringify({ error: 'You have already completed this test.', already_completed: true }), { status: 400, headers: corsHeaders() })
    }

    const { data: questions, error: qError } = await supabaseAdmin
      .from('spaces_weekly_test_questions')
      .select('id, question_type, question, options')
      .eq('test_id', testId)
    if (qError) return new Response(JSON.stringify({ error: qError.message }), { status: 500, headers: corsHeaders() })
    if (!questions || questions.length === 0) {
      return new Response(JSON.stringify({ error: 'This test has no questions yet.' }), { status: 400, headers: corsHeaders() })
    }

    if (existing) {
      // Resuming an in-progress attempt — same questions, same attempt id.
      return new Response(JSON.stringify({ ok: true, attempt_id: existing.id, questions }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
    }

    const mcqTotal = questions.filter(q => q.question_type === 'mcq').length
    const theoryTotal = questions.filter(q => q.question_type === 'theory').length

    const { data: attempt, error: attemptError } = await supabaseAdmin
      .from('spaces_weekly_test_attempts')
      .insert({ user_id: userId, test_id: testId, mcq_total: mcqTotal, theory_total: theoryTotal })
      .select()
      .maybeSingle()
    if (attemptError) return new Response(JSON.stringify({ error: attemptError.message }), { status: 500, headers: corsHeaders() })

    return new Response(JSON.stringify({ ok: true, attempt_id: attempt.id, questions }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  // ── Submit: grade everything, save results, return the breakdown ──
  if (action === 'submit_attempt') {
    const attemptId = body.attempt_id
    const answers = Array.isArray(body.answers) ? body.answers : []
    if (!attemptId) return new Response(JSON.stringify({ error: 'attempt_id is required' }), { status: 400, headers: corsHeaders() })

    const { data: attempt, error: attemptError } = await supabaseAdmin
      .from('spaces_weekly_test_attempts').select('*').eq('id', attemptId).eq('user_id', userId).maybeSingle()
    if (attemptError) return new Response(JSON.stringify({ error: attemptError.message }), { status: 500, headers: corsHeaders() })
    if (!attempt) return new Response(JSON.stringify({ error: 'Attempt not found' }), { status: 404, headers: corsHeaders() })
    if (attempt.status === 'completed') {
      return new Response(JSON.stringify({ error: 'This attempt was already submitted.' }), { status: 400, headers: corsHeaders() })
    }

    const questionIds = answers.map((a: any) => a.question_id).filter(Boolean)
    const { data: questions, error: qError } = await supabaseAdmin
      .from('spaces_weekly_test_questions')
      .select('id, question, question_type, correct_index, model_answer, explanation')
      .in('id', questionIds)
    if (qError) return new Response(JSON.stringify({ error: qError.message }), { status: 500, headers: corsHeaders() })

    const qMap = new Map((questions || []).map((q: any) => [q.id, q]))
    let mcqCorrect = 0
    let theorySum = 0
    let theoryGraded = 0
    const rows = []
    const results = []

    for (const a of answers) {
      const q = qMap.get(a.question_id)
      if (!q) continue

      if (q.question_type === 'mcq') {
        const isCorrect = Number(a.chosen_index) === Number(q.correct_index)
        if (isCorrect) mcqCorrect++
        rows.push({
          attempt_id: attemptId, question_id: q.id, question_type: 'mcq',
          chosen_index: a.chosen_index, is_correct: isCorrect,
        })
        results.push({
          question_id: q.id, question_type: 'mcq', chosen_index: a.chosen_index,
          correct_index: q.correct_index, is_correct: isCorrect, explanation: q.explanation,
        })
      } else {
        const graded = await gradeTheoryAnswer(q.question, q.model_answer || '', a.answer_text || '')
        if (graded.score !== null) { theorySum += graded.score; theoryGraded++ }
        rows.push({
          attempt_id: attemptId, question_id: q.id, question_type: 'theory',
          answer_text: a.answer_text || null, ai_score: graded.score, ai_feedback: graded.feedback,
        })
        results.push({
          question_id: q.id, question_type: 'theory', answer_text: a.answer_text,
          model_answer: q.model_answer, ai_score: graded.score, ai_feedback: graded.feedback,
        })
      }
    }

    if (rows.length > 0) {
      const { error: insertError } = await supabaseAdmin.from('spaces_weekly_test_attempt_answers').insert(rows)
      if (insertError) return new Response(JSON.stringify({ error: insertError.message }), { status: 500, headers: corsHeaders() })
    }

    const theoryAvgPercent = theoryGraded > 0 ? Math.round(theorySum / theoryGraded) : null

    const { error: updateError } = await supabaseAdmin
      .from('spaces_weekly_test_attempts')
      .update({
        status: 'completed',
        mcq_score: mcqCorrect,
        theory_score: theoryAvgPercent,
        submitted_at: new Date().toISOString(),
      })
      .eq('id', attemptId)
    if (updateError) return new Response(JSON.stringify({ error: updateError.message }), { status: 500, headers: corsHeaders() })

    return new Response(JSON.stringify({
      ok: true,
      mcq_score: mcqCorrect, mcq_total: attempt.mcq_total,
      theory_score_percent: theoryAvgPercent, theory_total: attempt.theory_total,
      results,
    }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  return new Response(JSON.stringify({ error: `Unknown action: ${action}` }), { status: 400, headers: corsHeaders() })
})