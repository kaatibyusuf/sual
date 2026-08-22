// supabase/functions/admin-manage-merch/index.ts
//
// Lets an admin look up a 5,000-coin merch redemption code a member
// emailed in, verify it's real and unfulfilled, and mark it fulfilled
// once the physical item has been sent. No shipping form, no
// automated fulfillment — this only tracks state so the same code
// can't be redeemed twice and so there's a record of what's been sent.
//
// Actual schema (see coin_rewards.sql):
//   - coin balance is NOT a column — it's the sum of coin_transactions
//     rows for a user (append-only ledger, awarded by a security-
//     definer trigger on quiz_history insert)
//   - profiles.merch_redemption_code (text, unique) is generated
//     automatically once lifetime balance first crosses 5000
//   - no generated_at column exists on profiles for the code, so
//     this doesn't report one
// Requires the migration adding merch_code_fulfilled_at /
// merch_code_fulfilled_by (see merch_migration.sql) before deploying.
//
// SECURITY: same ADMIN_EMAILS caller-verification pattern as the
// other admin-manage-* functions. Never trusts client-side route
// gating — this is the only thing actually protecting subscriber
// emails and codes.
//
// Deploy:  supabase functions deploy admin-manage-merch
// Uses the same ADMIN_EMAILS secret already set for the other admin functions.

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!
const ADMIN_EMAILS = (Deno.env.get('ADMIN_EMAILS') ?? '')
  .split(',').map(e => e.trim().toLowerCase()).filter(Boolean)

const supabaseAdmin = createClient(SUPABASE_URL, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, content-type, x-client-info, apikey',
  }
}

// Resolves an email to a user id by paginating auth.admin.listUsers —
// same approach admin-stats already uses, since profiles has no email
// column of its own to query directly.
async function findUserIdByEmail(email: string): Promise<string | null> {
  const target = email.trim().toLowerCase()
  let page = 1
  while (true) {
    const { data, error } = await supabaseAdmin.auth.admin.listUsers({ page, perPage: 1000 })
    if (error) throw error
    const match = data.users.find(u => (u.email ?? '').toLowerCase() === target)
    if (match) return match.id
    if (data.users.length < 1000) return null
    page++
  }
}

