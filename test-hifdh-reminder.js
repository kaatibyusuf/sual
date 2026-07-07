// test-hifdh-reminder.js
// Run with: node test-hifdh-reminder.js
// A one-off test script -- safe to delete once you trust the function.

// -- EDIT THIS ONE LINE --
const SECRET = 'your_broadcast_secret_here'  // same BROADCAST_SECRET as before
// -------------------------

const FUNCTION_URL = 'https://fmqjgcowupsqzanarjva.supabase.co/functions/v1/hifdh-reminder'

async function main() {
  const res = await fetch(FUNCTION_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret: SECRET }),
  })
  const text = await res.text()
  console.log('Status:', res.status)
  console.log('Response:', text)
}

main().catch(err => console.error('Failed:', err))