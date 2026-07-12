// supabase/functions/paystack-webhook/index.ts
//
// Receives Paystack's webhook callbacks. On a successful charge, it
// activates (or renews) the subscription row, and — the first time
// a subscription becomes active — sends a welcome/confirmation email
// via Resend and logs that send in email_log, so "did this person
// get emailed?" is a queryable fact rather than a guess.
//
// This is the correct place to trigger the welcome email, not the
// checkout page: a webhook fires from Paystack's servers regardless
// of whether the person closed their browser tab after paying, which
// is exactly the "paid but got no confirmation" gap this exists to
// close.
//
// Deploy:  supabase functions deploy paystack-webhook --no-verify-jwt
// Secrets: supabase secrets set PAYSTACK_SECRET_KEY=your_paystack_secret_key
//          (BROADCAST_RESEND_KEY and SUPABASE_SERVICE_ROLE_KEY are
//          already set from send-broadcast — this function reuses them)
//
// After deploying, register this function's URL as the webhook URL
// in your Paystack dashboard (Settings → API Keys & Webhooks):
//   https://<your-project-ref>.supabase.co/functions/v1/paystack-webhook
//
// USER IDENTIFICATION: this function resolves which Sual user paid
// from the Paystack transaction reference, which Spaces.jsx builds as
// sual_<full user.id>_<epoch ms>. That's the primary and normally
// only path needed. metadata.user_id and an email-based lookup exist
// as fallbacks in case the reference format ever changes.

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const PAYSTACK_SECRET_KEY = Deno.env.get('PAYSTACK_SECRET_KEY')!
const RESEND_API_KEY = Deno.env.get('BROADCAST_RESEND_KEY')!
const FROM_ADDRESS = 'Sual <hello@usesual.com>'

const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

// ── Signature verification ──────────────────────────────────────
// Paystack signs the raw request body with your secret key using
// HMAC-SHA512 and sends the hex digest in x-paystack-signature.
// Verifying this is what stops anyone else from posting a fake
// "payment succeeded" event straight at this URL.
async function verifySignature(rawBody: string, signature: string | null): Promise<boolean> {
  if (!signature) return false
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(PAYSTACK_SECRET_KEY),
    { name: 'HMAC', hash: 'SHA-512' },
    false,
    ['sign']
  )
  const sigBuffer = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(rawBody))
  const hex = Array.from(new Uint8Array(sigBuffer)).map(b => b.toString(16).padStart(2, '0')).join('')
  return hex === signature
}

// ── Resolve the Sual user_id for a Paystack event ───────────────
// Three ways, tried in order of reliability:
//   1. The transaction reference itself, if it matches the pattern
//      Spaces.jsx's checkout builds: sual_<full uuid>_<epoch ms>.
//      This is the primary path — no metadata or hosted-page config
//      needed, since Paystack always echoes the reference back.
//   2. metadata.user_id, in case a future Inline JS checkout passes
//      it directly.
//   3. A paginated scan of auth users by email, same pattern used in
//      send-broadcast, as a last resort.
function resolveUserIdFromReference(reference) {
  if (!reference) return null
  const match = reference.match(/^sual_([0-9a-fA-F-]{36})_/)
  return match ? match[1] : null
}

