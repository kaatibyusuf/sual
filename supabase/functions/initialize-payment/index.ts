// supabase/functions/initialize-payment/index.ts
//
// Initializes a Paystack transaction for Spaces (monthly, annual, or
// lifetime), Book Quiz, the Tajweed Course, or Arabiyyah Class
// (per-unit or full-course one-time purchase). The reference format
// carries the plan so the webhook can branch on it without a second
// lookup:
//   sual_<plan>_<uuid>_<epoch>            (Spaces)
//   bookquiz_<plan>_<uuid>_<epoch>        (Book Quiz)
//   tajweed_<plan>_<uuid>_<epoch>         (Tajweed Course subscription)
//   arabiyyahclass_<unit-id|full>_<uuid>_<epoch>  (Arabiyyah Class)

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const PAYSTACK_SECRET_KEY = Deno.env.get('PAYSTACK_SECRET_KEY')!
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

// Amounts in kobo (Paystack expects the smallest currency unit).
const SPACES_PLAN_AMOUNTS = {
  monthly: 2500 * 100,
  annual: 20000 * 100,
  lifetime: 100000 * 100,
}

const TAJWEED_PLAN_AMOUNTS = {
  monthly: 1500 * 100,
  annual: 10000 * 100,
}

// Arabiyyah Class: a one-time purchase per unit, or one flat price
// for full-course access — NOT a monthly/annual subscription like
// Spaces/Tajweed above, so this is priced differently: `plan` here
// is either 'full' or a specific unit id string (e.g. 'unit-2'),
// matching exactly what ArabiyyahClass.jsx's startPurchase(plan)
// actually sends. Every non-'full' plan value is treated as a
// per-unit purchase at the same flat price — these numbers must
// stay in sync with UNIT_PRICE_NGN/FULL_PRICE_NGN in
// ArabiyyahClass.jsx if either ever changes.
const ARABIYYAHCLASS_UNIT_PRICE = 500 * 100
const ARABIYYAHCLASS_FULL_PRICE = 5000 * 100

// Where the user is sent back to after paying, per product — so a
// Tajweed purchase lands back on /tajweed, not /spaces.
const CALLBACK_PATHS = {
  spaces: '/spaces',
  bookquiz: '/book-quiz',
  tajweed: '/tajweed',
  arabiyyahclass: '/arabiyyah-class',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  const authHeader = req.headers.get('Authorization') ?? ''
  const asUser = createClient(SUPABASE_URL, ANON_KEY, { global: { headers: { Authorization: authHeader } } })
  const { data: userData, error: userErr } = await asUser.auth.getUser(authHeader.replace('Bearer ', ''))
  if (userErr || !userData?.user) {
    return new Response(JSON.stringify({ error: 'Not authenticated' }), { status: 401, headers: corsHeaders })
  }
  const user = userData.user

  const body = await req.json().catch(() => ({}))
  const { product, plan } = body

  let amount, reference

  if (product === 'spaces') {
    const spacesPlan = ['monthly', 'annual', 'lifetime'].includes(plan) ? plan : 'monthly'
    amount = SPACES_PLAN_AMOUNTS[spacesPlan]
    reference = `sual_${spacesPlan}_${user.id}_${Date.now()}`
  } else if (product === 'bookquiz') {
    const bqPlan = plan === 'annual' ? 'annual' : 'monthly'
    amount = bqPlan === 'annual' ? 20000 * 100 : 2000 * 100
    reference = `bookquiz_${bqPlan}_${user.id}_${Date.now()}`
  } else if (product === 'tajweed') {
    const tajweedPlan = plan === 'annual' ? 'annual' : 'monthly'
    amount = TAJWEED_PLAN_AMOUNTS[tajweedPlan]
    reference = `tajweed_${tajweedPlan}_${user.id}_${Date.now()}`
  } else if (product === 'arabiyyahclass') {
    // `plan` is 'full' or a specific unit id (e.g. 'unit-2') here,
    // not one of a fixed small set of plan names like the products
    // above — so this branch trusts whatever string was sent as the
    // unit identifier (falling back to per-unit pricing for
    // anything that isn't literally 'full'), rather than validating
    // it against a whitelist the way spacesPlan/bqPlan/tajweedPlan
    // do above. The amount charged only ever depends on whether
    // it's 'full' or not, so a bogus/unrecognized unit id can't
    // result in an unexpected price — only in a reference that the
    // webhook won't recognize as a real unit, which fails safely
    // (no purchase row gets created) rather than granting anything.
    const isFull = plan === 'full'
    amount = isFull ? ARABIYYAHCLASS_FULL_PRICE : ARABIYYAHCLASS_UNIT_PRICE
    const planSegment = isFull ? 'full' : String(plan)
    reference = `arabiyyahclass_${planSegment}_${user.id}_${Date.now()}`
  } else {
    return new Response(JSON.stringify({ error: 'Unknown product' }), { status: 400, headers: corsHeaders })
  }

  const callbackPath = CALLBACK_PATHS[product] ?? '/spaces'

  const res = await fetch('https://api.paystack.co/transaction/initialize', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: user.email,
      amount,
      reference,
      callback_url: `${req.headers.get('origin') ?? 'https://app.usesual.com'}${callbackPath}?payment=success`,
    }),
  })

  const data = await res.json()
  if (!data.status) {
    console.error('Paystack initialize failed:', data)
    return new Response(JSON.stringify({ error: data.message || 'Could not start payment' }), { status: 500, headers: corsHeaders })
  }

  return new Response(JSON.stringify({ authorization_url: data.data.authorization_url }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
})