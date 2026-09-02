// supabase/functions/initialize-payment/index.ts
//
// Initializes a Paystack transaction for Spaces (monthly, annual, or
// lifetime), Book Quiz, the Tajweed Course, Adab Class, Tawheed
// Class, or Tajweed Class. The reference format carries the plan so
// the webhook can branch on it without a second lookup:
//   sual_<plan>_<uuid>_<epoch>          (Spaces)
//   bookquiz_<plan>_<uuid>_<epoch>      (Book Quiz)
//   tajweed_<plan>_<uuid>_<epoch>       (Tajweed Course)
//   adab_<plan>_<uuid>_<epoch>          (Adab Class — plan is
//                                        'full' or a unit token like
//                                        'unit2', derived from the
//                                        unit id 'unit-2')
//   tawheed_<plan>_<uuid>_<epoch>       (Tawheed Class — same plan
//                                        format as Adab Class)
//   tajweedclass_<plan>_<uuid>_<epoch>  (Tajweed Class — same plan
//                                        format as Adab Class and
//                                        Tawheed Class; a separate
//                                        product from the existing
//                                        Tajweed Course subscription
//                                        above, deliberately, so
//                                        neither can collide with
//                                        the other)
//   seerahclass_<plan>_<uuid>_<epoch>   (Seerah Class — same plan
//                                        format as Adab Class,
//                                        Tawheed Class, and Tajweed
//                                        Class; a separate product
//                                        from the existing Seerah
//                                        discipline in this app's
//                                        Q&A-style Disciplines
//                                        feature, which has no
//                                        payment product of its own
//                                        to collide with)

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

// Adab Class: one-off purchases, not a recurring subscription.
// ₦500 unlocks a single unit; ₦5,000 unlocks every unit at once.
const ADAB_UNIT_PRICE = 500 * 100
const ADAB_FULL_PRICE = 5000 * 100

// Tawheed Class: same one-off pricing model and amounts as Adab Class.
const TAWHEED_UNIT_PRICE = 500 * 100
const TAWHEED_FULL_PRICE = 5000 * 100

// Tajweed Class: same one-off pricing model and amounts as Adab
// Class and Tawheed Class. This is a distinct product from the
// existing 'tajweed' subscription above (Tajweed Course), not a
// replacement for it.
const TAJWEEDCLASS_UNIT_PRICE = 500 * 100
const TAJWEEDCLASS_FULL_PRICE = 5000 * 100

// Seerah Class: same one-off pricing model and amounts as the other
// three classes.
const SEERAHCLASS_UNIT_PRICE = 500 * 100
const SEERAHCLASS_FULL_PRICE = 5000 * 100

// Where the user is sent back to after paying, per product — so a
// Tajweed purchase lands back on /tajweed, not /spaces.
const CALLBACK_PATHS = {
  spaces: '/spaces',
  bookquiz: '/book-quiz',
  tajweed: '/tajweed',
  adab: '/adab',
  tawheed: '/tawheed',
  tajweedclass: '/tajweed-class',
  seerahclass: '/seerah-class',
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
  } else if (product === 'adab') {
    if (plan === 'full') {
      amount = ADAB_FULL_PRICE
      reference = `adab_full_${user.id}_${Date.now()}`
    } else if (typeof plan === 'string' && /^unit-\d{1,2}$/.test(plan)) {
      amount = ADAB_UNIT_PRICE
      // 'unit-2' -> 'unit2' so the webhook's underscore-delimited
      // parser sees one clean token, not two.
      reference = `adab_${plan.replace('-', '')}_${user.id}_${Date.now()}`
    } else {
      return new Response(JSON.stringify({ error: 'Invalid Adab plan' }), { status: 400, headers: corsHeaders })
    }
  } else if (product === 'tawheed') {
    if (plan === 'full') {
      amount = TAWHEED_FULL_PRICE
      reference = `tawheed_full_${user.id}_${Date.now()}`
    } else if (typeof plan === 'string' && /^unit-\d{1,2}$/.test(plan)) {
      amount = TAWHEED_UNIT_PRICE
      // 'unit-2' -> 'unit2', same reasoning as Adab's reference format.
      reference = `tawheed_${plan.replace('-', '')}_${user.id}_${Date.now()}`
    } else {
      return new Response(JSON.stringify({ error: 'Invalid Tawheed plan' }), { status: 400, headers: corsHeaders })
    }
  } else if (product === 'tajweedclass') {
    if (plan === 'full') {
      amount = TAJWEEDCLASS_FULL_PRICE
      reference = `tajweedclass_full_${user.id}_${Date.now()}`
    } else if (typeof plan === 'string' && /^unit-\d{1,2}$/.test(plan)) {
      amount = TAJWEEDCLASS_UNIT_PRICE
      // 'unit-2' -> 'unit2', same reasoning as Adab's and Tawheed's reference format.
      reference = `tajweedclass_${plan.replace('-', '')}_${user.id}_${Date.now()}`
    } else {
      return new Response(JSON.stringify({ error: 'Invalid Tajweed Class plan' }), { status: 400, headers: corsHeaders })
    }
  } else if (product === 'seerahclass') {
    if (plan === 'full') {
      amount = SEERAHCLASS_FULL_PRICE
      reference = `seerahclass_full_${user.id}_${Date.now()}`
    } else if (typeof plan === 'string' && /^unit-\d{1,2}$/.test(plan)) {
      amount = SEERAHCLASS_UNIT_PRICE
      // 'unit-2' -> 'unit2', same reasoning as the other three classes' reference format.
      reference = `seerahclass_${plan.replace('-', '')}_${user.id}_${Date.now()}`
    } else {
      return new Response(JSON.stringify({ error: 'Invalid Seerah Class plan' }), { status: 400, headers: corsHeaders })
    }
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