// supabase/functions/marketplace-checkout/index.ts
//
// Turns a signed-in user's server-side cart (marketplace_cart_items)
// into a pending order and a Paystack Initialize Transaction call.
// Deliberately mirrors the fix already made for Spaces activation:
// call Paystack's Initialize Transaction API server-side with an
// explicit reference, rather than linking to a static hosted
// Paystack Payment Page — that's the exact bug that silently broke
// Spaces activation (the static page's &ref= param wasn't honored,
// so the webhook's parseReference() never matched).
//
// Reference format: "mkt_cart_<uuid>_<epoch ms>" — matches the exact
// <prefix>_<plan>_<uuid>_<epoch ms> convention every other product
// uses in paystack-webhook's parseReference(), with "cart" standing
// in for a plan name since a marketplace checkout has no
// monthly/annual/unit concept — the actual items and pricing live in
// marketplace_orders/marketplace_order_items, looked up by this exact
// reference string, not decoded from it.
//
// Flow:
//   1. Re-read the caller's own cart server-side — never trust a
//      client-supplied list of course IDs or prices.
//   2. Drop any cart item that's unpublished or already owned
//      (silently, and tell the caller which were dropped) rather
//      than failing the whole checkout over one stale item.
//   3. Create the order + order_items in 'pending' status.
//   4. Call Paystack Initialize Transaction, return the
//      authorization_url for the frontend to redirect to.
//
// Deploy:  supabase functions deploy marketplace-checkout
// Uses PAYSTACK_SECRET_KEY (already set for initialize-payment) and
// SUAL_APP_URL (already set for other functions).

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const PAYSTACK_SECRET_KEY = Deno.env.get('PAYSTACK_SECRET_KEY')!
const SUAL_APP_URL = Deno.env.get('SUAL_APP_URL') ?? 'https://app.usesual.com'

const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, content-type, x-client-info, apikey',
  }
}

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
  })
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders() })
  if (req.method !== 'POST') return jsonResponse({ error: 'Method not allowed' }, 405)

  const authHeader = req.headers.get('Authorization')
  if (!authHeader) return jsonResponse({ error: 'Missing authorization' }, 401)

  const callerClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: { headers: { Authorization: authHeader } },
  })
  const { data: callerData, error: callerError } = await callerClient.auth.getUser()
  if (callerError || !callerData?.user) {
    return jsonResponse({ error: 'Could not verify caller' }, 401)
  }
  const user = callerData.user

  try {
    // ── 1. Re-read the cart server-side ────────────────────────
    const { data: cartItems, error: cartError } = await supabaseAdmin
      .from('marketplace_cart_items')
      .select('id, course_id, marketplace_courses(id, title, price_kobo, currency, status)')
      .eq('user_id', user.id)
    if (cartError) throw cartError

    if (!cartItems || cartItems.length === 0) {
      return jsonResponse({ error: 'Your cart is empty.' }, 400)
    }

    // ── 2. Drop unpublished or already-owned courses ───────────
    const { data: existingEnrollments } = await supabaseAdmin
      .from('marketplace_enrollments')
      .select('course_id')
      .eq('user_id', user.id)
    const ownedCourseIds = new Set((existingEnrollments || []).map(e => e.course_id))

    const droppedTitles: string[] = []
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

    // Clean up dropped items from the cart regardless of checkout
    // outcome — no point leaving a permanently-unpurchasable item
    // sitting in the cart.
    const droppedCartItemIds = cartItems.filter(i => !validItems.includes(i)).map(i => i.id)
    if (droppedCartItemIds.length > 0) {
      await supabaseAdmin.from('marketplace_cart_items').delete().in('id', droppedCartItemIds)
    }

    if (validItems.length === 0) {
      return jsonResponse({ error: 'Nothing left to check out.', dropped: droppedTitles }, 400)
    }

    const currency = validItems[0].marketplace_courses.currency
    const totalKobo = validItems.reduce((sum, item) => sum + item.marketplace_courses.price_kobo, 0)

    // ── 3. Create the order + order_items (pending) ────────────
    // Full uuid + epoch ms, matching every other product's reference
    // shape exactly (see the header comment above).
    const reference = `mkt_cart_${user.id}_${Date.now()}`

    const { data: order, error: orderError } = await supabaseAdmin
      .from('marketplace_orders')
      .insert({
        user_id: user.id,
        paystack_reference: reference,
        total_kobo: totalKobo,
        currency,
        status: 'pending',
      })
      .select()
      .single()
    if (orderError) throw orderError

    const orderItemRows = validItems.map(item => ({
      order_id: order.id,
      course_id: item.marketplace_courses.id,
      price_kobo: item.marketplace_courses.price_kobo,
    }))
    const { error: orderItemsError } = await supabaseAdmin.from('marketplace_order_items').insert(orderItemRows)
    if (orderItemsError) throw orderItemsError

    // ── 4. Initialize the Paystack transaction ─────────────────
    const paystackRes = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
        amount: totalKobo,
        reference,
        currency,
        callback_url: `${SUAL_APP_URL}/marketplace/checkout-complete`,
        metadata: {
          user_id: user.id,
          order_id: order.id,
          course_titles: validItems.map(i => i.marketplace_courses.title),
        },
      }),
    })

    const paystackData = await paystackRes.json()
    if (!paystackRes.ok || !paystackData.status) {
      console.error('Paystack initialize failed:', paystackData)
      // Mark the order failed rather than leaving it pending forever
      // with no corresponding live transaction on Paystack's side.
      await supabaseAdmin.from('marketplace_orders').update({ status: 'failed' }).eq('id', order.id)
      return jsonResponse({ error: 'Could not start payment. Please try again.' }, 502)
    }

    return jsonResponse({
      ok: true,
      authorization_url: paystackData.data.authorization_url,
      reference,
      dropped: droppedTitles.length > 0 ? droppedTitles : undefined,
    })
  } catch (err) {
    console.error('marketplace-checkout error:', err)
    return jsonResponse({ error: err.message || 'Unknown error' }, 500)
  }
})