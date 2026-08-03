// Runs on a schedule (see cron setup below). Finds Spaces subscribers
// whose subscription expires within REMINDER_WINDOW_DAYS and who
// haven't already been reminded this cycle, emails them, and marks
// them reminded so the next run doesn't email them again.

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const RESEND_API_KEY = Deno.env.get('BROADCAST_RESEND_KEY')!
const CRON_SECRET = Deno.env.get('CRON_SECRET')! // shared secret so this endpoint can't be triggered by anyone
const FROM_ADDRESS = 'Sual <hello@usesual.com>'
const REMINDER_WINDOW_DAYS = 3

const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

function reminderEmailHtml(expiresAt: string): string {
  const date = new Date(expiresAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  return `
    <h1>Assalamu alaykum</h1>
    <p>Your Sual Spaces subscription is set to end on <strong>${date}</strong>.</p>
    <p>If you'd like to keep your access — Majlis, the Arabiyyah and Hadeeth
    programmes, Accountability Partners, Sahaabah Circles, Daily Tafseer, and
    Weekly Tests — renew before then from the Spaces page in your account.</p>
    <p>If you've already got auto-renewal set up with Paystack, no action is
    needed and this is just a heads-up.</p>
    <p>بارك الله فيك</p>
    <p>— The Sual team</p>
  `
}

async function sendReminderEmail(email: string, expiresAt: string) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM_ADDRESS,
      to: email,
      subject: 'Your Sual Spaces subscription ends soon',
      html: reminderEmailHtml(expiresAt),
    }),
  })
  const body = await res.json()
  return res.ok
    ? { ok: true, resendId: body.id ?? null, error: null }
    : { ok: false, resendId: null, error: JSON.stringify(body) }
}

async function logEmail(userId: string, email: string, result: { ok: boolean; resendId: string | null; error: string | null }) {
  const { error } = await supabaseAdmin.from('email_log').insert({
    user_id: userId,
    email,
    type: 'spaces_renewal_reminder',
    subject: 'Your Sual Spaces subscription ends soon',
    resend_id: result.resendId,
    status: result.ok ? 'sent' : 'failed',
    error: result.error,
  })
  if (error) console.error('Failed to write email_log row:', error)
}

serve(async (req) => {
  const auth = req.headers.get('authorization')
  if (auth !== `Bearer ${CRON_SECRET}`) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
  }

  const now = new Date()
  const windowEnd = new Date(now.getTime() + REMINDER_WINDOW_DAYS * 24 * 60 * 60 * 1000)

  const { data: due, error } = await supabaseAdmin
    .from('subscriptions')
    .select('user_id, expires_at')
    .eq('status', 'active')
    .is('renewal_reminder_sent_at', null)
    .gte('expires_at', now.toISOString())
    .lte('expires_at', windowEnd.toISOString())

  if (error) {
    console.error('Failed to query due subscriptions:', error)
    return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  }

  let sent = 0
  for (const row of due ?? []) {
    const { data: userRes, error: userErr } = await supabaseAdmin.auth.admin.getUserById(row.user_id)
    const email = userRes?.user?.email
    if (userErr || !email) {
      console.error('Could not resolve email for user', row.user_id, userErr)
      continue
    }

    const result = await sendReminderEmail(email, row.expires_at)
    await logEmail(row.user_id, email, result)

    if (result.ok) {
      await supabaseAdmin
        .from('subscriptions')
        .update({ renewal_reminder_sent_at: new Date().toISOString() })
        .eq('user_id', row.user_id)
      sent++
    }
  }

  return new Response(JSON.stringify({ ok: true, checked: due?.length ?? 0, sent }), {
    headers: { 'Content-Type': 'application/json' },
  })
})