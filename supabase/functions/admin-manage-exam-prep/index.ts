// supabase/functions/admin-manage-exam-prep/index.ts
//
// Manages exam-prep content across boards (UTME, JUPEB) and subjects.
// AI drafts content on request or parses uploaded past-question
// documents, but nothing is visible to students until an admin
// explicitly publishes it.
//
// BOARD-AWARE: prompts are calibrated per board, not just subject —
// JUPEB (direct-entry, 200-level depth) is meaningfully more advanced
// than UTME (secondary-leaving level), and generation instructions
// reflect that rather than treating "Islamic Studies" the same way
// regardless of which exam it's for.
//
// THEORY QUESTIONS: JUPEB mixes MCQ and essay/theory questions.
// Theory questions store a model_answer instead of options/
// correct_index — explicitly a study aid to compare your own attempt
// against, NOT auto-graded, since essay grading isn't something this
// pipeline can do reliably or honestly claim to do.
//
// SECURITY: same caller-verification pattern as the other admin
// functions.
//
// Deploy:  supabase functions deploy admin-manage-exam-prep

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY')!
const ADMIN_EMAILS = (Deno.env.get('ADMIN_EMAILS') ?? '')
  .split(',').map(e => e.trim().toLowerCase()).filter(Boolean)

const supabaseAdmin = createClient(SUPABASE_URL, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)

const SUBJECT_LABELS: Record<string, string> = {
  islamic_studies: 'Islamic Studies',
  arabic: 'Arabic',
}

const BOARD_LABELS: Record<string, string> = {
  utme: 'JAMB UTME (secondary-school-leaving level, purely objective format)',
  jupeb: 'JUPEB (direct-entry to 200-level university depth, mixes objective and essay/theory questions)',
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, content-type, x-client-info, apikey',
  }
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function createPositionCycler(size: number) {
  let queue: number[] = []
  return function next() {
    if (queue.length === 0) {
      queue = shuffle(Array.from({ length: size }, (_, i) => i))
    }
    return queue.pop()!
  }
}

function optionSetKey(options: string[]) {
  return options.map(o => String(o).trim().toLowerCase()).sort().join('|')
}

function notesPrompt(subjectLabel: string, boardLabel: string) {
  return `You are drafting exam-prep study notes for a Nigerian student, on a specific ${subjectLabel} syllabus topic for the ${boardLabel} exam. You will be given the EXACT topics and objectives the syllabus specifies for this entry — base your notes ONLY on what is listed there. Do not add sub-topics not mentioned in the given syllabus detail, and do not omit anything that is mentioned. Match the depth and register to the exam level described above — do not write secondary-school-simple notes for a university-level exam, or overly advanced notes for a secondary-level exam. Write clear, exam-focused notes organized with short paragraphs, covering every listed topic and objective. Do not include questions. Write in English, with Arabic terms/script given correctly where relevant. This is a DRAFT a subject specialist will review before anything is published — if you are not confident about a specific detail beyond what the syllabus itself states, note the uncertainty rather than inventing a precise-sounding fact.`
}

function mcqQuestionsPrompt(subjectLabel: string, boardLabel: string) {
  return `You are drafting ${boardLabel} ${subjectLabel} practice questions in that exam's actual objective style. You will be given the EXACT topics and objectives the syllabus specifies for this entry — every question must test something explicitly listed there, never outside general knowledge. Match question depth to the exam level described above.

Distractor quality is critical — these questions must be genuinely hard to guess without knowing the material:
1. All 4 options must be the same grammatical form, similar length, and same general category as the correct answer.
2. Never make the correct answer stand out by being longer, more specific, or more "complete-sounding" than the distractors.
3. Distractors must be plausible enough that someone who has only skimmed the topic could be fooled — draw wrong options from OTHER real facts within the same syllabus topic, not invented nonsense.
4. Never use "All of the above," "None of the above," or an option that is obviously absurd/unrelated.
5. No two questions in this set may share the same 4 options as each other, even in a different order.
6. Vary which position (A, B, C, or D) holds the correct answer roughly evenly across the 10 questions.

Produce exactly 10 questions, spread across the different sub-topics/objectives given, not clustered on just one. Respond with ONLY a JSON object: {"questions": [{"question": "...", "options": ["...","...","...","..."], "correctIndex": 0, "explanation": "..."}]}. This is a DRAFT a subject specialist will review before publishing — if uncertain about a specific fact even within the given syllabus scope, avoid testing it rather than inventing a precise-sounding but unverified detail.`
}

