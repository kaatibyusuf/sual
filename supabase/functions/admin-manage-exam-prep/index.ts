// supabase/functions/admin-manage-exam-prep/index.ts
//
// Manages UTME exam-prep content: topics, study notes, and practice
// questions, across both Islamic Studies and Arabic. AI drafts
// content on request or parses uploaded past-question documents, but
// nothing is visible to students until an admin explicitly publishes
// it — this is a review-and-approve workflow, not auto-publish,
// matching how Daily Tafseer and Class Lessons already work. This
// matters more here than most AI content in the app: a syllabus
// misalignment or factual slip has real consequences for someone's
// actual exam score.
//
// Generation is grounded in the real JAMB syllabus text for each
// topic (topic.syllabus_detail, seeded from
// src/data/examSyllabusIslamicStudies.js and
// src/data/examSyllabusArabic.js) rather than just a topic title —
// this is what keeps generated notes/questions scoped to what the
// exam actually tests instead of general subject knowledge. Prompts
// are subject-aware (SUBJECT_LABELS) so an Arabic topic is never
// drafted with instructions written for Islamic Studies or vice
// versa.
//
// Question quality safeguards:
//   1. Distractor instructions — same grammatical form/length/
//      category as the correct answer, drawn from other real facts
//      within the same syllabus topic, no "all/none of the above."
//   2. Deduplication — a fresh generation round can't repeat a
//      question or option set already stored for the topic, nor
//      duplicate within the same batch, checked both by question
//      text and by an order-independent option-set fingerprint.
//   3. Reposition — the model's own answer placement is never
//      trusted; correct answers are reshuffled across A–D with a
//      position cycler (same technique as Quiz.jsx/Hifdh.jsx/
//      generate-book-quiz) so the correct letter can't be guessed
//      from a pattern across a question set.
//
// Manual creation (add_note, add_question) exists alongside the AI
// paths, for typing/editing content directly with no AI involved.
//
// SECURITY: same caller-verification pattern as the other admin
// functions — checks the caller's own auth token against
// ADMIN_EMAILS on every call.
//
// Deploy:  supabase functions deploy admin-manage-exam-prep
// Uses the same ADMIN_EMAILS and OPENAI_API_KEY secrets already set.

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

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, content-type, x-client-info, apikey',
  }
}

// ── Shuffle + position cycler ────────────────────────────────
// Identical technique to Quiz.jsx, Hifdh.jsx, and generate-book-quiz
// — guarantees every slot (0..size-1) is used before any slot
// repeats, so the correct answer's position is evenly spread rather
// than left to the model's own (systematically biased) placement.
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

// A normalized, order-independent fingerprint of a question's option
// set — used to catch two questions sharing the same 4 options even
// if the model reordered them, and to catch a freshly generated
// batch overlapping with what's already stored for this topic from
// an earlier generation round.
function optionSetKey(options: string[]) {
  return options.map(o => String(o).trim().toLowerCase()).sort().join('|')
}

function notesPrompt(subjectLabel: string) {
  return `You are drafting UTME (JAMB) exam-prep study notes for a Nigerian student, on a specific ${subjectLabel} syllabus topic. You will be given the EXACT topics and objectives JAMB's own syllabus specifies for this entry — base your notes ONLY on what is listed there. Do not add sub-topics not mentioned in the given syllabus detail, and do not omit anything that is mentioned. Write clear, exam-focused notes organized with short paragraphs, covering every listed topic and objective. Do not include questions. Write in English, with Arabic terms/script given correctly where relevant. This is a DRAFT a subject specialist will review before anything is published — if you are not confident about a specific detail beyond what the syllabus itself states, note the uncertainty rather than inventing a precise-sounding fact.`
}

function questionsPrompt(subjectLabel: string) {
  return `You are drafting UTME (JAMB) ${subjectLabel} practice questions in JAMB's actual objective exam style. You will be given the EXACT topics and objectives JAMB's own syllabus specifies for this entry — every question must test something explicitly listed there, never outside general knowledge.

Distractor quality is critical — these questions must be genuinely hard to guess without knowing the material:
1. All 4 options must be the same grammatical form, similar length, and same general category as the correct answer.
2. Never make the correct answer stand out by being longer, more specific, or more "complete-sounding" than the distractors.
3. Distractors must be plausible enough that someone who has only skimmed the topic could be fooled — draw wrong options from OTHER real facts within the same syllabus topic, not invented nonsense.
4. Never use "All of the above," "None of the above," or an option that is obviously absurd/unrelated — every option must be a genuine, individually plausible candidate.
5. No two questions in this set may share the same 4 options as each other, even in a different order — each question's option set must be distinct.
6. Vary which position (A, B, C, or D) holds the correct answer roughly evenly across the 10 questions — do not let the correct answer default to the same letter repeatedly.

Produce exactly 10 questions, spread across the different sub-topics/objectives given, not clustered on just one. Respond with ONLY a JSON object: {"questions": [{"question": "...", "options": ["...","...","...","..."], "correctIndex": 0, "explanation": "..."}]}. This is a DRAFT a subject specialist will review before publishing — if uncertain about a specific fact even within the given syllabus scope, avoid testing it rather than inventing a precise-sounding but unverified detail.`
}

