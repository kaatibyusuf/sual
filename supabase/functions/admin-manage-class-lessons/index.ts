// supabase/functions/admin-manage-class-lessons/index.ts
//
// Lets an admin create, override, or preview daily lesson entries for
// the Arabiyyah and Hadeeth classes — one entry per (class_id, level,
// publish_date). Also issues signed Storage upload URLs for class
// audio, so large recordings (tens to hundreds of MB) are uploaded
// directly from the browser to Storage rather than through this
// function's own request body, which has a much lower size limit.
//
// Optionally, on upsert, can auto-create/update a matching LMS
// section+item so the same content posted as "today's lesson" also
// lands in the self-paced course library — see addOrUpdateLmsEntry().
// By default the created section+item stay draft, same as any manual
// LMS entry — entry.publish_immediately skips that manual review step
// when the admin already knows the content reads fine standalone.
//
// SECURITY: same caller-verification pattern as the other admin
// functions — re-checks the caller's own auth token against
// ADMIN_EMAILS on every call, never trusts client-side route gating.
// The signed upload URL itself is short-lived and scoped to one exact
// storage path, so even if intercepted it can't be reused elsewhere.
//
// Deploy:  supabase functions deploy admin-manage-class-lessons
// Uses the same ADMIN_EMAILS secret already set for the other admin functions.
// Requires: ALTER TABLE class_daily_lessons ADD COLUMN lms_section_id uuid REFERENCES lms_sections(id);

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!
const ADMIN_EMAILS = (Deno.env.get('ADMIN_EMAILS') ?? '')
  .split(',')
  .map(e => e.trim().toLowerCase())
  .filter(Boolean)

const supabaseAdmin = createClient(SUPABASE_URL, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)

const VALID_CLASS_IDS = ['arabiyyah', 'hadeeth']
const VALID_LEVELS = ['beginner', 'intermediate', 'advanced']
const AUDIO_BUCKET = 'class-audio'

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, content-type, x-client-info, apikey',
  }
}

function sanitizeFilename(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]/g, '_')
}

