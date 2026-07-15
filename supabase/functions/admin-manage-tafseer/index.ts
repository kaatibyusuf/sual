// supabase/functions/admin-manage-tafseer/index.ts
//
// Lets an admin create, override, or preview daily_tafseer entries —
// filling in a verse ahead of time, correcting a bad automated pick,
// or adding hand-picked `lessons` and `transliteration`, which
// daily-tafseer-generator deliberately never fetches (lessons because
// deriving them well from raw text wasn't worth faking; transliteration
// simply wasn't part of that dataset).
//
// Upserts on `publish_date`, the same column daily-tafseer-generator
// checks before publishing. If an admin has already set an entry for
// a date, the generator's existing-row check will find it and skip
// that date on its own — no extra coordination needed between the
// two paths.
//
// SECURITY: same caller-verification pattern as admin-grant-access —
// re-checks the caller's own auth token against ADMIN_EMAILS on every
// call, never trusts client-side route gating.
//
// Deploy:  supabase functions deploy admin-manage-tafseer
// Uses the same ADMIN_EMAILS secret already set for admin-grant-access.

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!
const ADMIN_EMAILS = (Deno.env.get('ADMIN_EMAILS') ?? '')
  .split(',')
  .map(e => e.trim().toLowerCase())
  .filter(Boolean)

const supabaseAdmin = createClient(SUPABASE_URL, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)

// x-client-info and apikey are headers the Supabase JS client attaches
// to every request automatically — without allowlisting them here, the
// browser's CORS preflight rejects the call before it ever reaches this
// function, which is exactly what was happening (Supabase's own logs
// showed no invocation at all, since the request never arrived).
function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, content-type, x-client-info, apikey',
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
    console.error('Non-admin attempted admin-manage-tafseer:', callerData.user.email)
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
      .from('daily_tafseer')
      .select('*')
      .order('publish_date', { ascending: false })
      .limit(30)
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true, entries: data }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  if (action === 'upsert') {
    const entry = body.entry || {}
    const publishDate = (entry.publish_date || '').trim()
    if (!publishDate) {
      return new Response(JSON.stringify({ error: 'publish_date is required' }), { status: 400, headers: corsHeaders() })
    }
    if (!entry.surah_name || !entry.arabic_text || !entry.translation) {
      return new Response(JSON.stringify({ error: 'surah_name, arabic_text, and translation are required' }), { status: 400, headers: corsHeaders() })
    }

    const row = {
      publish_date: publishDate,
      surah_name: String(entry.surah_name).trim(),
      surah_num: entry.surah_num ? Number(entry.surah_num) : null,
      ayah_num: entry.ayah_num ? Number(entry.ayah_num) : null,
      arabic_text: String(entry.arabic_text).trim(),
      transliteration: entry.transliteration ? String(entry.transliteration).trim() : null,
      translation: String(entry.translation).trim(),
      tafseer_body: entry.tafseer_body ? String(entry.tafseer_body).trim() : '',
      lessons: Array.isArray(entry.lessons)
        ? entry.lessons.map((l: string) => String(l).trim()).filter(Boolean)
        : [],
    }

    const { data, error } = await supabaseAdmin
      .from('daily_tafseer')
      .upsert(row, { onConflict: 'publish_date' })
      .select()
      .maybeSingle()

    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true, entry: data }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  if (action === 'delete') {
    const publishDate = (body.publish_date || '').trim()
    if (!publishDate) {
      return new Response(JSON.stringify({ error: 'publish_date is required' }), { status: 400, headers: corsHeaders() })
    }
    const { error } = await supabaseAdmin.from('daily_tafseer').delete().eq('publish_date', publishDate)
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  return new Response(JSON.stringify({ error: `Unknown action: ${action}` }), { status: 400, headers: corsHeaders() })
})