async function resolveUserId(reference, metadata, email) {
  const fromRef = resolveUserIdFromReference(reference)
  if (fromRef) return fromRef

  if (metadata?.user_id) return metadata.user_id

  if (!email) return null
  let page = 1
  while (true) {
    const { data, error } = await supabaseAdmin.auth.admin.listUsers({ page, perPage: 1000 })
    if (error) {
      console.error('Failed to list users while resolving payer:', error)
      return null
    }
    const match = data.users.find(u => u.email?.toLowerCase() === email.toLowerCase())
    if (match) return match.id
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
    <p>If anything about your access looks wrong, just reply to this email — this message
    is our record that your subscription was confirmed and access was granted.</p>
    <p>بارك الله فيك</p>
    <p>— The Sual team</p>
  `
}

async function sendWelcomeEmail(email: string): Promise<{ ok: boolean; resendId: string | null; error: string | null }> {
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
    const body = await res.json()
    if (!res.ok) {
      console.error('Welcome email send failed:', body)
      return { ok: false, resendId: null, error: JSON.stringify(body) }
    }
    return { ok: true, resendId: body.id ?? null, error: null }
  } catch (err) {
    console.error('Welcome email request error:', err)
    return { ok: false, resendId: null, error: String(err) }
  }
}

async function logEmail(userId: string | null, email: string, subject: string, result: { ok: boolean; resendId: string | null; error: string | null }) {
  const { error } = await supabaseAdmin.from('email_log').insert({
    user_id: userId,
    email,
    type: 'spaces_welcome',
    subject,
    resend_id: result.resendId,
    status: result.ok ? 'sent' : 'failed',
    error: result.error,
  })
  if (error) console.error('Failed to write email_log row:', error)
}

serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  const rawBody = await req.text()
  const signature = req.headers.get('x-paystack-signature')

  if (!(await verifySignature(rawBody, signature))) {
    console.error('Paystack signature verification failed')
    return new Response(JSON.stringify({ error: 'Invalid signature' }), { status: 401 })
  }

  const event = JSON.parse(rawBody)
  const eventType = event.event
  const data = event.data

  // ── charge.success: fires on the initial payment and every renewal ──
  if (eventType === 'charge.success') {
    const email = data.customer?.email ?? null
    const customerCode = data.customer?.customer_code ?? null
    const subscriptionCode = data.plan_object?.plan_code ? data.plan?.subscription_code : null
    const metadata = data.metadata ?? {}
    const reference = data.reference ?? null

    const userId = await resolveUserId(reference, metadata, email)
    if (!userId) {
      console.error('Could not resolve a Sual user for charge.success', { reference, email, metadata })
      // Still 200 — Paystack retries on non-2xx, and this isn't a
      // transient error that a retry would fix.
      return new Response(JSON.stringify({ warning: 'user not resolved' }), { status: 200 })
    }

    // Check whether the welcome email has already gone out before we
    // overwrite the row, so a renewal never re-triggers it.
    const { data: existing } = await supabaseAdmin
      .from('subscriptions')
      .select('welcome_email_sent_at, started_at')
      .eq('user_id', userId)
      .maybeSingle()

    const isFirstActivation = !existing?.welcome_email_sent_at

    const nextPaymentDate = data.plan_object?.next_payment_date ?? null
    const expiresAt = nextPaymentDate
      ? nextPaymentDate
      : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()

    const { error: upsertError } = await supabaseAdmin
      .from('subscriptions')
      .upsert({
        user_id: userId,
        paystack_customer_code: customerCode,
        paystack_subscription_code: subscriptionCode,
        status: 'active',
        plan: 'spaces_monthly',
        amount: data.amount ? Math.round(data.amount / 100) : 2500, // Paystack amounts are in kobo
        started_at: existing?.started_at ?? new Date().toISOString(),
        expires_at: expiresAt,
      }, { onConflict: 'user_id' })

    if (upsertError) {
      console.error('Failed to upsert subscription:', upsertError)
      return new Response(JSON.stringify({ error: upsertError.message }), { status: 500 })
    }

    if (isFirstActivation && email) {
      const result = await sendWelcomeEmail(email)
      await logEmail(userId, email, 'Welcome to Sual Spaces — your access is confirmed', result)
      if (result.ok) {
        await supabaseAdmin
          .from('subscriptions')
          .update({ welcome_email_sent_at: new Date().toISOString() })
          .eq('user_id', userId)
      }
    }

    return new Response(JSON.stringify({ ok: true, welcomeEmailSent: isFirstActivation }), {
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // ── subscription.disable: keep the subscriptions table honest so
  // access doesn't linger after a cancellation. No email here — this
  // task is specifically about confirming paid access, not churn. ──
  if (eventType === 'subscription.disable') {
    const subscriptionCode = data.subscription_code ?? null
    if (subscriptionCode) {
      const { error } = await supabaseAdmin
        .from('subscriptions')
        .update({ status: 'inactive' })
        .eq('paystack_subscription_code', subscriptionCode)
      if (error) console.error('Failed to mark subscription inactive:', error)
    }
    return new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } })
  }

  // Any other event type: acknowledge without action.
  return new Response(JSON.stringify({ ok: true, ignored: eventType }), {
    headers: { 'Content-Type': 'application/json' },
  })
})