// supabase/functions/hifdh-voice-check/index.ts
//
// Transcribes a short recitation clip via OpenAI's gpt-4o-mini-transcribe
// (chosen over full Whisper for cost — half price, and this only needs
// rough word-matching, not tajweed-level accuracy) and checks it against
// the expected passage text. Any authenticated user can call this, it's
// not admin-gated.
//
// The expected text is supplied by the client rather than looked up
// server-side, since the Qur'an/hadith datasets live in frontend JS
// (collections.js), not a table this function can query. That's an
// acceptable trust boundary here: this only affects the calling user's
// own Leitner box progress, not anyone else's.
//
// A simple daily cap per user guards against a bug or bad actor looping
// requests and running up a bill — HIFDH_VOICE_DAILY_CAP, default 30.
//
// Deploy:  supabase functions deploy hifdh-voice-check
// Secrets: supabase secrets set OPENAI_API_KEY=sk-...
//          supabase secrets set HIFDH_VOICE_DAILY_CAP=30   (optional)

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY')!
const DAILY_CAP = parseInt(Deno.env.get('HIFDH_VOICE_DAILY_CAP') ?? '30', 10)

const supabaseAdmin = createClient(SUPABASE_URL, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)

// Rough word-overlap bar the earlier scoping call landed on — "was
// the right verse attempted," not pronunciation grading. Only used
// directly for passages longer than 4 words now — see the
// requiredMatches comment below for why short ones get their own
// rule instead of this flat percentage.
const MATCH_THRESHOLD = 0.6

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, content-type, x-client-info, apikey',
  }
}

// Mirrors Hifdh.jsx's normalizeArabic() exactly, kept in sync
// deliberately — strips diacritics/tatweel and folds alef/ya/ta-marbuta
// variants so a transcript that's correct but not diacritically
// perfect (which Whisper output essentially never is) still matches.
//
// FIX: the alef-folding class was missing ٱ (U+0671, ARABIC LETTER
// ALEF WASLA) — the character Tanzil's Uthmani Qur'an text uses for
// the definite article and hamzat-wasl forms (ٱللَّه, ٱلصِّرَٰطَ,
// ٱلَّذِينَ, etc). gpt-4o-mini-transcribe returns ordinary orthography
// (ا) for what it hears, so any expected passage using ٱ — which is
// most of them, since it covers the definite article — normalized to
// two DIFFERENT strings on the expected side vs. the transcript side,
// failing an otherwise word-perfect recitation. Fixed here and in
// Hifdh.jsx's copy together, since they're meant to stay identical.
function normalizeArabic(str: string) {
  return (str || '')
    .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g, '')
    .replace(/[إأآاٱ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/\s+/g, ' ')
    .trim()
}

function words(text: string) {
  return normalizeArabic(text).split(' ').filter(Boolean)
}

function extensionFor(mimeType: string) {
  if (mimeType.includes('mp4')) return 'mp4'
  if (mimeType.includes('ogg')) return 'ogg'
  if (mimeType.includes('wav')) return 'wav'
  return 'webm'
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

  // ── Daily cap ──────────────────────────────────────────────
  const startOfDay = new Date()
  startOfDay.setUTCHours(0, 0, 0, 0)
  const { count, error: countError } = await supabaseAdmin
    .from('hifdh_voice_checks')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', userId)
    .gte('created_at', startOfDay.toISOString())
  if (countError) {
    console.error('Failed to check daily voice check count:', countError)
  } else if ((count ?? 0) >= DAILY_CAP) {
    return new Response(JSON.stringify({ error: `Daily recitation check limit reached (${DAILY_CAP}). Try again tomorrow, or type your answer instead.` }), { status: 429, headers: corsHeaders() })
  }

  let body
  try {
    body = await req.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), { status: 400, headers: corsHeaders() })
  }

  const audioBase64 = body.audio
  const mimeType = body.mimeType || 'audio/webm'
  const expectedText = body.expectedText

  if (!audioBase64 || !expectedText) {
    return new Response(JSON.stringify({ error: 'audio and expectedText are required' }), { status: 400, headers: corsHeaders() })
  }

  try {
    const binary = Uint8Array.from(atob(audioBase64), c => c.charCodeAt(0))
    const filename = `recitation.${extensionFor(mimeType)}`

    const form = new FormData()
    form.append('file', new Blob([binary], { type: mimeType }), filename)
    form.append('model', 'gpt-4o-mini-transcribe')
    form.append('language', 'ar')

    const transcribeRes = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${OPENAI_API_KEY}` },
      body: form,
    })

    const transcribeBody = await transcribeRes.json()
    if (!transcribeRes.ok) {
      console.error('Transcription failed:', transcribeBody)
      throw new Error(transcribeBody?.error?.message || 'Transcription failed')
    }

    const transcript = transcribeBody.text || ''
    const expectedWords = words(expectedText)
    const heardWords = new Set(words(transcript))
    const matched = expectedWords.filter(w => heardWords.has(w)).length
    const overlap = expectedWords.length > 0 ? matched / expectedWords.length : 0

    // A flat 60% threshold leaves almost no room for a single
    // mistranscribed word on short passages — for a 2-word tail
    // (the shortest Hifdh.jsx allows), 60% rounds up to requiring
    // BOTH words perfect, zero tolerance for the transcription model
    // slipping on one syllable. Allowing exactly one miss on short
    // passages keeps the bar at "did you recite the right thing,"
    // not "did gpt-4o-mini-transcribe catch every word perfectly."
    const requiredMatches = expectedWords.length <= 4
      ? Math.max(1, expectedWords.length - 1)
      : Math.ceil(expectedWords.length * MATCH_THRESHOLD)
    const correct = matched >= requiredMatches

    await supabaseAdmin.from('hifdh_voice_checks').insert({ user_id: userId })

    return new Response(JSON.stringify({ ok: true, correct, transcript, overlap }), {
      headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('hifdh-voice-check failed:', err)
    return new Response(JSON.stringify({ error: err.message || String(err) }), { status: 500, headers: corsHeaders() })
  }
})