// supabase/functions/send-broadcast/index.ts
//
// Sends one email to every user in the app. Protected by a secret key
// so only you (or a future admin panel) can trigger it — never expose
// this endpoint to the public app.
//
// Deploy:  supabase functions deploy send-broadcast --no-verify-jwt
// Secrets: supabase secrets set RESEND_API_KEY=your_key_here
//          supabase secrets set BROADCAST_SECRET=choose_a_long_random_string
//          supabase secrets set SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
//
// Trigger it with curl (see the usage note at the bottom of this file).

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const RESEND_API_KEY = Deno.env.get('BROADCAST_RESEND_KEY')
const BROADCAST_SECRET = Deno.env.get('BROADCAST_SECRET')
const FROM_ADDRESS = 'Sual <hello@usesual.com>'

const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

const BATCH_SIZE = 49 // stay under Resend's per-request recipient limits

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  const { subject, html, secret } = await req.json()

  if (secret !== BROADCAST_SECRET) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
  }
  if (!subject || !html) {
    return new Response(JSON.stringify({ error: 'Missing subject or html' }), { status: 400 })
  }

  // Pull every user's email via the admin API (paginated).
  const emails: string[] = []
  let page = 1
  while (true) {
    const { data, error } = await supabaseAdmin.auth.admin.listUsers({ page, perPage: 1000 })
    if (error) {
      console.error('Failed to list users:', error)
      return new Response(JSON.stringify({ error: error.message }), { status: 500 })
    }
    data.users.forEach(u => { if (u.email) emails.push(u.email) })
    if (data.users.length < 1000) break
    page++
  }

  let sent = 0
  const failures: string[] = []

  for (const batch of chunk(emails, BATCH_SIZE)) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        // Resend's "bcc" pattern: one send, all recipients hidden from each other.
        body: JSON.stringify({
          from: FROM_ADDRESS,
          to: FROM_ADDRESS,       // visible "to" is just us
          bcc: batch,
          subject,
          html,
        }),
      })
      if (res.ok) {
        sent += batch.length
      } else {
        const err = await res.json()
        console.error('Batch failed:', err)
        failures.push(...batch)
      }
    } catch (err) {
      console.error('Batch request error:', err)
      failures.push(...batch)
    }
    // small delay between batches to stay well under rate limits
    await new Promise(r => setTimeout(r, 600))
  }

  return new Response(JSON.stringify({
    totalUsers: emails.length,
    sent,
    failed: failures.length,
  }), { headers: { 'Content-Type': 'application/json' } })
})

// ── How to trigger a broadcast ──────────────────────────────────
// curl -X POST https://<your-project-ref>.supabase.co/functions/v1/send-broadcast \
//   -H "Content-Type: application/json" \
//   -d '{
//     "secret": "the_BROADCAST_SECRET_you_set",
//     "subject": "New this week on Sual",
//     "html": "<h1>Assalamu alaykum</h1><p>Your newsletter body here...</p>"
//   }'