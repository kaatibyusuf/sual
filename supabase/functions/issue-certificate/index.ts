// supabase/functions/issue-certificate/index.ts
//
// Issues a genuine, verifiable certificate: re-checks course
// completion server-side (never trusts a client-supplied "I
// finished" claim, since that could be forged via browser dev
// tools), generates a random reference code with real entropy, and
// logs it to the certificates table. Returns that code to the
// caller, which is what actually gets printed on the certificate
// image and later checked by verify-certificate.
//
// Deploy:  supabase functions deploy issue-certificate --no-verify-jwt
// (matches admin-stats' pattern: this function does its own internal
// JWT check via the anon client rather than relying on the gateway)
//
// Requires the certificates table (certificates_migration.sql) to
// already exist.
//
// IMPORTANT: COURSE_CONFIG below only lists the four courses whose
// exact total unit count is confirmed (tajweedclass, seerahclass,
// arabiyyahclass, hadeethclass -- all built directly in this
// project, so their unit counts are certain). Adab Class and
// Tawheed Class are deliberately NOT listed, since their real total
// unit counts were never confirmed here. Guessing a number for
// either would be a genuine security bug either way: guessing too
// low would let someone claim a "verified" certificate without
// actually finishing every unit; guessing too high would wrongly
// block genuine completions. Add the correct quizAttemptsTable and
// totalUnits for each once confirmed against the real course data.

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!

const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

// COURSE_CONFIG below lists all six courses, all now confirmed.
// Tajweed, Seerah, Arabiyyah, and Hadeeth Classes' unit counts and
// table names were certain from the start (built directly in this
// project). Adab Class (12 units) and Tawheed Class (14 units) were
// confirmed directly against their real migration files
// (adab_quiz_attempts, tawheed_quiz_attempts), matching the
// {courseId}_quiz_attempts pattern every other course also follows.
const COURSE_CONFIG: Record<string, { quizAttemptsTable: string; totalUnits: number; label: string; codePrefix: string }> = {
  adab: { quizAttemptsTable: 'adab_quiz_attempts', totalUnits: 12, label: 'Adab Class', codePrefix: 'ADAB' },
  tawheed: { quizAttemptsTable: 'tawheed_quiz_attempts', totalUnits: 14, label: 'Tawheed Class', codePrefix: 'TAWH' },
  tajweedclass: { quizAttemptsTable: 'tajweedclass_quiz_attempts', totalUnits: 12, label: 'Tajweed Class', codePrefix: 'TAJW' },
  seerahclass: { quizAttemptsTable: 'seerahclass_quiz_attempts', totalUnits: 14, label: 'Seerah Class', codePrefix: 'SEER' },
  arabiyyahclass: { quizAttemptsTable: 'arabiyyahclass_quiz_attempts', totalUnits: 14, label: 'Arabiyyah Class', codePrefix: 'ARAB' },
  hadeethclass: { quizAttemptsTable: 'hadeethclass_quiz_attempts', totalUnits: 14, label: 'Hadeeth Class', codePrefix: 'HADE' },
}

// Genuine, non-guessable entropy -- 8 random characters from a
// 32-symbol alphabet (no 0/O/1/I, to avoid transcription mistakes
// when someone types a code in by hand) gives 32^8, over one
// trillion, possible codes. Collisions are handled by retrying on
// the table's own unique constraint, though at this entropy that
// should essentially never actually happen.
const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

function randomSuffix(length = 8) {
  const bytes = new Uint8Array(length)
  crypto.getRandomValues(bytes)
  return Array.from(bytes, (b) => CODE_ALPHABET[b % CODE_ALPHABET.length]).join('')
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const authHeader = req.headers.get('Authorization') ?? ''
  const jwt = authHeader.replace('Bearer ', '')

  const asUser = createClient(SUPABASE_URL, ANON_KEY, {
    global: { headers: { Authorization: authHeader } },
  })
  const { data: userData, error: userErr } = await asUser.auth.getUser(jwt)
  if (userErr || !userData?.user) {
    return json({ error: 'Not authenticated' }, 401)
  }
  const userId = userData.user.id

  let body: { courseId?: string; recipientName?: string }
  try {
    body = await req.json()
  } catch {
    return json({ error: 'Invalid request body' }, 400)
  }

  const courseId = body.courseId
  const recipientName = (body.recipientName || '').trim()

  if (!courseId || !recipientName) {
    return json({ error: 'courseId and recipientName are required' }, 400)
  }

  const config = COURSE_CONFIG[courseId]
  if (!config) {
    return json({ error: `Certificate issuance for "${courseId}" is not yet configured (its total unit count has not been confirmed).` }, 400)
  }

  // The actual, server-side completion check. This is the part that
  // makes the resulting certificate genuinely trustworthy: it does
  // not accept the client's own claim that every unit is complete.
  const { data: passedRows, error: attemptsError } = await admin
    .from(config.quizAttemptsTable)
    .select('unit_id')
    .eq('user_id', userId)
    .eq('passed', true)

  if (attemptsError) {
    return json({ error: attemptsError.message }, 500)
  }

  const distinctPassedUnits = new Set((passedRows ?? []).map((r) => r.unit_id))
  if (distinctPassedUnits.size < config.totalUnits) {
    return json({
      error: `Course not yet complete: ${distinctPassedUnits.size} of ${config.totalUnits} units passed.`,
    }, 403)
  }

  // Idempotency: if this exact user already has a certificate for
  // this exact course, return the existing one rather than minting
  // a second, different code for the same real achievement.
  const { data: existing } = await admin
    .from('certificates')
    .select('reference_code, recipient_name, issued_at')
    .eq('user_id', userId)
    .eq('course_id', courseId)
    .maybeSingle()

  if (existing) {
    return json({
      referenceCode: existing.reference_code,
      recipientName: existing.recipient_name,
      issuedAt: existing.issued_at,
      courseLabel: config.label,
    })
  }

  // Generate a code, retrying on the rare chance of a collision.
  let referenceCode = ''
  let inserted = false
  let lastError: string | null = null

  for (let attempt = 0; attempt < 5 && !inserted; attempt++) {
    referenceCode = `SUAL-${config.codePrefix}-${randomSuffix()}`
    const { error: insertError } = await admin.from('certificates').insert({
      reference_code: referenceCode,
      user_id: userId,
      course_id: courseId,
      recipient_name: recipientName,
    })
    if (!insertError) {
      inserted = true
    } else if (insertError.code === '23505') {
      // unique_violation on reference_code -- extremely unlikely at
      // this entropy, but retry with a freshly generated code rather
      // than fail outright.
      lastError = insertError.message
      continue
    } else {
      return json({ error: insertError.message }, 500)
    }
  }

  if (!inserted) {
    return json({ error: lastError ?? 'Failed to generate a unique certificate code' }, 500)
  }

  return json({
    referenceCode,
    recipientName,
    issuedAt: new Date().toISOString(),
    courseLabel: config.label,
  })
})