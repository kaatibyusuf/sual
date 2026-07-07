// send-list-broadcast.js
// Run with: node send-list-broadcast.js
// A one-off script -- safe to delete after use.

import { readFileSync } from 'fs'

// -- EDIT THESE FOUR LINES --
const SECRET = 'sual2026launchXk9mPqR7'      // same BROADCAST_SECRET as before
const SUBJECT = 'Sual launches in 3 days'
const HTML_PATH = 'src/pages/sual-launch-email-2.html' // whichever email you're sending
const EMAILS_PATH = 'emails.txt'                  // your exported Google Doc list
// -----------------------------

const FUNCTION_URL = 'https://fmqjgcowupsqzanarjva.supabase.co/functions/v1/send-list-broadcast'

async function main() {
  const html = readFileSync(HTML_PATH, 'utf8')
  console.log('HTML loaded, length:', html.length)

  const rawEmails = readFileSync(EMAILS_PATH, 'utf8')
  // Splits on newlines AND commas, so it works whether the list is
  // one-per-line or comma-separated.
  const emails = rawEmails
    .split(/[\r\n,]+/)
    .map(e => e.trim())
    .filter(Boolean)

  console.log('Emails found in file:', emails.length)

  const res = await fetch(FUNCTION_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ secret: SECRET, subject: SUBJECT, html, emails }),
  })

  const text = await res.text()
  console.log('Status:', res.status)
  console.log('Response:', text)
}

main().catch(err => console.error('Failed:', err))