async function getCoinBalance(userId: string): Promise<number> {
  const { data, error } = await supabaseAdmin
    .from('coin_transactions')
    .select('amount')
    .eq('user_id', userId)
  if (error) throw error
  return (data || []).reduce((sum, row) => sum + (row.amount || 0), 0)
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders() })
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: corsHeaders() })
  }

  const authHeader = req.headers.get('Authorization')
  if (!authHeader) {
    return new Response(JSON.stringify({ error: 'Missing authorization' }), { status: 401, headers: corsHeaders() })
  }
  const callerClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: { headers: { Authorization: authHeader } },
  })
  const { data: callerData, error: callerError } = await callerClient.auth.getUser()
  if (callerError || !callerData?.user?.email) {
    return new Response(JSON.stringify({ error: 'Could not verify caller' }), { status: 401, headers: corsHeaders() })
  }
  if (!ADMIN_EMAILS.includes(callerData.user.email.toLowerCase())) {
    console.error('Non-admin attempted admin-manage-merch:', callerData.user.email)
    return new Response(JSON.stringify({ error: 'Not authorized' }), { status: 403, headers: corsHeaders() })
  }

  let body
  try {
    body = await req.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), { status: 400, headers: corsHeaders() })
  }

  const action = body.action

  // ── Look up a single code or email a member sent in ─────────
  if (action === 'lookup') {
    const code = (body.code || '').trim().toUpperCase()
    const email = (body.email || '').trim()

    if (!code && !email) {
      return new Response(JSON.stringify({ error: 'code or email is required' }), { status: 400, headers: corsHeaders() })
    }

    let userId: string | null = null
    if (email) {
      try {
        userId = await findUserIdByEmail(email)
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders() })
      }
      if (!userId) {
        return new Response(JSON.stringify({ ok: true, found: false, reason: 'No account with that email.' }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
      }
    }

    let query = supabaseAdmin
      .from('profiles')
      .select('id, merch_redemption_code, merch_code_fulfilled_at, merch_code_fulfilled_by')

    query = userId ? query.eq('id', userId) : query.eq('merch_redemption_code', code)

    const { data: profile, error } = await query.maybeSingle()
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })

    if (!profile) {
      return new Response(JSON.stringify({ ok: true, found: false, reason: 'No matching record.' }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
    }
    if (!profile.merch_redemption_code) {
      return new Response(JSON.stringify({ ok: true, found: true, hasCode: false, reason: 'This member has not earned a merch code yet.' }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
    }
    // If a code was searched directly, confirm it actually matches this profile's code.
    if (code && profile.merch_redemption_code.toUpperCase() !== code) {
      return new Response(JSON.stringify({ ok: true, found: false, reason: 'Code not found.' }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
    }

    let resolvedEmail = email || null
    if (!resolvedEmail) {
      const { data: userData } = await supabaseAdmin.auth.admin.getUserById(profile.id)
      resolvedEmail = userData?.user?.email ?? '(unknown)'
    }

    let balance = 0
    try {
      balance = await getCoinBalance(profile.id)
    } catch (err) {
      console.error('Failed to compute coin balance:', err)
    }

    return new Response(JSON.stringify({
      ok: true,
      found: true,
      hasCode: true,
      user_id: profile.id,
      email: resolvedEmail,
      coins: balance,
      merch_code: profile.merch_redemption_code,
      fulfilled_at: profile.merch_code_fulfilled_at,
      fulfilled_by: profile.merch_code_fulfilled_by,
    }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  // ── Mark a code fulfilled once the item has actually been sent ──
  if (action === 'mark_fulfilled') {
    const userId = body.user_id
    if (!userId) return new Response(JSON.stringify({ error: 'user_id is required' }), { status: 400, headers: corsHeaders() })

    const { data: existing, error: fetchErr } = await supabaseAdmin
      .from('profiles')
      .select('merch_redemption_code, merch_code_fulfilled_at')
      .eq('id', userId)
      .maybeSingle()
    if (fetchErr) return new Response(JSON.stringify({ error: fetchErr.message }), { status: 500, headers: corsHeaders() })
    if (!existing?.merch_redemption_code) {
      return new Response(JSON.stringify({ error: 'This member has no merch code on record.' }), { status: 400, headers: corsHeaders() })
    }
    if (existing.merch_code_fulfilled_at) {
      return new Response(JSON.stringify({ error: 'This code was already marked fulfilled.' }), { status: 400, headers: corsHeaders() })
    }

    const { error } = await supabaseAdmin
      .from('profiles')
      .update({
        merch_code_fulfilled_at: new Date().toISOString(),
        merch_code_fulfilled_by: callerData.user.email,
      })
      .eq('id', userId)
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  // ── List everyone with an unfulfilled code ───────────────────
  // No generated_at column exists to sort by, so this orders by
  // profiles.id instead — if you want oldest-earned-first ordering,
  // that would need a real generated_at column added alongside the
  // fulfillment columns in the migration.
  if (action === 'list_pending') {
    const { data, error } = await supabaseAdmin
      .from('profiles')
      .select('id, merch_redemption_code')
      .not('merch_redemption_code', 'is', null)
      .is('merch_code_fulfilled_at', null)

    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })

    const withDetails = await Promise.all((data || []).map(async (p) => {
      const [{ data: userData }, balance] = await Promise.all([
        supabaseAdmin.auth.admin.getUserById(p.id),
        getCoinBalance(p.id).catch(() => 0),
      ])
      return { ...p, email: userData?.user?.email ?? '(unknown)', coins: balance }
    }))

    return new Response(JSON.stringify({ ok: true, pending: withDetails }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  return new Response(JSON.stringify({ error: `Unknown action: ${action}` }), { status: 400, headers: corsHeaders() })
})