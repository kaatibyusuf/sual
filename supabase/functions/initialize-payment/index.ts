// supabase/functions/initialize-payment/index.ts
//
// Initializes a Paystack transaction for Spaces (monthly, annual, or
// lifetime), Book Quiz, the Tajweed Course, Adab Class, Tawheed
// Class, Tajweed Class, Seerah Class, Arabiyyah Class, Hadeeth
// Class, or Sual Marketplace. The reference format carries the plan
// so the webhook can branch on it without a second lookup:
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
//   arabiyyahclass_<plan>_<uuid>_<epoch> (Arabiyyah Class — same
//                                        plan format as the other
//                                        four classes; a separate
//                                        product from the existing
//                                        Arabiyyah discipline in
//                                        this app's Q&A-style
//                                        Disciplines feature, which
//                                        has no payment product of
//                                        its own to collide with)
//   hadeethclass_<plan>_<uuid>_<epoch>   (Hadeeth Class — same plan
//                                        format as the other five
//                                        classes; a separate,
//                                        standalone product not
//                                        tied to any existing
//                                        hadith-related feature)
//   mkt_cart_<uuid>_<epoch>              (Sual Marketplace — "cart"
//                                        stands in for a plan name
//                                        since a checkout can cover
//                                        several courses at once;
//                                        see the 'marketplace' branch
//                                        below for why this one
//                                        needs real DB writes before
//                                        calling Paystack, unlike
//                                        every other branch here)
//
// Every other product above is stateless until the webhook fires —
// the reference alone tells paystack-webhook everything it needs
// (which plan, whose user id), so this function never touches the
// database beyond authenticating the caller. Marketplace can't work
// that way: a cart can hold several courses at unpredictable prices,
// so the actual items and amounts have to be frozen into a real
// marketplace_orders/marketplace_order_items row *before* Paystack is
// called — otherwise someone editing their cart between checkout and
// payment could pay one amount for what was priced as another. That
// freeze step is the one thing that needs a service-role client here
// where every other branch gets by with just the caller's own JWT.

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const PAYSTACK_SECRET_KEY = Deno.env.get('PAYSTACK_SECRET_KEY')!
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

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

// Arabiyyah Class: same one-off pricing model and amounts as the
// other four classes.
const ARABIYYAHCLASS_UNIT_PRICE = 500 * 100
const ARABIYYAHCLASS_FULL_PRICE = 5000 * 100

// Hadeeth Class: same one-off pricing model and amounts as the
// other five classes.
const HADEETHCLASS_UNIT_PRICE = 500 * 100
const HADEETHCLASS_FULL_PRICE = 5000 * 100

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
  arabiyyahclass: '/arabiyyah-class',
  hadeethclass: '/hadeeth-class',
  marketplace: '/marketplace/checkout-complete',
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
  let extraResponseFields = {}

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
  } else if (product === 'arabiyyahclass') {
    if (plan === 'full') {
      amount = ARABIYYAHCLASS_FULL_PRICE
      reference = `arabiyyahclass_full_${user.id}_${Date.now()}`
    } else if (typeof plan === 'string' && /^unit-\d{1,2}$/.test(plan)) {
      amount = ARABIYYAHCLASS_UNIT_PRICE
      // 'unit-2' -> 'unit2', same reasoning as the other four classes' reference format.
      reference = `arabiyyahclass_${plan.replace('-', '')}_${user.id}_${Date.now()}`
    } else {
      return new Response(JSON.stringify({ error: 'Invalid Arabiyyah Class plan' }), { status: 400, headers: corsHeaders })
    }
  } else if (product === 'hadeethclass') {
    if (plan === 'full') {
      amount = HADEETHCLASS_FULL_PRICE
      reference = `hadeethclass_full_${user.id}_${Date.now()}`
    } else if (typeof plan === 'string' && /^unit-\d{1,2}$/.test(plan)) {
      amount = HADEETHCLASS_UNIT_PRICE
      // 'unit-2' -> 'unit2', same reasoning as the other five classes' reference format.
      reference = `hadeethclass_${plan.replace('-', '')}_${user.id}_${Date.now()}`
    } else {
      return new Response(JSON.stringify({ error: 'Invalid Hadeeth Class plan' }), { status: 400, headers: corsHeaders })
    }
  } else if (product === 'marketplace') {
    // ── Sual Marketplace: reads the caller's own server-side cart,
    // drops anything unpublished or already owned, freezes the rest
    // into a pending order + order_items, THEN calls Paystack. This
    // is the one branch in this file that writes to the database
    // before Paystack is ever involved — see the header comment for
    // why every other product doesn't need to.
    const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

    const { data: cartItems, error: cartError } = await admin
      .from('marketplace_cart_items')
      .select('id, course_id, marketplace_courses(id, title, price_kobo, currency, status)')
      .eq('user_id', user.id)
    if (cartError) {
      console.error('Failed to read marketplace cart:', cartError)
      return new Response(JSON.stringify({ error: 'Could not read your cart' }), { status: 500, headers: corsHeaders })
    }
    if (!cartItems || cartItems.length === 0) {
      return new Response(JSON.stringify({ error: 'Your cart is empty.' }), { status: 400, headers: corsHeaders })
    }

    const { data: existingEnrollments } = await admin
      .from('marketplace_enrollments')
      .select('course_id')
      .eq('user_id', user.id)
    const ownedCourseIds = new Set((existingEnrollments || []).map(e => e.course_id))

    const droppedTitles = []
    const validItems = cartItems.filter(item => {
      const course = item.marketplace_courses
      if (!course || course.status !== 'published') {
        droppedTitles.push(course?.title || 'a removed course')
        return false
      }
      if (ownedCourseIds.has(course.id)) {
        droppedTitles.push(`${course.title} (already purchased)`)
        return false
      }
      return true
    })

    const droppedCartItemIds = cartItems.filter(i => !validItems.includes(i)).map(i => i.id)
    if (droppedCartItemIds.length > 0) {
      await admin.from('marketplace_cart_items').delete().in('id', droppedCartItemIds)
    }

    if (validItems.length === 0) {
      return new Response(JSON.stringify({ error: 'Nothing left to check out.', dropped: droppedTitles }), { status: 400, headers: corsHeaders })
    }

    const currency = validItems[0].marketplace_courses.currency
    const totalKobo = validItems.reduce((sum, item) => sum + item.marketplace_courses.price_kobo, 0)

    reference = `mkt_cart_${user.id}_${Date.now()}`
    amount = totalKobo

    const { data: order, error: orderError } = await admin
      .from('marketplace_orders')
      .insert({ user_id: user.id, paystack_reference: reference, total_kobo: totalKobo, currency, status: 'pending' })
      .select()
      .single()
    if (orderError) {
      console.error('Failed to create marketplace order:', orderError)
      return new Response(JSON.stringify({ error: 'Could not start checkout' }), { status: 500, headers: corsHeaders })
    }

    const orderItemRows = validItems.map(item => ({
      order_id: order.id,
      course_id: item.marketplace_courses.id,
      price_kobo: item.marketplace_courses.price_kobo,
    }))
    const { error: orderItemsError } = await admin.from('marketplace_order_items').insert(orderItemRows)
    if (orderItemsError) {
      console.error('Failed to create marketplace order items:', orderItemsError)
      return new Response(JSON.stringify({ error: 'Could not start checkout' }), { status: 500, headers: corsHeaders })
    }

    if (droppedTitles.length > 0) extraResponseFields = { dropped: droppedTitles }
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

  return new Response(JSON.stringify({ authorization_url: data.data.authorization_url, ...extraResponseFields }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
})