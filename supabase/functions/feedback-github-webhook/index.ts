// supabase/functions/feedback-github-webhook/index.ts
//
// Receives GitHub's `push` webhook event. Scans every commit message
// in the push for a "Fixes SF-142" / "Closes SF-142" / "Resolves
// SF-142" tag (case-insensitive), and for each match:
//   1. Marks that feedback_items row as fixed, recording the commit
//      sha and timestamp.
//   2. Emails the original submitter via Resend, linking to the
//      public board item.
//
// This is the ONLY mechanism that marks something fixed — no LLM
// inference over diffs, no fuzzy matching. A commit either tags a
// ticket explicitly or nothing happens. That's deliberate: a wrong
// automatic "your bug is fixed!" email is worse than no notification
// at all.
//
// Setup required in GitHub: repo → Settings → Webhooks → Add webhook
//   Payload URL: https://<your-project-ref>.supabase.co/functions/v1/feedback-github-webhook
//   Content type: application/json
//   Secret: (generate one, set it below as GITHUB_WEBHOOK_SECRET)
//   Events: just the "push" event
//
// Deploy:  supabase functions deploy feedback-github-webhook
// Secrets: supabase secrets set GITHUB_WEBHOOK_SECRET=...
//          supabase secrets set RESEND_API_KEY=...          (if not already set)
//          supabase secrets set SUAL_APP_URL=https://app.usesual.com

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const GITHUB_WEBHOOK_SECRET = Deno.env.get('GITHUB_WEBHOOK_SECRET')!
const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')!
const SUAL_APP_URL = Deno.env.get('SUAL_APP_URL') ?? 'https://app.usesual.com'

const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

const TICKET_PATTERN = /\b(?:fixes|closes|resolves)\s+SF-(\d+)\b/gi

async function verifyGithubSignature(rawBody: string, signatureHeader: string | null): Promise<boolean> {
  if (!signatureHeader || !signatureHeader.startsWith('sha256=')) return false
  const expectedHex = signatureHeader.slice('sha256='.length)

  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(GITHUB_WEBHOOK_SECRET),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const sigBuffer = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(rawBody))
  const actualHex = Array.from(new Uint8Array(sigBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')

  if (actualHex.length !== expectedHex.length) return false
  let diff = 0
  for (let i = 0; i < actualHex.length; i++) {
    diff |= actualHex.charCodeAt(i) ^ expectedHex.charCodeAt(i)
  }
  return diff === 0
}

async function sendFixNotification(item: {
  id: number
  type: string
  public_title: string
  submitter_email: string
  submitter_name: string | null
}) {
  const boardUrl = `${SUAL_APP_URL}/feedback/${item.id}`
  const greeting = item.submitter_name ? `Assalamu Alaikum ${item.submitter_name},` : 'Assalamu Alaikum,'
  const kind = item.type === 'bug' ? 'bug you reported' : 'feature you requested'

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Sual Feedback <feedback@usesual.com>',
      to: item.submitter_email,
      subject: `Good news — SF-${item.id} is live`,
      text: [
        greeting,
        '',
        `The ${kind} is now live in Sual:`,
        '',
        `"${item.public_title}"`,
        '',
        `You can see it here: ${boardUrl}`,
        '',
        "Thank you for telling us — this is exactly how Sual gets better.",
        '',
        '— The Sual Team',
      ].join('\n'),
    }),
  })

  if (!res.ok) {
    console.error('Failed to send fix notification email:', await res.text())
  }
}

serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  const rawBody = await req.text()
  const signature = req.headers.get('x-hub-signature-256')

  const validSignature = await verifyGithubSignature(rawBody, signature)
  if (!validSignature) {
    return new Response('Invalid signature', { status: 401 })
  }

  let payload
  try {
    payload = JSON.parse(rawBody)
  } catch {
    return new Response('Invalid JSON', { status: 400 })
  }

  const commits = Array.isArray(payload.commits) ? payload.commits : []
  if (commits.length === 0) {
    return new Response(JSON.stringify({ ok: true, matched: 0 }), {
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const matches = new Map<number, string>()
  for (const commit of commits) {
    const message: string = commit.message || ''
    const sha: string = commit.id || ''
    for (const match of message.matchAll(TICKET_PATTERN)) {
      const ticketId = parseInt(match[1], 10)
      matches.set(ticketId, sha)
    }
  }

  let notifiedCount = 0

  for (const [ticketId, sha] of matches) {
    const { data: item, error: fetchError } = await supabaseAdmin
      .from('feedback_items')
      .select('id, type, public_title, submitter_email, submitter_name, status')
      .eq('id', ticketId)
      .maybeSingle()

    if (fetchError || !item) {
      console.error(`SF-${ticketId} referenced in commit ${sha} but not found:`, fetchError)
      continue
    }
    if (item.status === 'fixed') continue

    const { error: updateError } = await supabaseAdmin
      .from('feedback_items')
      .update({
        status: 'fixed',
        fixed_commit_sha: sha,
        fixed_at: new Date().toISOString(),
      })
      .eq('id', ticketId)

    if (updateError) {
      console.error(`Failed to mark SF-${ticketId} fixed:`, updateError)
      continue
    }

    await sendFixNotification(item)

    await supabaseAdmin
      .from('feedback_items')
      .update({ notified_user_at: new Date().toISOString() })
      .eq('id', ticketId)

    notifiedCount++
  }

  return new Response(JSON.stringify({ ok: true, matched: matches.size, notified: notifiedCount }), {
    headers: { 'Content-Type': 'application/json' },
  })
})