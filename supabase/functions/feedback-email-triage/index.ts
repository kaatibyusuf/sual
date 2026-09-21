// supabase/functions/feedback-email-triage/index.ts
//
// Scheduled function (via pg_cron, e.g. every 5 minutes). Each run:
//   1. Refreshes a Gmail API access token from the stored refresh
//      token (one-time OAuth setup required — see the setup notes
//      sent alongside this file, not repeated here).
//   2. Lists unread messages in the inbox.
//   3. For each one not already processed (checked against
//      feedback_items.source_email_id):
//        - Extracts sender, subject, plain-text body, and any image
//          attachments.
//        - Calls an LLM to classify (bug/feature) and produce both
//          an admin-facing and a public-facing description.
//        - Uploads any screenshots to Supabase Storage.
//        - Inserts the feedback_items row.
//        - Creates a Gmail DRAFT reply (not sent) in the same
//          thread, with the board link included — matching "I reply
//          to all the emails" from how this was scoped: you stay in
//          control of what actually gets sent, this just prepares it.
//        - Marks the Gmail message read so it isn't picked up again.
//
// Deploy:  supabase functions deploy feedback-email-triage
// Schedule (SQL, after deploying):
//   select cron.schedule(
//     'feedback-email-triage-every-5-min',
//     '*/5 * * * *',
//     $$ select net.http_post(
//       url := 'https://<project-ref>.supabase.co/functions/v1/feedback-email-triage',
//       headers := jsonb_build_object('Authorization', 'Bearer <service-role-key>')
//     ) $$
//   );
//
// Secrets: supabase secrets set GMAIL_CLIENT_ID=...
//          supabase secrets set GMAIL_CLIENT_SECRET=...
//          supabase secrets set GMAIL_REFRESH_TOKEN=...
//          supabase secrets set OPENAI_API_KEY=...   (reused if already set)
//          supabase secrets set SUAL_APP_URL=https://app.usesual.com

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const GMAIL_CLIENT_ID = Deno.env.get('GMAIL_CLIENT_ID')!
const GMAIL_CLIENT_SECRET = Deno.env.get('GMAIL_CLIENT_SECRET')!
const GMAIL_REFRESH_TOKEN = Deno.env.get('GMAIL_REFRESH_TOKEN')!
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY')!
const SUAL_APP_URL = Deno.env.get('SUAL_APP_URL') ?? 'https://app.usesual.com'

const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

async function getGmailAccessToken(): Promise<string> {
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: GMAIL_CLIENT_ID,
      client_secret: GMAIL_CLIENT_SECRET,
      refresh_token: GMAIL_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  })
  if (!res.ok) throw new Error(`Gmail token refresh failed: ${await res.text()}`)
  const data = await res.json()
  return data.access_token
}

function decodeBase64Url(input: string): string {
  const base64 = input.replace(/-/g, '+').replace(/_/g, '/')
  return new TextDecoder().decode(Uint8Array.from(atob(base64), c => c.charCodeAt(0)))
}

function extractPlainTextAndAttachments(payload: any): { text: string; attachmentParts: any[] } {
  let text = ''
  const attachmentParts: any[] = []

  function walk(part: any) {
    if (!part) return
    if (part.mimeType === 'text/plain' && part.body?.data) {
      text += decodeBase64Url(part.body.data)
    }
    if (part.mimeType?.startsWith('image/') && part.body?.attachmentId) {
      attachmentParts.push(part)
    }
    if (Array.isArray(part.parts)) {
      for (const child of part.parts) walk(child)
    }
  }
  walk(payload)
  return { text, attachmentParts }
}

function parseFromHeader(fromValue: string): { email: string; name: string | null } {
  const match = fromValue.match(/^(.*?)\s*<(.+)>$/)
  if (match) {
    const name = match[1].replace(/"/g, '').trim()
    return { email: match[2].trim(), name: name || null }
  }
  return { email: fromValue.trim(), name: null }
}

async function classifyWithLLM(subject: string, body: string): Promise<{
  type: 'bug' | 'feature'
  title: string
  description: string
  public_title: string
  public_description: string
} | null> {
  const prompt = `You are triaging a user feedback email for an Islamic education app called Sual.

Subject: ${subject}
Body: ${body}

Classify this as either "bug" or "feature". Then produce:
- title: a short admin-facing title (max 10 words)
- description: a clear admin-facing summary of the issue/request, preserving useful technical detail from the email
- public_title: a short, generic public-facing title (max 8 words) — no personal details, no account-specific info
- public_description: a 1-2 sentence public-facing description a stranger could read on a public board, with no personal information, email content quoted verbatim, or anything identifying

Respond with ONLY a JSON object with exactly these keys: type, title, description, public_title, public_description.`

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      response_format: { type: 'json_object' },
      messages: [{ role: 'user', content: prompt }],
    }),
  })

  if (!res.ok) {
    console.error('LLM classification failed:', await res.text())
    return null
  }

  const data = await res.json()
  try {
    const parsed = JSON.parse(data.choices[0].message.content)
    if (parsed.type !== 'bug' && parsed.type !== 'feature') return null
    return parsed
  } catch (err) {
    console.error('Failed to parse LLM response:', err, data)
    return null
  }
}

