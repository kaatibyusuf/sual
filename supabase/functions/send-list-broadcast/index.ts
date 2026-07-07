// supabase/functions/send-list-broadcast/index.ts
//
// Sends one email to a list of addresses YOU supply in the request,
// rather than every Supabase user. Use this for external lists (a
// Google Doc export, a waitlist CSV, etc.) that aren't in your app's
// user table.
//
// Deploy:  supabase functions deploy send-list-broadcast --no-verify-jwt
// Secrets: reuses BROADCAST_RESEND_KEY and BROADCAST_SECRET, already set
//          for send-broadcast -- nothing new to configure.

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'

const RESEND_API_KEY = Deno.env.get('BROADCAST_RESEND_KEY')
const BROADCAST_SECRET = Deno.env.get('BROADCAST_SECRET')
const FROM_ADDRESS = 'Sual <hello@usesual.com>'

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

  const { subject, html, secret, emails } = await req.json()

  if (secret !== BROADCAST_SECRET) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
  }
  if (!subject || !html || !Array.isArray(emails) || emails.length === 0) {
    return new Response(JSON.stringify({ error: 'Missing subject, html, or emails array' }), { status: 400 })
  }

  // Basic cleanup: trim whitespace, drop blanks, drop obvious non-emails.
  const cleanEmails = [...new Set(
    emails
      .map((e: string) => (e || '').trim())
      .filter((e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))
  )]

  let sent = 0
  const failures: string[] = []

  for (const batch of chunk(cleanEmails, BATCH_SIZE)) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: FROM_ADDRESS,
          to: FROM_ADDRESS,
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
    await new Promise(r => setTimeout(r, 600))
  }

  return new Response(JSON.stringify({
    totalProvided: emails.length,
    totalValid: cleanEmails.length,
    sent,
    failed: failures.length,
  }), { headers: { 'Content-Type': 'application/json' } })
})