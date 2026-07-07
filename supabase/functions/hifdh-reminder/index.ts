// supabase/functions/hifdh-reminder/index.ts
//
// Emails every user who has hifdh items due for review today. Meant to
// run on a schedule (see the pg_cron setup below), not called from the
// app itself.
//
// This function is the TEMPLATE for any future automatic email: swap
// the query for whatever condition matters (inactive for a week,
// subscription expiring soon, etc.) and reuse the same send pattern.
//
// Deploy:  supabase functions deploy hifdh-reminder --no-verify-jwt
// Secrets: same three as send-broadcast (RESEND_API_KEY, BROADCAST_SECRET,
//          SUPABASE_SERVICE_ROLE_KEY) — reuse them, no new secrets needed.

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const RESEND_API_KEY = Deno.env.get('BROADCAST_RESEND_KEY')
const BROADCAST_SECRET = Deno.env.get('BROADCAST_SECRET')
const FROM_ADDRESS = 'Sual <hello@usesual.com>'

const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

serve(async (req) => {
  const { secret } = await req.json().catch(() => ({}))
  if (secret !== BROADCAST_SECRET) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
  }

  // Find distinct users with at least one due item, due_at in the past.
  const { data: dueRows, error } = await supabaseAdmin
    .from('hifdh_progress')
    .select('user_id')
    .lte('due_at', new Date().toISOString())

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  }

  const userIds = [...new Set((dueRows || []).map(r => r.user_id))]
  if (userIds.length === 0) {
    return new Response(JSON.stringify({ sent: 0, note: 'No due reviews today' }))
  }

  let sent = 0
  for (const userId of userIds) {
    const { data: userRes } = await supabaseAdmin.auth.admin.getUserById(userId)
    const email = userRes?.user?.email
    if (!email) continue

    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: FROM_ADDRESS,
          to: email,
          subject: 'Your hifdh review is waiting',
          html: `
            <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 24px;">
              <h1 style="color: #094570; font-size: 1.3rem;">سُؤَال</h1>
              <p>Assalamu alaykum,</p>
              <p>You have hifdh due for review today. A few minutes now keeps it firm.</p>
              <p style="margin-top: 20px;">
                <a href="https://app.usesual.com/hifdh" style="background:#094570; color:#fff; padding:10px 20px; border-radius:100px; text-decoration:none;">Review now &rarr;</a>
              </p>
            </div>
          `,
        }),
      })
      if (res.ok) sent++
    } catch (err) {
      console.error('Reminder failed for', email, err)
    }
  }

  return new Response(JSON.stringify({ usersWithDueItems: userIds.length, sent }))
})