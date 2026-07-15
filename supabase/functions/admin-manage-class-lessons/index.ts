// supabase/functions/admin-manage-class-lessons/index.ts
//
// Lets an admin create, override, or preview daily lesson entries for
// the Arabiyyah and Hadeeth classes — one entry per (class_id, level,
// publish_date). Also issues signed Storage upload URLs for class
// audio, so large recordings (tens to hundreds of MB) are uploaded
// directly from the browser to Storage rather than through this
// function's own request body, which has a much lower size limit.
//
// SECURITY: same caller-verification pattern as the other admin
// functions — re-checks the caller's own auth token against
// ADMIN_EMAILS on every call, never trusts client-side route gating.
// The signed upload URL itself is short-lived and scoped to one exact
// storage path, so even if intercepted it can't be reused elsewhere.
//
// Deploy:  supabase functions deploy admin-manage-class-lessons
// Uses the same ADMIN_EMAILS secret already set for the other admin functions.

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
    return new Response(JSON.stringify({ ok: true, entry: data }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
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