// Creates (first save) or updates (subsequent saves) the LMS
// section+item that mirrors this daily lesson's content. Only called
// when the admin explicitly ticks entry.add_to_lms — never automatic —
// so out-of-sequence or review-day posts can simply skip this.
// publishImmediately controls whether the section+item land as
// 'published' right away instead of the usual 'draft' — still opt-in
// per post, defaulting to false (draft) unless explicitly requested.
// Returns { ok: true, section_id, created: boolean, published: boolean }
// on success, or { ok: false, error } on failure — a failure here
// never fails the daily lesson save itself, since the two are
// independent concerns.
async function addOrUpdateLmsEntry(row: {
  class_id: string
  level: string
  title: string
  arabic_text: string | null
  transliteration: string | null
  translation: string | null
  commentary: string | null
  audio_url: string | null
}, existingSectionId: string | null, publishImmediately: boolean) {
  try {
    const status = publishImmediately ? 'published' : 'draft'
    const publishedAt = publishImmediately ? new Date().toISOString() : null

    // ── Already synced once: update the existing item in place ──
    if (existingSectionId) {
      const { data: section, error: sectionErr } = await supabaseAdmin
        .from('lms_sections')
        .select('id')
        .eq('id', existingSectionId)
        .maybeSingle()
      if (sectionErr) return { ok: false, error: sectionErr.message }
      if (!section) {
        // The linked section was deleted separately — fall through
        // to creating a fresh one rather than failing silently.
        existingSectionId = null
      } else {
        // If asked to publish immediately, also publish the section
        // itself — an item can't help a student if its parent
        // section is still draft (this bit us with a real student
        // report earlier: item published, section not, nothing showed).
        if (publishImmediately) {
          await supabaseAdmin
            .from('lms_sections')
            .update({ status: 'published', published_at: publishedAt })
            .eq('id', existingSectionId)
        }
        const { error: itemErr } = await supabaseAdmin
          .from('lms_items')
          .update({
            title: row.title,
            audio_url: row.audio_url,
            arabic_text: row.arabic_text,
            transliteration: row.transliteration,
            translation: row.translation,
            notes: row.commentary,
            status,
            published_at: publishedAt,
          })
          .eq('section_id', existingSectionId)
        if (itemErr) return { ok: false, error: itemErr.message }
        return { ok: true, section_id: existingSectionId, created: false, published: publishImmediately }
      }
    }

    // ── First time syncing this daily lesson: find the matching course ──
    const { data: course, error: courseErr } = await supabaseAdmin
      .from('lms_courses')
      .select('id')
      .eq('class_id', row.class_id)
      .eq('level', row.level)
      .maybeSingle()
    if (courseErr) return { ok: false, error: courseErr.message }
    if (!course) {
      return { ok: false, error: `No LMS course exists for ${row.class_id}/${row.level} yet — create the course in LMS first, or skip auto-adding for this entry.` }
    }

    const { count, error: countErr } = await supabaseAdmin
      .from('lms_sections')
      .select('id', { count: 'exact', head: true })
      .eq('course_id', course.id)
    if (countErr) return { ok: false, error: countErr.message }
    const nextSectionNumber = (count ?? 0) + 1

    const { data: section, error: sectionErr } = await supabaseAdmin
      .from('lms_sections')
      .insert({ course_id: course.id, section_number: nextSectionNumber, title: row.title, status, published_at: publishedAt })
      .select()
      .maybeSingle()
    if (sectionErr) return { ok: false, error: sectionErr.message }

    const { error: itemErr } = await supabaseAdmin
      .from('lms_items')
      .insert({
        section_id: section.id,
        item_number: 1,
        item_type: 'reading',
        title: row.title,
        audio_url: row.audio_url,
        arabic_text: row.arabic_text,
        transliteration: row.transliteration,
        translation: row.translation,
        notes: row.commentary,
        status,
        published_at: publishedAt,
        ai_generated: false,
      })
    if (itemErr) return { ok: false, error: itemErr.message }

    return { ok: true, section_id: section.id, created: true, published: publishImmediately }
  } catch (err) {
    return { ok: false, error: err.message }
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
  if (callerError || !callerData?.user?.email) {
    return new Response(JSON.stringify({ error: 'Could not verify caller' }), { status: 401, headers: corsHeaders() })
  }
  if (!ADMIN_EMAILS.includes(callerData.user.email.toLowerCase())) {
    console.error('Non-admin attempted admin-manage-class-lessons:', callerData.user.email)
    return new Response(JSON.stringify({ error: 'Not authorized' }), { status: 403, headers: corsHeaders() })
  }

  let body
  try {
    body = await req.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), { status: 400, headers: corsHeaders() })
  }

  const action = body.action

  if (action === 'list') {
    const { data, error } = await supabaseAdmin
      .from('class_daily_lessons')
      .select('*')
      .order('publish_date', { ascending: false })
      .limit(60)
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true, entries: data }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  // Issues a signed upload URL scoped to one exact path. The client
  // then uploads the audio file directly to Storage with this URL —
  // the file's bytes never pass through this function, avoiding its
  // request size limit entirely. audioUrl (the eventual public
  // playback URL) is returned alongside so the client can save it
  // straight into the entry once the upload finishes.
  if (action === 'get_upload_url') {
    const classId = (body.class_id || '').trim()
    const level = (body.level || '').trim()
    const publishDate = (body.publish_date || '').trim()
    const filename = sanitizeFilename((body.filename || 'audio.mp3').trim())

    if (!VALID_CLASS_IDS.includes(classId)) {
      return new Response(JSON.stringify({ error: `class_id must be one of ${VALID_CLASS_IDS.join(', ')}` }), { status: 400, headers: corsHeaders() })
    }
    if (!VALID_LEVELS.includes(level)) {
      return new Response(JSON.stringify({ error: `level must be one of ${VALID_LEVELS.join(', ')}` }), { status: 400, headers: corsHeaders() })
    }
    if (!publishDate) {
      return new Response(JSON.stringify({ error: 'publish_date is required' }), { status: 400, headers: corsHeaders() })
    }

    const path = `${classId}/${level}/${publishDate}-${Date.now()}-${filename}`

    const { data: signed, error: signError } = await supabaseAdmin
      .storage
      .from(AUDIO_BUCKET)
      .createSignedUploadUrl(path)

    if (signError) return new Response(JSON.stringify({ error: signError.message }), { status: 500, headers: corsHeaders() })

    const { data: publicUrlData } = supabaseAdmin.storage.from(AUDIO_BUCKET).getPublicUrl(path)

    return new Response(JSON.stringify({
      ok: true,
      path,
      token: signed.token,
      signedUrl: signed.signedUrl,
      audioUrl: publicUrlData.publicUrl,
    }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  if (action === 'upsert') {
    const entry = body.entry || {}
    const classId = (entry.class_id || '').trim()
    const level = (entry.level || '').trim()
    const publishDate = (entry.publish_date || '').trim()

    if (!VALID_CLASS_IDS.includes(classId)) {
      return new Response(JSON.stringify({ error: `class_id must be one of ${VALID_CLASS_IDS.join(', ')}` }), { status: 400, headers: corsHeaders() })
    }
    if (!VALID_LEVELS.includes(level)) {
      return new Response(JSON.stringify({ error: `level must be one of ${VALID_LEVELS.join(', ')}` }), { status: 400, headers: corsHeaders() })
    }
    if (!publishDate) {
      return new Response(JSON.stringify({ error: 'publish_date is required' }), { status: 400, headers: corsHeaders() })
    }
    if (!entry.title || !String(entry.title).trim()) {
      return new Response(JSON.stringify({ error: 'title is required' }), { status: 400, headers: corsHeaders() })
    }

    const row = {
      class_id: classId,
      level,
      publish_date: publishDate,
      title: String(entry.title).trim(),
      arabic_text: entry.arabic_text ? String(entry.arabic_text).trim() : null,
      transliteration: entry.transliteration ? String(entry.transliteration).trim() : null,
      translation: entry.translation ? String(entry.translation).trim() : null,
      commentary: entry.commentary ? String(entry.commentary).trim() : null,
      audio_url: entry.audio_url ? String(entry.audio_url).trim() : null,
      lessons: Array.isArray(entry.lessons)
        ? entry.lessons.map((l: string) => String(l).trim()).filter(Boolean)
        : [],
    }

    const { data, error } = await supabaseAdmin
      .from('class_daily_lessons')
      .upsert(row, { onConflict: 'class_id,level,publish_date' })
      .select()
      .maybeSingle()

    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })

    let lms = null
    if (entry.add_to_lms) {
      lms = await addOrUpdateLmsEntry(row, data?.lms_section_id ?? null, !!entry.publish_immediately)
      // Only write the link back on first-time creation — on update,
      // the existing link is already correct and untouched.
      if (lms.ok && lms.created && data?.id) {
        await supabaseAdmin
          .from('class_daily_lessons')
          .update({ lms_section_id: lms.section_id })
          .eq('id', data.id)
      }
    }

    return new Response(JSON.stringify({ ok: true, entry: data, lms }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  if (action === 'delete') {
    const classId = (body.class_id || '').trim()
    const level = (body.level || '').trim()
    const publishDate = (body.publish_date || '').trim()
    if (!classId || !level || !publishDate) {
      return new Response(JSON.stringify({ error: 'class_id, level, and publish_date are required' }), { status: 400, headers: corsHeaders() })
    }
    const { error } = await supabaseAdmin
      .from('class_daily_lessons')
      .delete()
      .eq('class_id', classId)
      .eq('level', level)
      .eq('publish_date', publishDate)
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  return new Response(JSON.stringify({ error: `Unknown action: ${action}` }), { status: 400, headers: corsHeaders() })
})