async function createDraftReply(accessToken: string, threadId: string, messageId: string, toEmail: string, subject: string, itemId: number) {
  const boardUrl = `${SUAL_APP_URL}/feedback/${itemId}`
  const replySubject = subject.startsWith('Re:') ? subject : `Re: ${subject}`
  const bodyText = [
    'Assalamu Alaikum,',
    '',
    "Thank you for reaching out — we've logged this and you can follow its progress here:",
    '',
    boardUrl,
    '',
    "We'll email you directly the moment it's live.",
    '',
    '— The Sual Team',
  ].join('\r\n')

  const rawMessage = [
    `To: ${toEmail}`,
    `Subject: ${replySubject}`,
    `In-Reply-To: ${messageId}`,
    `References: ${messageId}`,
    'Content-Type: text/plain; charset="UTF-8"',
    '',
    bodyText,
  ].join('\r\n')

  const encodedMessage = btoa(rawMessage).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

  const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/drafts', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: { raw: encodedMessage, threadId },
    }),
  })

  if (!res.ok) {
    console.error('Failed to create Gmail draft:', await res.text())
  }
}

serve(async (req) => {
  try {
    const accessToken = await getGmailAccessToken()

    const listRes = await fetch(
      'https://gmail.googleapis.com/gmail/v1/users/me/messages?q=is:unread&maxResults=20',
      { headers: { Authorization: `Bearer ${accessToken}` } },
    )
    if (!listRes.ok) throw new Error(`Gmail list failed: ${await listRes.text()}`)
    const listData = await listRes.json()
    const messages = listData.messages || []

    let processed = 0

    for (const msgRef of messages) {
      // Skip anything already turned into a feedback item — this is
      // the real guard against reprocessing, independent of Gmail's
      // own read/unread state.
      const { data: existing } = await supabaseAdmin
        .from('feedback_items')
        .select('id')
        .eq('source_email_id', msgRef.id)
        .maybeSingle()
      if (existing) continue

      const msgRes = await fetch(
        `https://gmail.googleapis.com/gmail/v1/users/me/messages/${msgRef.id}?format=full`,
        { headers: { Authorization: `Bearer ${accessToken}` } },
      )
      if (!msgRes.ok) {
        console.error(`Failed to fetch message ${msgRef.id}:`, await msgRes.text())
        continue
      }
      const msg = await msgRes.json()

      const headers = msg.payload?.headers || []
      const fromHeader = headers.find((h: any) => h.name === 'From')?.value || ''
      const subjectHeader = headers.find((h: any) => h.name === 'Subject')?.value || '(no subject)'
      const messageIdHeader = headers.find((h: any) => h.name === 'Message-ID')?.value || ''

      const { email: submitterEmail, name: submitterName } = parseFromHeader(fromHeader)
      const { text: bodyText, attachmentParts } = extractPlainTextAndAttachments(msg.payload)

      const classification = await classifyWithLLM(subjectHeader, bodyText)
      if (!classification) {
        console.error(`Could not classify message ${msgRef.id}, skipping — left unread for manual review.`)
        continue
      }

      const { data: inserted, error: insertError } = await supabaseAdmin
        .from('feedback_items')
        .insert({
          type: classification.type,
          title: classification.title,
          description: classification.description,
          public_title: classification.public_title,
          public_description: classification.public_description,
          submitter_email: submitterEmail,
          submitter_name: submitterName,
          source_email_id: msgRef.id,
        })
        .select('id')
        .single()

      if (insertError || !inserted) {
        console.error(`Failed to insert feedback item for message ${msgRef.id}:`, insertError)
        continue
      }

      // Screenshots — download from Gmail, re-upload to Supabase
      // Storage, one row per attachment.
      for (const part of attachmentParts) {
        try {
          const attRes = await fetch(
            `https://gmail.googleapis.com/gmail/v1/users/me/messages/${msgRef.id}/attachments/${part.body.attachmentId}`,
            { headers: { Authorization: `Bearer ${accessToken}` } },
          )
          if (!attRes.ok) continue
          const attData = await attRes.json()
          const bytes = Uint8Array.from(
            atob(attData.data.replace(/-/g, '+').replace(/_/g, '/')),
            c => c.charCodeAt(0),
          )
          const ext = (part.filename || 'screenshot.png').split('.').pop()
          const storagePath = `feedback/${inserted.id}/${crypto.randomUUID()}.${ext}`

          const { error: uploadError } = await supabaseAdmin.storage
            .from('feedback-screenshots')
            .upload(storagePath, bytes, { contentType: part.mimeType })

          if (!uploadError) {
            await supabaseAdmin.from('feedback_attachments').insert({
              feedback_item_id: inserted.id,
              storage_path: storagePath,
            })
          }
        } catch (err) {
          console.error('Failed to process attachment:', err)
        }
      }

      await createDraftReply(accessToken, msg.threadId, messageIdHeader, submitterEmail, subjectHeader, inserted.id)

      // Mark read so this exact message never shows up in the next
      // poll's query — the source_email_id check above is the real
      // guard, this is just to keep the inbox itself tidy.
      await fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${msgRef.id}/modify`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ removeLabelIds: ['UNREAD'] }),
      })

      processed++
    }

    return new Response(JSON.stringify({ ok: true, processed }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('feedback-email-triage failed:', err)
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
})