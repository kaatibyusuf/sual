import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY')!
const ADMIN_EMAILS = (Deno.env.get('ADMIN_EMAILS') ?? '')
  .split(',').map(e => e.trim().toLowerCase()).filter(Boolean)

const supabaseAdmin = createClient(SUPABASE_URL, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)

const AUDIO_BUCKET = 'class-audio'

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

function sanitizeFilename(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]/g, '_')
}

const NOTES_PROMPT = `You are drafting written study notes for one item in an Islamic Arabiyyah/Hadeeth course, to accompany a teacher's recorded audio lesson. You will be given the item's title and its Arabic text/translation. Write clear notes covering the key points, vocabulary, and grammatical or hadith-related concepts a student should take from this item. Do not include questions. This is a DRAFT a qualified reviewer will check before publishing — note uncertainty rather than inventing a precise-sounding but unverified detail.`

const QUESTIONS_PROMPT = `You are drafting 20 multiple-choice comprehension questions for one item in an Islamic Arabiyyah/Hadeeth course, based ONLY on the item's given text and notes. All 4 options per question must be the same grammatical form and plausible category as the correct answer — no "all/none of the above," no option that's obviously the odd one out. No two questions may share the same 4 options. Respond with ONLY JSON: {"questions": [{"question": "...", "options": ["...","...","...","..."], "correctIndex": 0, "explanation": "..."}]}. This is a DRAFT a qualified reviewer will check before publishing.`

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

  // ── Courses ──────────────────────────────────────────────────
  if (action === 'list_courses') {
    const { data, error } = await supabaseAdmin
      .from('lms_courses')
      .select('*')
      .order('class_id').order('level').order('sort_order')
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true, courses: data }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  if (action === 'add_course') {
    const { class_id, level, title, arabic_title, description, teacher_name, sort_order } = body
    if (!class_id || !level || !title) {
      return new Response(JSON.stringify({ error: 'class_id, level, and title are required' }), { status: 400, headers: corsHeaders() })
    }
    const { data, error } = await supabaseAdmin
      .from('lms_courses')
      .insert({ class_id, level, title, arabic_title: arabic_title || null, description: description || null, teacher_name: teacher_name || null, sort_order: sort_order ?? 0 })
      .select().maybeSingle()
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true, course: data }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  // ── Sections ─────────────────────────────────────────────────
  if (action === 'list_sections') {
    const courseId = body.course_id
    if (!courseId) return new Response(JSON.stringify({ error: 'course_id is required' }), { status: 400, headers: corsHeaders() })
    const { data, error } = await supabaseAdmin.from('lms_sections').select('*').eq('course_id', courseId).order('section_number')
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true, sections: data }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  if (action === 'add_section') {
    const { course_id, section_number, title } = body
    if (!course_id || !section_number || !title) {
      return new Response(JSON.stringify({ error: 'course_id, section_number, and title are required' }), { status: 400, headers: corsHeaders() })
    }
    const { data, error } = await supabaseAdmin.from('lms_sections').insert({ course_id, section_number, title, status: 'draft' }).select().maybeSingle()
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true, section: data }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  // ── Items ────────────────────────────────────────────────────
  if (action === 'list_items') {
    const sectionId = body.section_id
    if (!sectionId) return new Response(JSON.stringify({ error: 'section_id is required' }), { status: 400, headers: corsHeaders() })
    const { data, error } = await supabaseAdmin.from('lms_items').select('*').eq('section_id', sectionId).order('item_number')
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true, items: data }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  if (action === 'add_item') {
    const { section_id, item_number, item_type, title, audio_url, arabic_text, transliteration, translation, notes } = body
    if (!section_id || !item_number || !item_type || !title) {
      return new Response(JSON.stringify({ error: 'section_id, item_number, item_type, and title are required' }), { status: 400, headers: corsHeaders() })
    }
    if (!['audio', 'reading', 'quiz', 'discussion'].includes(item_type)) {
      return new Response(JSON.stringify({ error: 'invalid item_type' }), { status: 400, headers: corsHeaders() })
    }
    const { data, error } = await supabaseAdmin
      .from('lms_items')
      .insert({
        section_id,
        item_number,
        item_type,
        title,
        audio_url: audio_url || null,
        arabic_text: arabic_text || null,
        transliteration: transliteration || null,
        translation: translation || null,
        notes: notes || null,
        status: 'draft',
        ai_generated: false,
      })
      .select().maybeSingle()
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true, item: data }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  if (action === 'update_item') {
    // FIX: previously `const { id, ...fields } = body` left `action`
    // (e.g. "update_item") inside `fields`, which then got spread into
    // .update(fields) and sent to Postgres as a column to write —
    // causing "Could not find the 'action' column of 'lms_items' in
    // the schema cache" on every single item edit. Destructuring
    // `action` out alongside `id` keeps fields to real columns only.
    const { id, action: _omit, ...fields } = body
    if (!id) return new Response(JSON.stringify({ error: 'id is required' }), { status: 400, headers: corsHeaders() })
    const { error } = await supabaseAdmin.from('lms_items').update(fields).eq('id', id)
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  if (action === 'get_upload_url') {
    const { section_id, item_number, filename } = body
    if (!section_id || !item_number) {
      return new Response(JSON.stringify({ error: 'section_id and item_number are required' }), { status: 400, headers: corsHeaders() })
    }
    const path = `lms/${section_id}/item-${item_number}-${Date.now()}-${sanitizeFilename(filename || 'audio.mp3')}`
    const { data: signed, error: signError } = await supabaseAdmin.storage.from(AUDIO_BUCKET).createSignedUploadUrl(path)
    if (signError) return new Response(JSON.stringify({ error: signError.message }), { status: 500, headers: corsHeaders() })
    const { data: publicUrlData } = supabaseAdmin.storage.from(AUDIO_BUCKET).getPublicUrl(path)
    return new Response(JSON.stringify({ ok: true, path, token: signed.token, audioUrl: publicUrlData.publicUrl }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  // ── Item questions (quiz items only) ────────────────────────
  if (action === 'list_item_questions') {
    const itemId = body.item_id
    if (!itemId) return new Response(JSON.stringify({ error: 'item_id is required' }), { status: 400, headers: corsHeaders() })
    const { data, error } = await supabaseAdmin.from('lms_item_questions').select('*').eq('item_id', itemId).order('created_at', { ascending: false })
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true, questions: data }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  if (action === 'generate_draft_notes') {
    const item = body.item
    if (!item?.title) return new Response(JSON.stringify({ error: 'item is required' }), { status: 400, headers: corsHeaders() })
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'gpt-4o-mini', temperature: 0.3,
          messages: [
            { role: 'system', content: NOTES_PROMPT },
            { role: 'user', content: `Item: ${item.title}\n\nArabic text: ${item.arabic_text || '(none provided)'}\nTranslation: ${item.translation || '(none provided)'}` },
          ],
        }),
      })
      const resBody = await res.json()
      if (!res.ok) throw new Error(resBody?.error?.message || 'Draft generation failed')
      const draftText = resBody.choices[0].message.content.trim()
      const { error } = await supabaseAdmin.from('lms_items').update({ notes: draftText, ai_generated: true }).eq('id', item.id)
      if (error) throw error
      return new Response(JSON.stringify({ ok: true, notes: draftText }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders() })
    }
  }

  if (action === 'generate_draft_questions') {
    const item = body.item
    if (!item?.title) return new Response(JSON.stringify({ error: 'item is required' }), { status: 400, headers: corsHeaders() })
    try {
      const { data: existingQuestions } = await supabaseAdmin.from('lms_item_questions').select('question, options').eq('item_id', item.id)
      const seenQuestionText = new Set((existingQuestions || []).map((q: any) => q.question.trim().toLowerCase()))
      const seenOptionSets = new Set((existingQuestions || []).map((q: any) => optionSetKey(q.options)))

      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'gpt-4o-mini', temperature: 0.4, response_format: { type: 'json_object' },
          messages: [
            { role: 'system', content: QUESTIONS_PROMPT },
            { role: 'user', content: `Item: ${item.title}\n\nArabic text: ${item.arabic_text || '(none)'}\nTranslation: ${item.translation || '(none)'}\nNotes: ${item.notes || '(none)'}` },
          ],
        }),
      })
      const resBody = await res.json()
      if (!res.ok) throw new Error(resBody?.error?.message || 'Draft generation failed')

      let parsed
      try { parsed = JSON.parse(resBody.choices[0].message.content) } catch { throw new Error('Model returned invalid JSON') }

      const rawQuestions = Array.isArray(parsed.questions) ? parsed.questions : []
      const valid = rawQuestions.filter((q: any) =>
        typeof q.question === 'string' && Array.isArray(q.options) && q.options.length === 4
        && Number.isInteger(q.correctIndex) && q.correctIndex >= 0 && q.correctIndex <= 3
      )

      const batchQuestionText = new Set<string>()
      const batchOptionSets = new Set<string>()
      const deduped = valid.filter((q: any) => {
        const qKey = q.question.trim().toLowerCase()
        const oKey = optionSetKey(q.options)
        if (seenQuestionText.has(qKey) || seenOptionSets.has(oKey) || batchQuestionText.has(qKey) || batchOptionSets.has(oKey)) return false
        batchQuestionText.add(qKey); batchOptionSets.add(oKey)
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
        for (let i = 0; i < 4; i++) { if (i === position) continue; options[i] = shuffledDistractors[d]; d++ }
        return { item_id: item.id, question: q.question, options, correct_index: position, explanation: q.explanation || null, status: 'draft', ai_generated: true }
      })

      const { data, error } = await supabaseAdmin.from('lms_item_questions').insert(rows).select()
      if (error) throw error
      return new Response(JSON.stringify({ ok: true, questions: data }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders() })
    }
  }

  // ── Publish / unpublish / delete (shared across tables) ─────
  if (action === 'publish' || action === 'unpublish') {
    const { table, id } = body
    if (!['lms_sections', 'lms_items', 'lms_item_questions'].includes(table) || !id) {
      return new Response(JSON.stringify({ error: 'valid table and id are required' }), { status: 400, headers: corsHeaders() })
    }
    if (action === 'publish' && table === 'lms_item_questions') {
      const { data: existing } = await supabaseAdmin.from('lms_item_questions').select('correct_index, options').eq('id', id).maybeSingle()
      if (!existing || existing.correct_index === null || !Array.isArray(existing.options) || existing.options.length !== 4) {
        return new Response(JSON.stringify({ error: 'This question is missing a confirmed correct answer — fix it before publishing.' }), { status: 400, headers: corsHeaders() })
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
    if (!['lms_courses', 'lms_sections', 'lms_items', 'lms_item_questions'].includes(table) || !id) {
      return new Response(JSON.stringify({ error: 'valid table and id are required' }), { status: 400, headers: corsHeaders() })
    }
    const { error } = await supabaseAdmin.from(table).delete().eq('id', id)
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  return new Response(JSON.stringify({ error: `Unknown action: ${action}` }), { status: 400, headers: corsHeaders() })
})