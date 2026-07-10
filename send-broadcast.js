// send-broadcast.js
// Run with: node send-broadcast.js
// A one-off script -- safe to delete after use.

import { readFileSync } from 'fs'

// -- EDIT THESE THREE LINES --
const SECRET = 'sual2026launchXk9mPqR7'
const SUBJECT = 'Sual Is Live!'
const HTML_PATH = 'src\pages\sual-launch-day-email-long.html' // adjust to your actual file path
// -----------------------------

const FUNCTION_URL = 'https://fmqjgcowupsqzanarjva.supabase.co/functions/v1/send-broadcast'

async function main() {
  const html = readFileSync(HTML_PATH, 'utf8')
  console.log('HTML loaded, length:', html.length)

  const res = await fetch(FUNCTION_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ secret: SECRET, subject: SUBJECT, html }),
  })

  const text = await res.text()
  console.log('Status:', res.status)
  console.log('Response:', text)
}

main().catch(err => console.error('Failed:', err))