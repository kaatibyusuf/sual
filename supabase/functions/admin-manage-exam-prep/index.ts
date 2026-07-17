// supabase/functions/admin-manage-exam-prep/index.ts
//
// Manages UTME exam-prep content: topics, study notes, and practice
// questions. AI drafts content on request or parses uploaded
// past-question documents, but nothing is visible to students until
// an admin explicitly publishes it — this is a review-and-approve
// workflow, not auto-publish, matching how Daily Tafseer and Class
// Lessons already work. This matters more here than most AI content
// in the app: a syllabus misalignment or factual slip has real
// consequences for someone's actual exam score.
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

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, content-type, x-client-info, apikey',
  }
}

const NOTES_PROMPT = `You are drafting UTME (JAMB) exam-prep study notes for a Nigerian student, on a specific Islamic Studies syllabus topic. Write clear, exam-focused notes: the key facts, dates, names, and concepts a student needs to know for this topic, organized with short paragraphs or a simple structure. Do not include questions. Write in English, with Arabic terms/names given correctly where relevant. This is a DRAFT an Islamic scholar will review before anything is published, so prioritize accuracy over polish — if you are not confident about a specific date or detail, note the uncertainty rather than inventing a precise-sounding fact.`

const QUESTIONS_PROMPT = `You are drafting UTME (JAMB) Islamic Studies practice questions in JAMB's actual objective exam style: a clear stem, 4 options (A-D), one correct answer, testing recall or understanding of a specific fact from the syllabus topic given. Produce exactly 10 questions. Respond with ONLY a JSON object: {"questions": [{"question": "...", "options": ["...","...","...","..."], "correctIndex": 0, "explanation": "..."}]}. This is a DRAFT an Islamic scholar will review before publishing — if uncertain about a specific fact, avoid testing it rather than inventing a precise-sounding but unverified detail.`

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
    const { subject, title, syllabus_section, sort_order } = body
    if (!subject || !title) {
      return new Response(JSON.stringify({ error: 'subject and title are required' }), { status: 400, headers: corsHeaders() })
    }
    const { data, error } = await supabaseAdmin
      .from('exam_prep_topics')
      .insert({ subject, title, syllabus_section: syllabus_section || null, sort_order: sort_order ?? 0 })
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
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          temperature: 0.3,
          messages: [
            { role: 'system', content: NOTES_PROMPT },
            { role: 'user', content: `Topic: ${topic.title}${topic.syllabus_section ? ` (${topic.syllabus_section})` : ''}` },
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
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          temperature: 0.4,
          response_format: { type: 'json_object' },
          messages: [
            { role: 'system', content: QUESTIONS_PROMPT },
            { role: 'user', content: `Topic: ${topic.title}${topic.syllabus_section ? ` (${topic.syllabus_section})` : ''}` },
          ],
        }),
      })
      const resBody = await res.json()
      if (!res.ok) throw new Error(resBody?.error?.message || 'Draft generation failed')

      let parsed
      try { parsed = JSON.parse(resBody.choices[0].message.content) } catch { throw new Error('Model returned invalid JSON') }
      const rawQuestions = Array.isArray(parsed.questions) ? parsed.questions : []

      const rows = rawQuestions
        .filter((q: any) => typeof q.question === 'string' && Array.isArray(q.options) && q.options.length === 4 && Number.isInteger(q.correctIndex))
        .map((q: any) => ({
          topic_id: topic.id,
          question: q.question,
          options: q.options,
          correct_index: q.correctIndex,
          explanation: q.explanation || null,
          status: 'draft',
          ai_generated: true,
        }))

      if (rows.length === 0) throw new Error('No valid questions were generated')

      const { data, error } = await supabaseAdmin.from('exam_prep_questions').insert(rows).select()
      if (error) throw error

      return new Response(JSON.stringify({ ok: true, questions: data }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders() })
    }
  }

  // ── Past-question document parsing ────────────────────────────
  // Client extracts text from an uploaded PDF/Word/text file (same
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