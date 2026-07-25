// supabase/functions/initialize-payment/index.ts
//
// Replaces linking straight to a static Paystack Payment Page.
// Calls Paystack's own Initialize Transaction API server-side,
// which is the only flow that actually guarantees your custom
// reference is respected — a hosted Payment Page URL's query
// params are not a documented way to override the reference.

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const PAYSTACK_SECRET_KEY = Deno.env.get('PAYSTACK_SECRET_KEY')!
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!

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
  const callerClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: { headers: { Authorization: authHeader } },
  })
  const { data: callerData, error: callerError } = await callerClient.auth.getUser()
  if (callerError || !callerData?.user) {
    return new Response(JSON.stringify({ error: 'Could not verify caller' }), { status: 401, headers: corsHeaders() })
  }
  const user = callerData.user

  const { product, plan } = await req.json()
  // product: 'spaces' | 'bookquiz'; plan (bookquiz only): 'monthly' | 'annual'

  let reference, amount
  if (product === 'spaces') {
    reference = `sual_${user.id}_${Date.now()}`
    amount = 2500 * 100 // kobo
  } else if (product === 'bookquiz') {
    const p = plan === 'annual' ? 'annual' : 'monthly'
    reference = `bookquiz_${p}_${user.id}_${Date.now()}`
    amount = (p === 'annual' ? 20000 : 2000) * 100
  } else {
    return new Response(JSON.stringify({ error: 'Unknown product' }), { status: 400, headers: corsHeaders() })
  }

  try {
    const res = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
        amount,
        reference, // this is the part a static Payment Page URL could never actually guarantee
        callback_url: product === 'spaces'
          ? 'https://app.usesual.com/spaces?payment=success'
          : 'https://app.usesual.com/book-quiz?payment=success',
      }),
    })
    const body = await res.json()
    if (!res.ok || !body.status) {
      console.error('Paystack initialize failed:', body)
      return new Response(JSON.stringify({ error: body.message || 'Paystack initialization failed' }), { status: 500, headers: corsHeaders() })
    }
    return new Response(JSON.stringify({ ok: true, authorization_url: body.data.authorization_url }), {
      headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('Initialize payment error:', err)
    return new Response(JSON.stringify({ error: String(err) }), { status: 500, headers: corsHeaders() })
  }
})