const PARSE_QUESTIONS_PROMPT = `You are parsing a document containing UTME/JAMB past exam questions, which may be formatted inconsistently — numbered questions with lettered options A-D, correct answers either given inline after each question or listed separately in an answer key section, sometimes with no answer key at all. Extract every real, complete objective question you can find, in the order they appear. For each: the question text, exactly 4 options in order (A-D), the correct answer index (0-3) IF you can determine it with confidence from the document, otherwise set correctIndex to null rather than guessing, and any explanation given in the source. Do not invent or complete a question that is not fully present in the source text. Respond with ONLY JSON: {"questions": [{"question": "...", "options": ["...","...","...","..."], "correctIndex": 0, "explanation": "..."}]} — use null for correctIndex or explanation where not determinable.`

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
      .order('subject')
      .order('sort_order')
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true, topics: data }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  if (action === 'add_topic') {
    const { subject, title, syllabus_section, syllabus_detail, sort_order } = body
    if (!subject || !title) {
      return new Response(JSON.stringify({ error: 'subject and title are required' }), { status: 400, headers: corsHeaders() })
    }
    const { data, error } = await supabaseAdmin
      .from('exam_prep_topics')
      .insert({ subject, title, syllabus_section: syllabus_section || null, syllabus_detail: syllabus_detail || null, sort_order: sort_order ?? 0 })
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

  // ── Manual creation — type/edit directly, no AI involved ─────
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
    const { topic_id, question, options, correct_index, explanation } = body
    if (!topic_id || !question || !Array.isArray(options) || options.length !== 4) {
      return new Response(JSON.stringify({ error: 'topic_id, question, and exactly 4 options are required' }), { status: 400, headers: corsHeaders() })
    }
    const { data, error } = await supabaseAdmin
      .from('exam_prep_questions')
      .insert({
        topic_id, question, options,
        correct_index: Number.isInteger(correct_index) ? correct_index : null,
        explanation: explanation || null,
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
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          temperature: 0.3,
          messages: [
            { role: 'system', content: notesPrompt(subjectLabel) },
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
    if (!topic?.title) return new Response(JSON.stringify({ error: 'topic is required' }), { status: 400, headers: corsHeaders() })
    try {
      const subjectLabel = SUBJECT_LABELS[topic.subject] || 'this subject'

      // Load existing questions for this topic so a new generation
      // round can't duplicate an option set or question from a
      // previous round.
      const { data: existingQuestions } = await supabaseAdmin
        .from('exam_prep_questions')
        .select('question, options')
        .eq('topic_id', topic.id)
      const seenQuestionText = new Set((existingQuestions || []).map((q: any) => q.question.trim().toLowerCase()))
      const seenOptionSets = new Set((existingQuestions || []).map((q: any) => optionSetKey(q.options)))

      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          temperature: 0.5,
          response_format: { type: 'json_object' },
          messages: [
            { role: 'system', content: questionsPrompt(subjectLabel) },
            { role: 'user', content: `Topic: ${topic.title}\n\nSyllabus topics and objectives for this entry:\n${topic.syllabus_section ? `(${topic.syllabus_section})\n` : ''}${topic.syllabus_detail || '(no detail provided — use the title only, and be conservative)'}` },
          ],
        }),
      })
      const resBody = await res.json()
      if (!res.ok) throw new Error(resBody?.error?.message || 'Draft generation failed')

      let parsed
      try { parsed = JSON.parse(resBody.choices[0].message.content) } catch { throw new Error('Model returned invalid JSON') }
      const rawQuestions = Array.isArray(parsed.questions) ? parsed.questions : []

      const valid = rawQuestions.filter((q: any) =>
        typeof q.question === 'string'
        && Array.isArray(q.options) && q.options.length === 4
        && Number.isInteger(q.correctIndex) && q.correctIndex >= 0 && q.correctIndex <= 3
      )

      // Drop anything duplicating a question already stored for this
      // topic, or duplicating another question within this SAME
      // batch — both by question text and by option-set fingerprint,
      // since two differently-worded questions sharing identical
      // options is just as easy to game as identical wording.
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

      // Reposition the correct answer using a position cycler rather
      // than trusting the model's own placement, which tends to
      // cluster on the same letter — this is the actual mechanism
      // that makes the answer letter itself unguessable.
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
          question: q.question,
          options,
          correct_index: position,
          explanation: q.explanation || null,
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

  // ── Past-question document parsing ────────────────────────────
  // Client extracts text from an uploaded PDF/plain-text file (same
  // extraction approach BookQuiz.jsx already uses for PDFs) and
  // sends the raw text here.
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
          question: q.question,
          options: q.options,
          correct_index: Number.isInteger(q.correctIndex) ? q.correctIndex : null,
          explanation: q.explanation || null,
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
    const { id, question, options, correct_index, explanation } = body
    if (!id) return new Response(JSON.stringify({ error: 'id is required' }), { status: 400, headers: corsHeaders() })
    const { error } = await supabaseAdmin.from('exam_prep_questions').update({ question, options, correct_index, explanation }).eq('id', id)
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  // ── Publish / unpublish ─────────────────────────────────────
  // A question can never go live with a missing or unconfirmed
  // answer — this is the guard against a parsed past-question that
  // the AI couldn't determine an answer for silently reaching
  // students with a wrong or absent answer key.
  if (action === 'publish' || action === 'unpublish') {
    const { table, id } = body
    if (!['exam_prep_notes', 'exam_prep_questions'].includes(table) || !id) {
      return new Response(JSON.stringify({ error: 'valid table and id are required' }), { status: 400, headers: corsHeaders() })
    }
    if (action === 'publish' && table === 'exam_prep_questions') {
      const { data: existing } = await supabaseAdmin.from('exam_prep_questions').select('correct_index, options').eq('id', id).maybeSingle()
      if (!existing || existing.correct_index === null || !Array.isArray(existing.options) || existing.options.length !== 4) {
        return new Response(JSON.stringify({ error: 'This question is missing a confirmed correct answer or valid options — fix it before publishing.' }), { status: 400, headers: corsHeaders() })
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