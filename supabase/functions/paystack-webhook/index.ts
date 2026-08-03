// supabase/functions/paystack-webhook/index.ts
//
// Receives Paystack's webhook callbacks. On a successful charge, it
// activates (or renews) the relevant subscription row, and — the
// first time a subscription becomes active — sends a welcome email
// via Resend and logs that send in email_log.
//
// Each row also tracks renewal_count (incremented on every
// charge.success after the first activation, so it reflects how many
// times a user has renewed — i.e. whether they're a recurring
// subscriber) and renewal_reminder_sent_at (cleared on every renewal
// so the subscription-renewal-reminder function can send a fresh
// reminder ahead of the new expiry date).
//
// Two products share this one webhook, since Paystack only supports
// one registered webhook URL per account:
//   - Spaces subscriptions: reference sual_<uuid>_<epoch ms>
//   - Book Quiz subscriptions: reference bookquiz_<plan>_<uuid>_<epoch ms>
//     where <plan> is "monthly" or "annual"
// Each writes to its own table (subscriptions vs book_quiz_subscriptions)
// so the two products stay fully independent — a user can hold both,
// either, or neither.
//
// Deploy:  supabase functions deploy paystack-webhook --no-verify-jwt
// Secrets: supabase secrets set PAYSTACK_SECRET_KEY=your_paystack_secret_key
//          (BROADCAST_RESEND_KEY and SUPABASE_SERVICE_ROLE_KEY are
//          already set from send-broadcast — this function reuses them)

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const PAYSTACK_SECRET_KEY = Deno.env.get('PAYSTACK_SECRET_KEY')!
const RESEND_API_KEY = Deno.env.get('BROADCAST_RESEND_KEY')!
const FROM_ADDRESS = 'Sual <hello@usesual.com>'

const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

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

// ── Reference parsing ────────────────────────────────────────
// Returns { product: 'spaces' | 'bookquiz', userId, plan? } or null
// if the reference doesn't match either known pattern.
function parseReference(reference: string | null) {
  if (!reference) return null

  const spacesMatch = reference.match(/^sual_([0-9a-fA-F-]{36})_/)
  if (spacesMatch) return { product: 'spaces' as const, userId: spacesMatch[1] }

  const bookQuizMatch = reference.match(/^bookquiz_(monthly|annual)_([0-9a-fA-F-]{36})_/)
  if (bookQuizMatch) return { product: 'bookquiz' as const, plan: bookQuizMatch[1], userId: bookQuizMatch[2] }

  return null
}

