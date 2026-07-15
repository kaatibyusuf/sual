// supabase/functions/admin-grant-access/index.ts
//
// Manually grants (or repairs) a Spaces subscription for a member who
// paid but is stuck without access, or provisions a brand-new account
// for someone who paid without ever creating one. Writes to
// `subscriptions` with the same shape paystack-webhook writes on a
// real charge.success, so a manually-granted member is
// indistinguishable from one who paid through the normal flow —
// paystack_customer_code / paystack_subscription_code are simply left
// null, since there's no real Paystack transaction behind this grant.
// That also means subscription.disable can never auto-expire a
// manually-granted member later; if one needs to be removed, it has
// to be done manually too.
//
// SECURITY: this can create accounts and grant paid access on demand,
// so it never trusts client-side route gating. It re-verifies the
// caller's own identity via their auth token and checks it against
// ADMIN_EMAILS on every call.
//
// Deploy:  supabase functions deploy admin-grant-access
// Secrets: supabase secrets set ADMIN_EMAILS=kaatibyusuf@gmail.com
//          (comma-separated if more than one admin)
//          BROADCAST_RESEND_KEY, SUPABASE_SERVICE_ROLE_KEY, and
//          SUPABASE_ANON_KEY are already set from other functions.

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!
const RESEND_API_KEY = Deno.env.get('BROADCAST_RESEND_KEY')!
const FROM_ADDRESS = 'Sual <hello@usesual.com>'
const ADMIN_EMAILS = (Deno.env.get('ADMIN_EMAILS') ?? '')
  .split(',')
  .map(e => e.trim().toLowerCase())
  .filter(Boolean)

const supabaseAdmin = createClient(SUPABASE_URL, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)

// x-client-info and apikey are headers the Supabase JS client attaches
// to every request automatically — without allowlisting them here, the
// browser's CORS preflight rejects the call before it ever reaches this
// function. Same fix applied to admin-manage-tafseer, which hit this
// first since it was tested from the browser before this one was.
function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, content-type, x-client-info, apikey',
  }
}

// Same pagination pattern as paystack-webhook's email-lookup fallback.
async function findUserByEmail(email: string) {
  let page = 1
  while (true) {
    const { data, error } = await supabaseAdmin.auth.admin.listUsers({ page, perPage: 1000 })
    if (error) throw error
    const match = data.users.find(u => u.email?.toLowerCase() === email.toLowerCase())
    if (match) return match
    if (data.users.length < 1000) return null
    page++
  }
}

function welcomeEmailHtml(): string {
  return `
    <h1>Assalamu alaykum, and welcome to Spaces</h1>
    <p>Your Spaces subscription is now active. You have full access to:</p>
    <ul>
      <li>Threaded discussions across all six categories, including scholar-answered posts</li>
      <li>The Arabiyyah programme (Duruus al-Lughah through the Alfiyyah of Ibn Malik)</li>
      <li>The Hadeeth programme (the Arba'in through Sahih al-Bukhari with Fath al-Bari)</li>
      <li>Live class sessions — Hadeeth on Saturdays, Arabiyyah on Sundays, 9–10pm</li>
    </ul>
    <p>If anything about your access still looks wrong, just reply to this email.</p>
    <p>بارك الله فيك</p>
    <p>— The Sual team</p>
  `
}

async function sendWelcomeEmail(email: string) {
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: email,
        subject: 'Welcome to Sual Spaces — your access is confirmed',
        html: welcomeEmailHtml(),
      }),
    })
    const resBody = await res.json()
    if (!res.ok) return { ok: false, resendId: null, error: JSON.stringify(resBody) }
    return { ok: true, resendId: resBody.id ?? null, error: null }
  } catch (err) {
    return { ok: false, resendId: null, error: String(err) }
  }
}

async function logEmail(userId, email, subject, result, type) {
  const { error } = await supabaseAdmin.from('email_log').insert({
    user_id: userId,
    email,
    type,
    subject,
    resend_id: result.resendId,
    status: result.ok ? 'sent' : 'failed',
    error: result.error,
  })
  if (error) console.error('Failed to write email_log row:', error)
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders() })
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: corsHeaders() })
  }

  // ── Verify the caller is an admin — the real security boundary ──
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
    console.error('Non-admin attempted admin-grant-access:', callerData.user.email)
    return new Response(JSON.stringify({ error: 'Not authorized' }), { status: 403, headers: corsHeaders() })
  }

  // ── Do the actual grant ──────────────────────────────────────
  let body
  try {
    body = await req.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), { status: 400, headers: corsHeaders() })
  }

  const email = (body.email ?? '').trim().toLowerCase()
  if (!email) {
    return new Response(JSON.stringify({ error: 'Email is required' }), { status: 400, headers: corsHeaders() })
  }

  try {
    let targetUser = await findUserByEmail(email)
    let accountCreated = false

    if (!targetUser) {
      // No existing Sual account for this email — invite one.
      // Supabase sends its own "set your password" email for this;
      // it is separate from the Resend welcome email below, one
      // confirms the account, the other confirms Spaces access.
      const { data: invited, error: inviteError } = await supabaseAdmin.auth.admin.inviteUserByEmail(email)
      if (inviteError) throw inviteError
      targetUser = invited.user
      accountCreated = true
    }

    const userId = targetUser.id

    const { data: existing } = await supabaseAdmin
      .from('subscriptions')
      .select('welcome_email_sent_at, started_at')
      .eq('user_id', userId)
      .maybeSingle()

    const isFirstActivation = !existing?.welcome_email_sent_at
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()

    const { error: upsertError } = await supabaseAdmin
      .from('subscriptions')
      .upsert({
        user_id: userId,
        status: 'active',
        plan: 'spaces_monthly',
        amount: 2500,
        started_at: existing?.started_at ?? new Date().toISOString(),
        expires_at: expiresAt,
      }, { onConflict: 'user_id' })

    if (upsertError) throw upsertError

    let welcomeEmailSent = false
    if (isFirstActivation) {
      const result = await sendWelcomeEmail(email)
      await logEmail(userId, email, 'Welcome to Sual Spaces — your access is confirmed', result, 'spaces_welcome_manual')
      if (result.ok) {
        await supabaseAdmin
          .from('subscriptions')
          .update({ welcome_email_sent_at: new Date().toISOString() })
          .eq('user_id', userId)
        welcomeEmailSent = true
      }
    }

    return new Response(JSON.stringify({ ok: true, accountCreated, welcomeEmailSent, userId, email }), {
      headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('admin-grant-access failed:', err)
    return new Response(JSON.stringify({ error: err.message || String(err) }), { status: 500, headers: corsHeaders() })
  }
})