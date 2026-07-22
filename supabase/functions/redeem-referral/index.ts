// supabase/functions/redeem-referral/index.ts
//
// Called once, right after a new user's first successful signup, if
// they arrived via a referral link. Verifies the code, records the
// referral, and grants the referrer a free month of Spaces access —
// tracked in referral_free_access, completely separate from the real
// Paystack-driven subscriptions table, so referral rewards can never
// be confused with real payments in that data.
//
// Deploy:  supabase functions deploy redeem-referral

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!
const supabaseAdmin = createClient(SUPABASE_URL, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, content-type, x-client-info, apikey',
  }
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

  // Identify the referred user from their own auth token — never
  // trust a user_id passed in the request body, since that would let
  // anyone credit a referral to an arbitrary account.
  const callerClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: { headers: { Authorization: authHeader } },
  })
  const { data: callerData, error: callerError } = await callerClient.auth.getUser()
  if (callerError || !callerData?.user?.id) {
    return new Response(JSON.stringify({ error: 'Could not verify caller' }), { status: 401, headers: corsHeaders() })
  }
  const referredId = callerData.user.id

  const { referral_code } = await req.json()
  if (!referral_code) {
    return new Response(JSON.stringify({ error: 'referral_code is required' }), { status: 400, headers: corsHeaders() })
  }

  // Find the referrer by their code.
  const { data: referrerProfile, error: profileError } = await supabaseAdmin
    .from('profiles')
    .select('id')
    .eq('referral_code', referral_code.toUpperCase())
    .maybeSingle()

  if (profileError || !referrerProfile) {
    return new Response(JSON.stringify({ error: 'Invalid referral code' }), { status: 400, headers: corsHeaders() })
  }

  if (referrerProfile.id === referredId) {
    return new Response(JSON.stringify({ error: 'You cannot refer yourself' }), { status: 400, headers: corsHeaders() })
  }

  // The unique constraint on referred_id is the real backstop here —
  // this check is just for a clean error message before hitting it.
  const { data: existing } = await supabaseAdmin
    .from('referrals')
    .select('id')
    .eq('referred_id', referredId)
    .maybeSingle()
  if (existing) {
    return new Response(JSON.stringify({ error: 'This account has already been credited to a referral' }), { status: 400, headers: corsHeaders() })
  }

  try {
    const { error: insertError } = await supabaseAdmin.from('referrals').insert({
      referrer_id: referrerProfile.id,
      referred_id: referredId,
      referral_code: referral_code.toUpperCase(),
    })
    if (insertError) throw insertError

    // Count this referrer's total completed referrals now that the
    // new one is recorded.
    const { count: totalReferrals } = await supabaseAdmin
      .from('referrals')
      .select('id', { count: 'exact', head: true })
      .eq('referrer_id', referrerProfile.id)

    // The reward is a single, non-repeating lifetime grant — this
    // update only succeeds if referral_reward_claimed is still false,
    // which is what stops it from ever firing a second time even if
    // this function somehow runs concurrently for the same referrer,
    // whoever's update actually flips the flag first wins, the other
    // silently gets zero rows updated and grants nothing.
    if ((totalReferrals ?? 0) >= 30) {
      const { data: claimResult, error: claimError } = await supabaseAdmin
        .from('profiles')
        .update({ referral_reward_claimed: true })
        .eq('id', referrerProfile.id)
        .eq('referral_reward_claimed', false)
        .select('id')

      if (claimError) throw claimError

      // claimResult only has a row if THIS call was the one that won
      // the race and actually flipped the flag — only then do we grant.
      if (claimResult && claimResult.length > 0) {
        const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        const { error: grantError } = await supabaseAdmin.from('referral_free_access').insert({
          user_id: referrerProfile.id,
          expires_at: expiresAt.toISOString(),
          reason: 'referral_30_milestone',
        })
        if (grantError) throw grantError
      }
    }

    return new Response(JSON.stringify({ ok: true, referrerCredited: true }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders() })
  }
})