function theoryQuestionsPrompt(subjectLabel: string, boardLabel: string) {
  return `You are drafting ${boardLabel} ${subjectLabel} theory/essay practice questions, at university-foundation depth. You will be given the EXACT topics and objectives the syllabus specifies for this entry — every question must require substantive discussion of something explicitly listed there.

Produce exactly 5 theory questions. Each should require genuine explanation/discussion/analysis (e.g. "Discuss...", "Account for...", "Examine the significance of..."), not something answerable in one word. For each question, also write a model_answer: a well-organized answer of roughly 150-250 words a student could compare their own attempt against — this is a study aid, NOT an auto-graded scoring key, so it should read like a strong sample answer, not a rigid checklist.

Respond with ONLY a JSON object: {"questions": [{"question": "...", "model_answer": "..."}]}. This is a DRAFT a subject specialist will review before publishing — if uncertain about specifics, keep the model answer general and accurate rather than inventing precise-sounding but unverified detail.`
}

const PARSE_QUESTIONS_PROMPT = `You are parsing a document containing past exam questions, which may be formatted inconsistently — numbered questions with lettered options A-D, correct answers either given inline after each question or listed separately in an answer key section, sometimes with no answer key at all. Extract every real, complete objective (MCQ) question you can find, in the order they appear. For each: the question text, exactly 4 options in order (A-D), the correct answer index (0-3) IF you can determine it with confidence from the document, otherwise set correctIndex to null rather than guessing, and any explanation given in the source. Do not invent or complete a question that is not fully present in the source text. Respond with ONLY JSON: {"questions": [{"question": "...", "options": ["...","...","...","..."], "correctIndex": 0, "explanation": "..."}]} — use null for correctIndex or explanation where not determinable.`

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
  if (callerError || !callerData?.user?.email) {
    return new Response(JSON.stringify({ error: 'Could not verify caller' }), { status: 401, headers: corsHeaders() })
  }
  if (!ADMIN_EMAILS.includes(callerData.user.email.toLowerCase())) {
    return new Response(JSON.stringify({ error: 'Not authorized' }), { status: 403, headers: corsHeaders() })
  }

  let body
  try {
    body = await req.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), { status: 400, headers: corsHeaders() })
  }

  const action = body.action

  if (action === 'list_topics') {
    const { data, error } = await supabaseAdmin
      .from('exam_prep_topics')
      .select('*')
      .order('board')
      .order('subject')
      .order('sort_order')
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true, topics: data }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  if (action === 'add_topic') {
    const { board, subject, title, syllabus_section, syllabus_detail, course_code, sort_order } = body
    if (!board || !subject || !title) {
      return new Response(JSON.stringify({ error: 'board, subject, and title are required' }), { status: 400, headers: corsHeaders() })
    }
    const { data, error } = await supabaseAdmin
      .from('exam_prep_topics')
      .insert({
        board, subject, title,
        syllabus_section: syllabus_section || null,
        syllabus_detail: syllabus_detail || null,
        course_code: course_code || null,
        sort_order: sort_order ?? 0,
      })
      .select().maybeSingle()
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true, topic: data }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  if (action === 'list_content') {
    const topicId = body.topic_id
    if (!topicId) return new Response(JSON.stringify({ error: 'topic_id is required' }), { status: 400, headers: corsHeaders() })
    const [{ data: notes, error: notesErr }, { data: questions, error: qErr }] = await Promise.all([
      supabaseAdmin.from('exam_prep_notes').select('*').eq('topic_id', topicId).order('created_at', { ascending: false }),
      supabaseAdmin.from('exam_prep_questions').select('*').eq('topic_id', topicId).order('created_at', { ascending: false }),
    ])
    if (notesErr || qErr) return new Response(JSON.stringify({ error: (notesErr || qErr)?.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true, notes, questions }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  // ── Manual creation ────────────────────────────────────────
  if (action === 'add_note') {
    const { topic_id, body: noteBody } = body
    if (!topic_id || !noteBody) {
      return new Response(JSON.stringify({ error: 'topic_id and body are required' }), { status: 400, headers: corsHeaders() })
    }
    const { data, error } = await supabaseAdmin
      .from('exam_prep_notes')
      .insert({ topic_id, body: noteBody, status: 'draft', ai_generated: false })
      .select().maybeSingle()
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true, note: data }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  if (action === 'add_question') {
    const { topic_id, question_type, question, options, correct_index, explanation, model_answer } = body
    const qType = question_type === 'theory' ? 'theory' : 'mcq'
    if (!topic_id || !question) {
      return new Response(JSON.stringify({ error: 'topic_id and question are required' }), { status: 400, headers: corsHeaders() })
    }
    if (qType === 'mcq' && (!Array.isArray(options) || options.length !== 4)) {
      return new Response(JSON.stringify({ error: 'exactly 4 options are required for an mcq question' }), { status: 400, headers: corsHeaders() })
    }
    if (qType === 'theory' && !model_answer) {
      return new Response(JSON.stringify({ error: 'model_answer is required for a theory question' }), { status: 400, headers: corsHeaders() })
    }
    const { data, error } = await supabaseAdmin
      .from('exam_prep_questions')
      .insert({
        topic_id, question, question_type: qType,
        options: qType === 'mcq' ? options : null,
        correct_index: qType === 'mcq' && Number.isInteger(correct_index) ? correct_index : null,
        explanation: explanation || null,
        model_answer: qType === 'theory' ? model_answer : null,
        status: 'draft', ai_generated: false,
      })
      .select().maybeSingle()
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true, question: data }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  // ── AI-assisted drafting ──────────────────────────────────────
  if (action === 'generate_draft_notes') {
    const topic = body.topic
    if (!topic?.title) return new Response(JSON.stringify({ error: 'topic is required' }), { status: 400, headers: corsHeaders() })
    try {
      const subjectLabel = SUBJECT_LABELS[topic.subject] || 'this subject'
      const boardLabel = BOARD_LABELS[topic.board] || 'this exam'
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          temperature: 0.3,
          messages: [
            { role: 'system', content: notesPrompt(subjectLabel, boardLabel) },
            { role: 'user', content: `Topic: ${topic.title}\n\nSyllabus topics and objectives for this entry:\n${topic.syllabus_section ? `(${topic.syllabus_section})\n` : ''}${topic.syllabus_detail || '(no detail provided — use the title only, and be conservative)'}` },
          ],
        }),
      })
      const resBody = await res.json()
      if (!res.ok) throw new Error(resBody?.error?.message || 'Draft generation failed')
      const draftText = resBody.choices[0].message.content.trim()

      const { data, error } = await supabaseAdmin
        .from('exam_prep_notes')
        .insert({ topic_id: topic.id, body: draftText, status: 'draft', ai_generated: true })
        .select().maybeSingle()
      if (error) throw error

      return new Response(JSON.stringify({ ok: true, note: data }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders() })
    }
  }

  if (action === 'generate_draft_questions') {
    const topic = body.topic
    const mode = body.mode === 'theory' ? 'theory' : 'mcq'
    if (!topic?.title) return new Response(JSON.stringify({ error: 'topic is required' }), { status: 400, headers: corsHeaders() })
    try {
      const subjectLabel = SUBJECT_LABELS[topic.subject] || 'this subject'
      const boardLabel = BOARD_LABELS[topic.board] || 'this exam'

      const { data: existingQuestions } = await supabaseAdmin
        .from('exam_prep_questions')
        .select('question, options, question_type')
        .eq('topic_id', topic.id)
      const seenQuestionText = new Set((existingQuestions || []).map((q: any) => q.question.trim().toLowerCase()))
      const seenOptionSets = new Set((existingQuestions || []).filter((q: any) => q.question_type === 'mcq').map((q: any) => optionSetKey(q.options)))

      const systemPrompt = mode === 'theory'
        ? theoryQuestionsPrompt(subjectLabel, boardLabel)
        : mcqQuestionsPrompt(subjectLabel, boardLabel)

      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          temperature: 0.5,
          response_format: { type: 'json_object' },
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: `Topic: ${topic.title}\n\nSyllabus topics and objectives for this entry:\n${topic.syllabus_section ? `(${topic.syllabus_section})\n` : ''}${topic.syllabus_detail || '(no detail provided — use the title only, and be conservative)'}` },
          ],
        }),
      })
      const resBody = await res.json()
      if (!res.ok) throw new Error(resBody?.error?.message || 'Draft generation failed')

      let parsed
      try { parsed = JSON.parse(resBody.choices[0].message.content) } catch { throw new Error('Model returned invalid JSON') }
      const rawQuestions = Array.isArray(parsed.questions) ? parsed.questions : []

      if (mode === 'theory') {
        const batchQuestionText = new Set<string>()
        const rows = rawQuestions
          .filter((q: any) => typeof q.question === 'string' && typeof q.model_answer === 'string')
          .filter((q: any) => {
            const key = q.question.trim().toLowerCase()
            if (seenQuestionText.has(key) || batchQuestionText.has(key)) return false
            batchQuestionText.add(key)
            return true
          })
          .map((q: any) => ({
            topic_id: topic.id,
            question_type: 'theory',
            question: q.question,
            options: null,
            correct_index: null,
            explanation: null,
            model_answer: q.model_answer,
            status: 'draft',
            ai_generated: true,
          }))

        if (rows.length === 0) throw new Error('No valid, non-duplicate theory questions were generated — try again')

        const { data, error } = await supabaseAdmin.from('exam_prep_questions').insert(rows).select()
        if (error) throw error
        return new Response(JSON.stringify({ ok: true, questions: data }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
      }

      // ── mcq mode: same dedup + position-cycling as before ──────
      const valid = rawQuestions.filter((q: any) =>
        typeof q.question === 'string'
        && Array.isArray(q.options) && q.options.length === 4
        && Number.isInteger(q.correctIndex) && q.correctIndex >= 0 && q.correctIndex <= 3
      )

      const batchQuestionText = new Set<string>()
      const batchOptionSets = new Set<string>()
      const deduped = valid.filter((q: any) => {
        const qKey = q.question.trim().toLowerCase()
        const oKey = optionSetKey(q.options)
        if (seenQuestionText.has(qKey) || seenOptionSets.has(oKey) || batchQuestionText.has(qKey) || batchOptionSets.has(oKey)) return false
        batchQuestionText.add(qKey)
        batchOptionSets.add(oKey)
        return true
      })

      if (deduped.length === 0) throw new Error('No valid, non-duplicate questions were generated — try again')

      const cyclePosition = createPositionCycler(4)
      const rows = deduped.map((q: any) => {
        const correctText = q.options[q.correctIndex]
        const distractors = q.options.filter((_: any, i: number) => i !== q.correctIndex)
        const shuffledDistractors = shuffle(distractors)
        const position = cyclePosition()
        const options = new Array(4)
        options[position] = correctText
        let d = 0
        for (let i = 0; i < 4; i++) {
          if (i === position) continue
          options[i] = shuffledDistractors[d]
          d++
        }
        return {
          topic_id: topic.id,
          question_type: 'mcq',
          question: q.question,
          options,
          correct_index: position,
          explanation: q.explanation || null,
          model_answer: null,
          status: 'draft',
          ai_generated: true,
        }
      })

      const { data, error } = await supabaseAdmin.from('exam_prep_questions').insert(rows).select()
      if (error) throw error

      return new Response(JSON.stringify({ ok: true, questions: data }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders() })
    }
  }

  // ── Past-question document parsing (MCQ only) ─────────────────
  if (action === 'parse_questions_document') {
    const { topic_id, document_text } = body
    if (!topic_id || !document_text) {
      return new Response(JSON.stringify({ error: 'topic_id and document_text are required' }), { status: 400, headers: corsHeaders() })
    }
    const truncated = document_text.slice(0, 20000)
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          temperature: 0,
          response_format: { type: 'json_object' },
          messages: [
            { role: 'system', content: PARSE_QUESTIONS_PROMPT },
            { role: 'user', content: truncated },
          ],
        }),
      })
      const resBody = await res.json()
      if (!res.ok) throw new Error(resBody?.error?.message || 'Parsing failed')

      let parsed
      try { parsed = JSON.parse(resBody.choices[0].message.content) } catch { throw new Error('Model returned invalid JSON') }
      const rawQuestions = Array.isArray(parsed.questions) ? parsed.questions : []

      const rows = rawQuestions
        .filter((q: any) => typeof q.question === 'string' && Array.isArray(q.options) && q.options.length === 4)
        .map((q: any) => ({
          topic_id,
          question_type: 'mcq',
          question: q.question,
          options: q.options,
          correct_index: Number.isInteger(q.correctIndex) ? q.correctIndex : null,
          explanation: q.explanation || null,
          model_answer: null,
          status: 'draft',
          ai_generated: true,
        }))

      if (rows.length === 0) throw new Error('No questions could be parsed from this document')

      const { data, error } = await supabaseAdmin.from('exam_prep_questions').insert(rows).select()
      if (error) throw error

      const missingAnswers = data.filter((q: any) => q.correct_index === null).length
      return new Response(JSON.stringify({ ok: true, questions: data, missingAnswers }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders() })
    }
  }

  // ── Editing existing draft content ─────────────────────────────
  if (action === 'update_note') {
    const { id, body: noteBody } = body
    if (!id) return new Response(JSON.stringify({ error: 'id is required' }), { status: 400, headers: corsHeaders() })
    const { error } = await supabaseAdmin.from('exam_prep_notes').update({ body: noteBody }).eq('id', id)
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  if (action === 'update_question') {
    const { id, question, options, correct_index, explanation, model_answer } = body
    if (!id) return new Response(JSON.stringify({ error: 'id is required' }), { status: 400, headers: corsHeaders() })
    const { error } = await supabaseAdmin.from('exam_prep_questions').update({ question, options, correct_index, explanation, model_answer }).eq('id', id)
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  // ── Publish / unpublish ─────────────────────────────────────
  if (action === 'publish' || action === 'unpublish') {
    const { table, id } = body
    if (!['exam_prep_notes', 'exam_prep_questions'].includes(table) || !id) {
      return new Response(JSON.stringify({ error: 'valid table and id are required' }), { status: 400, headers: corsHeaders() })
    }
    if (action === 'publish' && table === 'exam_prep_questions') {
      const { data: existing } = await supabaseAdmin.from('exam_prep_questions').select('question_type, correct_index, options, model_answer').eq('id', id).maybeSingle()
      if (!existing) {
        return new Response(JSON.stringify({ error: 'Question not found.' }), { status: 400, headers: corsHeaders() })
      }
      if (existing.question_type === 'mcq' && (existing.correct_index === null || !Array.isArray(existing.options) || existing.options.length !== 4)) {
        return new Response(JSON.stringify({ error: 'This MCQ question is missing a confirmed correct answer or valid options — fix it before publishing.' }), { status: 400, headers: corsHeaders() })
      }
      if (existing.question_type === 'theory' && !existing.model_answer) {
        return new Response(JSON.stringify({ error: 'This theory question is missing a model answer — fix it before publishing.' }), { status: 400, headers: corsHeaders() })
      }
    }
    const status = action === 'publish' ? 'published' : 'draft'
    const patch: any = { status }
    if (action === 'publish') patch.published_at = new Date().toISOString()
    const { error } = await supabaseAdmin.from(table).update(patch).eq('id', id)
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  if (action === 'delete') {
    const { table, id } = body
    if (!['exam_prep_notes', 'exam_prep_questions'].includes(table) || !id) {
      return new Response(JSON.stringify({ error: 'valid table and id are required' }), { status: 400, headers: corsHeaders() })
    }
    const { error } = await supabaseAdmin.from(table).delete().eq('id', id)
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  return new Response(JSON.stringify({ error: `Unknown action: ${action}` }), { status: 400, headers: corsHeaders() })
})