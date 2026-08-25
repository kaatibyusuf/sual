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
// Three products share this one webhook, since Paystack only supports
// one registered webhook URL per account:
//   - Spaces subscriptions: reference sual_<plan>_<uuid>_<epoch ms>
//     where <plan> is "monthly", "annual", or "lifetime"
//   - Book Quiz subscriptions: reference bookquiz_<plan>_<uuid>_<epoch ms>
//     where <plan> is "monthly" or "annual"
//   - Tajweed Course subscriptions: reference tajweed_<plan>_<uuid>_<epoch ms>
//     where <plan> is "monthly" or "annual"
// Each writes to its own table (subscriptions / book_quiz_subscriptions /
// tajweed_subscriptions) so all three products stay fully independent —
// a user can hold any combination of them.
//
// Lifetime Spaces members get expires_at = null (never expires) and
// plan = 'spaces_lifetime'. The frontend's isPaid check treats
// plan === 'spaces_lifetime' as always-active without checking
// expires_at at all. subscription-renewal-reminder's query filters
// on expires_at ranges, so lifetime rows (null expires_at) simply
// never match and are correctly never reminded.
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
// Returns { product: 'spaces' | 'bookquiz' | 'tajweed', userId, plan }
// or null if the reference doesn't match any known pattern.
function parseReference(reference: string | null) {
  if (!reference) return null

  const spacesMatch = reference.match(/^sual_(monthly|annual|lifetime)_([0-9a-fA-F-]{36})_/)
  if (spacesMatch) return { product: 'spaces' as const, plan: spacesMatch[1], userId: spacesMatch[2] }

  const bookQuizMatch = reference.match(/^bookquiz_(monthly|annual)_([0-9a-fA-F-]{36})_/)
  if (bookQuizMatch) return { product: 'bookquiz' as const, plan: bookQuizMatch[1], userId: bookQuizMatch[2] }

  const tajweedMatch = reference.match(/^tajweed_(monthly|annual)_([0-9a-fA-F-]{36})_/)
  if (tajweedMatch) return { product: 'tajweed' as const, plan: tajweedMatch[1], userId: tajweedMatch[2] }

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

function welcomeEmailHtml(product: 'spaces' | 'bookquiz' | 'tajweed', plan?: string): string {
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

  if (product === 'tajweed') {
    return `
      <h1>Assalamu alaykum, and welcome to the Tajweed Course</h1>
      <p>Your Tajweed Course subscription is now active. You now have full access to every
      section — from Noon Sakinah and Meem Sakinah rules through Madd, Waqf, the Ten Qiraat,
      and beyond.</p>
      <p>If anything about your access looks wrong, just reply to this email — this message
      is our record that your subscription was confirmed and access was granted.</p>
      <p>بارك الله فيك</p>
      <p>— The Sual team</p>
    `
  }

  // product === 'spaces'
  const lifetimeLine = plan === 'lifetime'
    ? `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
        <tr>
          <td style="padding:14px 16px; background:#fdf3dd; border:1px solid #ecd9a8; border-radius:10px;">
            <p style="font-size:14px; color:#7a5a13; margin:0; line-height:1.6; font-weight:700;">
              🔓 Your access is lifetime — one payment, no renewal, ever.
            </p>
          </td>
        </tr>
      </table>
    `
    : ''

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Sual Spaces</title>
    </head>
    <body style="margin:0; padding:0; background:#F0F8FF; font-family:Arial, Helvetica, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F0F8FF; padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="520" cellpadding="0" cellspacing="0" style="max-width:520px; width:100%; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 4px 20px rgba(9,69,112,0.1);">

            <!-- Header -->
            <tr>
              <td style="background:#094570; padding:32px 24px; text-align:center;">
                <div style="font-size:32px; color:#85CCFF; font-weight:700; margin-bottom:4px; line-height:1.2;">سُؤَال</div>
                <div style="font-size:18px; color:#ffffff; font-weight:800; letter-spacing:2px;">SUAL</div>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:32px 28px;">
                <p style="font-size:12px; font-weight:700; color:#094570; text-transform:uppercase; letter-spacing:1.5px; margin:0 0 12px;">
                  Spaces — Access Confirmed
                </p>

                <h1 style="font-size:22px; color:#0d1b2a; margin:0 0 16px; line-height:1.4; font-weight:700;">
                  Assalamu alaykum, welcome to Spaces
                </h1>

                <p style="font-size:15px; color:#24374a; line-height:1.8; margin:0 0 20px;">
                  Your Spaces subscription is now active. Here's what that actually means for you:
                </p>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
                  <tr>
                    <td style="padding:10px 14px; background:#f5f8fb; border-radius:10px 10px 0 0;">
                      <p style="font-size:14px; color:#24374a; margin:0; line-height:1.6;">
                        <strong style="color:#094570;">💬 A real community, not just content</strong><br>
                        Ask questions, discuss, and get answers directly from qualified scholars — not just search results
                      </p>
                    </td>
                  </tr>
                  <tr><td style="height:2px; background:#ffffff;"></td></tr>
                  <tr>
                    <td style="padding:10px 14px; background:#f5f8fb;">
                      <p style="font-size:14px; color:#24374a; margin:0; line-height:1.6;">
                        <strong style="color:#094570;">📖 A clear path forward in Arabic</strong><br>
                        Structured progress from your very first lesson to real fluency, at a pace that builds
                      </p>
                    </td>
                  </tr>
                  <tr><td style="height:2px; background:#ffffff;"></td></tr>
                  <tr>
                    <td style="padding:10px 14px; background:#f5f8fb;">
                      <p style="font-size:14px; color:#24374a; margin:0; line-height:1.6;">
                        <strong style="color:#094570;">📿 Confidence in the Sunnah</strong><br>
                        Move from knowing a few hadith to genuinely understanding the tradition behind them
                      </p>
                    </td>
                  </tr>
                  <tr><td style="height:2px; background:#ffffff;"></td></tr>
                  <tr>
                    <td style="padding:10px 14px; background:#f5f8fb; border-radius:0 0 10px 10px;">
                      <p style="font-size:14px; color:#24374a; margin:0; line-height:1.6;">
                        <strong style="color:#094570;">🎙️ Live, weekly accountability</strong><br>
                        Real class sessions to keep you consistent, not just self-paced content you might postpone
                      </p>
                    </td>
                  </tr>
                </table>

                <!-- Lifetime-only note -->
                ${lifetimeLine}

                <!-- CTA -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" style="padding-bottom:12px;">
                      <a href="https://app.usesual.com/spaces"
                         style="display:inline-block; background:#094570; color:#ffffff; font-size:15px; font-weight:700; text-decoration:none; padding:14px 32px; border-radius:100px; font-family:Arial, Helvetica, sans-serif;">
                        Go to Spaces →
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="padding-bottom:24px;">
                      <p style="font-size:12px; color:#8a9ab0; margin:0;">
                        Or copy this link: <a href="https://app.usesual.com/spaces" style="color:#094570;">app.usesual.com/spaces</a>
                      </p>
                    </td>
                  </tr>
                </table>

                <div style="border-top:1px solid #e8f0f8; padding-top:18px; margin-bottom:20px;">
                  <p style="font-size:13px; color:#8a9ab0; line-height:1.7; margin:0;">
                    If anything about your access looks wrong, just reply to this email — this message is our
                    record that your subscription was confirmed and access was granted.
                  </p>
                </div>

                <p style="font-size:13px; color:#8a9ab0; line-height:1.7; margin:0; text-align:center;">
                  بَارَكَ اللَّهُ فِيك
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#06304d; padding:24px; text-align:center;">
                <div style="font-size:20px; color:#85CCFF; margin-bottom:4px;">سُؤَال</div>
                <p style="font-size:12px; color:rgba(255,255,255,0.5); margin:0;">
                  Sual | سُؤَال — Built for the students of Islamic knowledge.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
    </body>
    </html>
  `
}

async function sendWelcomeEmail(email: string, product: 'spaces' | 'bookquiz' | 'tajweed', plan?: string): Promise<{ ok: boolean; resendId: string | null; error: string | null }> {
  try {
    const subject = product === 'bookquiz'
      ? 'Welcome to Sual Book Quiz — your access is confirmed'
      : product === 'tajweed'
      ? 'Welcome to Sual Tajweed Course — your access is confirmed'
      : 'Welcome to Sual Spaces — your access is confirmed'

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: email,
        subject,
        html: welcomeEmailHtml(product, plan),
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
      // Doesn't match any known product's reference format —
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

      // Lifetime never expires (expires_at stays null); annual and
      // monthly fall back to a computed date if Paystack doesn't
      // supply next_payment_date (e.g. a one-off, non-recurring
      // charge rather than a Paystack Plan-based subscription).
      let expiresAt: string | null
      let planName: string
      let defaultAmount: number
      if (parsed.plan === 'lifetime') {
        expiresAt = null
        planName = 'spaces_lifetime'
        defaultAmount = 100000
      } else if (parsed.plan === 'annual') {
        expiresAt = data.plan_object?.next_payment_date
          ?? new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
        planName = 'spaces_annual'
        defaultAmount = 20000
      } else {
        expiresAt = data.plan_object?.next_payment_date
          ?? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
        planName = 'spaces_monthly'
        defaultAmount = 2500
      }

      // A user only counts as "recurring" once they've completed at
      // least one renewal after their original activation — the very
      // first charge.success (before welcome_email_sent_at exists)
      // isn't itself a renewal. A lifetime purchase is a single
      // payment by nature, so it naturally stays at 0 here too,
      // which is accurate (not a renewal pattern).
      const renewalCount = isFirstActivation ? 0 : (existing?.renewal_count ?? 0) + 1

      const { error: upsertError } = await supabaseAdmin
        .from('subscriptions')
        .upsert({
          user_id: userId,
          paystack_customer_code: customerCode,
          paystack_subscription_code: subscriptionCode,
          status: 'active',
          plan: planName,
          amount: data.amount ? Math.round(data.amount / 100) : defaultAmount,
          started_at: existing?.started_at ?? new Date().toISOString(),
          expires_at: expiresAt,
          renewal_count: renewalCount,
          // New cycle just started — clear so the reminder function
          // can send a fresh one ahead of this new expiry date.
          // Irrelevant for lifetime (expires_at is null, so the
          // reminder query will never match this row regardless).
          renewal_reminder_sent_at: null,
        }, { onConflict: 'user_id' })

      if (upsertError) {
        console.error('Failed to upsert Spaces subscription:', upsertError)
        return new Response(JSON.stringify({ error: upsertError.message }), { status: 500 })
      }

      if (isFirstActivation && email) {
        const result = await sendWelcomeEmail(email, 'spaces', parsed.plan)
        await logEmail(userId, email, 'Welcome to Sual Spaces — your access is confirmed', result, 'spaces_welcome')
        if (result.ok) {
          await supabaseAdmin.from('subscriptions').update({ welcome_email_sent_at: new Date().toISOString() }).eq('user_id', userId)
        }
      }

      return new Response(JSON.stringify({ ok: true, product: 'spaces', plan: planName, welcomeEmailSent: isFirstActivation, renewalCount }), {
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

    if (parsed.product === 'tajweed') {
      const plan = parsed.plan === 'annual' ? 'tajweed_annual' : 'tajweed_monthly'
      const durationDays = parsed.plan === 'annual' ? 365 : 30

      const { data: existing } = await supabaseAdmin
        .from('tajweed_subscriptions')
        .select('welcome_email_sent_at, started_at, renewal_count')
        .eq('user_id', userId)
        .maybeSingle()

      const isFirstActivation = !existing?.welcome_email_sent_at
      const expiresAt = new Date(Date.now() + durationDays * 24 * 60 * 60 * 1000).toISOString()

      const renewalCount = isFirstActivation ? 0 : (existing?.renewal_count ?? 0) + 1

      const { error: upsertError } = await supabaseAdmin
        .from('tajweed_subscriptions')
        .upsert({
          user_id: userId,
          paystack_customer_code: customerCode,
          paystack_subscription_code: subscriptionCode,
          status: 'active',
          plan,
          amount: data.amount ? Math.round(data.amount / 100) : (parsed.plan === 'annual' ? 10000 : 1500),
          started_at: existing?.started_at ?? new Date().toISOString(),
          expires_at: expiresAt,
          renewal_count: renewalCount,
          renewal_reminder_sent_at: null,
        }, { onConflict: 'user_id' })

      if (upsertError) {
        console.error('Failed to upsert Tajweed subscription:', upsertError)
        return new Response(JSON.stringify({ error: upsertError.message }), { status: 500 })
      }

      if (isFirstActivation && email) {
        const result = await sendWelcomeEmail(email, 'tajweed')
        await logEmail(userId, email, 'Welcome to Sual Tajweed Course — your access is confirmed', result, 'tajweed_welcome')
        if (result.ok) {
          await supabaseAdmin.from('tajweed_subscriptions').update({ welcome_email_sent_at: new Date().toISOString() }).eq('user_id', userId)
        }
      }

      return new Response(JSON.stringify({ ok: true, product: 'tajweed', plan, welcomeEmailSent: isFirstActivation, renewalCount }), {
        headers: { 'Content-Type': 'application/json' },
      })
    }
  }

  if (eventType === 'subscription.disable') {
    // Lifetime and one-off charges never create a Paystack recurring
    // subscription object, so this event simply never fires for
    // those rows — nothing extra needed here to protect lifetime
    // members from being deactivated by this handler.
    const subscriptionCode = data.subscription_code ?? null
    if (subscriptionCode) {
      const [{ error: err1 }, { error: err2 }, { error: err3 }] = await Promise.all([
        supabaseAdmin.from('subscriptions').update({ status: 'inactive' }).eq('paystack_subscription_code', subscriptionCode),
        supabaseAdmin.from('book_quiz_subscriptions').update({ status: 'inactive' }).eq('paystack_subscription_code', subscriptionCode),
        supabaseAdmin.from('tajweed_subscriptions').update({ status: 'inactive' }).eq('paystack_subscription_code', subscriptionCode),
      ])
      if (err1) console.error('Failed to mark Spaces subscription inactive:', err1)
      if (err2) console.error('Failed to mark Book Quiz subscription inactive:', err2)
      if (err3) console.error('Failed to mark Tajweed subscription inactive:', err3)
    }
    return new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } })
  }

  return new Response(JSON.stringify({ ok: true, ignored: eventType }), {
    headers: { 'Content-Type': 'application/json' },
  })
})