async function resolveUserIdByEmail(email: string | null) {
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

function welcomeEmailHtml(product: 'spaces' | 'bookquiz'): string {
  if (product === 'bookquiz') {
    return `
      <h1>Assalamu alaykum, and welcome to Book Quiz</h1>
      <p>Your Book Quiz subscription is now active. Upload any text-based Arabic PDF and
      generate as many quizzes as you like from it, no more free-generation limit.</p>
      <p>If anything about your access looks wrong, just reply to this email — this message
      is our record that your subscription was confirmed and access was granted.</p>
      <p>بارك الله فيك</p>
      <p>— The Sual team</p>
    `
  }
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

async function sendWelcomeEmail(email: string, product: 'spaces' | 'bookquiz'): Promise<{ ok: boolean; resendId: string | null; error: string | null }> {
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
        subject: product === 'bookquiz'
          ? 'Welcome to Sual Book Quiz — your access is confirmed'
          : 'Welcome to Sual Spaces — your access is confirmed',
        html: welcomeEmailHtml(product),
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

async function logEmail(userId: string | null, email: string, subject: string, result: { ok: boolean; resendId: string | null; error: string | null }, type: string) {
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

  if (eventType === 'charge.success') {
    const email = data.customer?.email ?? null
    const customerCode = data.customer?.customer_code ?? null
    const subscriptionCode = data.plan_object?.plan_code ? data.plan?.subscription_code : null
    const reference = data.reference ?? null

    const parsed = parseReference(reference)

    if (!parsed) {
      // Doesn't match either known product's reference format —
      // acknowledge without action rather than guessing.
      console.error('Unrecognized charge.success reference format:', { reference, email })
      return new Response(JSON.stringify({ warning: 'unrecognized reference format' }), { status: 200 })
    }

    let userId = parsed.userId
    if (!userId) {
      userId = await resolveUserIdByEmail(email)
    }
    if (!userId) {
      console.error('Could not resolve a Sual user for charge.success', { reference, email })
      return new Response(JSON.stringify({ warning: 'user not resolved' }), { status: 200 })
    }

    if (parsed.product === 'spaces') {
      const { data: existing } = await supabaseAdmin
        .from('subscriptions')
        .select('welcome_email_sent_at, started_at, renewal_count')
        .eq('user_id', userId)
        .maybeSingle()

      const isFirstActivation = !existing?.welcome_email_sent_at
      const nextPaymentDate = data.plan_object?.next_payment_date ?? null
      const expiresAt = nextPaymentDate
        ? nextPaymentDate
        : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()

      // A user only counts as "recurring" once they've completed at
      // least one renewal after their original activation — the very
      // first charge.success (before welcome_email_sent_at exists)
      // isn't itself a renewal.
      const renewalCount = isFirstActivation ? 0 : (existing?.renewal_count ?? 0) + 1

      const { error: upsertError } = await supabaseAdmin
        .from('subscriptions')
        .upsert({
          user_id: userId,
          paystack_customer_code: customerCode,
          paystack_subscription_code: subscriptionCode,
          status: 'active',
          plan: 'spaces_monthly',
          amount: data.amount ? Math.round(data.amount / 100) : 2500,
          started_at: existing?.started_at ?? new Date().toISOString(),
          expires_at: expiresAt,
          renewal_count: renewalCount,
          // New cycle just started — clear so the reminder function
          // can send a fresh one ahead of this new expiry date.
          renewal_reminder_sent_at: null,
        }, { onConflict: 'user_id' })

      if (upsertError) {
        console.error('Failed to upsert Spaces subscription:', upsertError)
        return new Response(JSON.stringify({ error: upsertError.message }), { status: 500 })
      }

      if (isFirstActivation && email) {
        const result = await sendWelcomeEmail(email, 'spaces')
        await logEmail(userId, email, 'Welcome to Sual Spaces — your access is confirmed', result, 'spaces_welcome')
        if (result.ok) {
          await supabaseAdmin.from('subscriptions').update({ welcome_email_sent_at: new Date().toISOString() }).eq('user_id', userId)
        }
      }

      return new Response(JSON.stringify({ ok: true, product: 'spaces', welcomeEmailSent: isFirstActivation, renewalCount }), {
        headers: { 'Content-Type': 'application/json' },
      })
    }

    if (parsed.product === 'bookquiz') {
      const plan = parsed.plan === 'annual' ? 'book_quiz_annual' : 'book_quiz_monthly'
      const durationDays = parsed.plan === 'annual' ? 365 : 30

      const { data: existing } = await supabaseAdmin
        .from('book_quiz_subscriptions')
        .select('welcome_email_sent_at, started_at, renewal_count')
        .eq('user_id', userId)
        .maybeSingle()

      const isFirstActivation = !existing?.welcome_email_sent_at
      const expiresAt = new Date(Date.now() + durationDays * 24 * 60 * 60 * 1000).toISOString()

      const renewalCount = isFirstActivation ? 0 : (existing?.renewal_count ?? 0) + 1

      const { error: upsertError } = await supabaseAdmin
        .from('book_quiz_subscriptions')
        .upsert({
          user_id: userId,
          paystack_customer_code: customerCode,
          paystack_subscription_code: subscriptionCode,
          status: 'active',
          plan,
          amount: data.amount ? Math.round(data.amount / 100) : (parsed.plan === 'annual' ? 20000 : 2000),
          started_at: existing?.started_at ?? new Date().toISOString(),
          expires_at: expiresAt,
          renewal_count: renewalCount,
          renewal_reminder_sent_at: null,
        }, { onConflict: 'user_id' })

      if (upsertError) {
        console.error('Failed to upsert Book Quiz subscription:', upsertError)
        return new Response(JSON.stringify({ error: upsertError.message }), { status: 500 })
      }

      if (isFirstActivation && email) {
        const result = await sendWelcomeEmail(email, 'bookquiz')
        await logEmail(userId, email, 'Welcome to Sual Book Quiz — your access is confirmed', result, 'book_quiz_welcome')
        if (result.ok) {
          await supabaseAdmin.from('book_quiz_subscriptions').update({ welcome_email_sent_at: new Date().toISOString() }).eq('user_id', userId)
        }
      }

      return new Response(JSON.stringify({ ok: true, product: 'bookquiz', plan, welcomeEmailSent: isFirstActivation, renewalCount }), {
        headers: { 'Content-Type': 'application/json' },
      })
    }
  }

  if (eventType === 'subscription.disable') {
    const subscriptionCode = data.subscription_code ?? null
    if (subscriptionCode) {
      const [{ error: err1 }, { error: err2 }] = await Promise.all([
        supabaseAdmin.from('subscriptions').update({ status: 'inactive' }).eq('paystack_subscription_code', subscriptionCode),
        supabaseAdmin.from('book_quiz_subscriptions').update({ status: 'inactive' }).eq('paystack_subscription_code', subscriptionCode),
      ])
      if (err1) console.error('Failed to mark Spaces subscription inactive:', err1)
      if (err2) console.error('Failed to mark Book Quiz subscription inactive:', err2)
    }
    return new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } })
  }

  return new Response(JSON.stringify({ ok: true, ignored: eventType }), {
    headers: { 'Content-Type': 'application/json' },
  })
})