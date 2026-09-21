import React, { useEffect, useState, useRef } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import './MarketplaceCheckoutComplete.css'

// Paystack appends ?reference=<the reference we passed to Initialize
// Transaction> to callback_url on return. The webhook that actually
// marks the order paid and creates enrollments runs asynchronously
// and independently of this redirect — usually within a couple of
// seconds, but not guaranteed instant — so this page polls the order
// row rather than assuming it's already 'paid' the moment the person
// lands back here.
const POLL_INTERVAL_MS = 2000
const MAX_POLL_ATTEMPTS = 15 // 30 seconds total before giving up and asking them to check "My Courses"

export default function MarketplaceCheckoutComplete() {
  const [searchParams] = useSearchParams()
  const reference = searchParams.get('reference') || searchParams.get('trxref')

  const [status, setStatus] = useState('polling') // polling | paid | failed | timeout | error
  const attemptsRef = useRef(0)

  useEffect(() => {
    if (!reference) {
      setStatus('error')
      return
    }
    let cancelled = false

    const poll = async () => {
      const { data, error } = await supabase
        .from('marketplace_orders')
        .select('status')
        .eq('paystack_reference', reference)
        .maybeSingle()

      if (cancelled) return

      if (error || !data) {
        setStatus('error')
        return
      }
      if (data.status === 'paid') {
        setStatus('paid')
        return
      }
      if (data.status === 'failed') {
        setStatus('failed')
        return
      }

      attemptsRef.current += 1
      if (attemptsRef.current >= MAX_POLL_ATTEMPTS) {
        setStatus('timeout')
        return
      }
      setTimeout(poll, POLL_INTERVAL_MS)
    }

    poll()
    return () => { cancelled = true }
  }, [reference])

  return (
    <div className="page-content marketplace-checkout-complete-page">
      <div className="marketplace-checkout-complete-card card">
        {status === 'polling' && (
          <>
            <div className="marketplace-checkout-spinner" />
            <p className="marketplace-checkout-complete-title">Confirming your payment…</p>
            <p className="marketplace-checkout-complete-sub">This usually takes a few seconds.</p>
          </>
        )}
        {status === 'paid' && (
          <>
            <p className="marketplace-checkout-complete-icon">✓</p>
            <p className="marketplace-checkout-complete-title">Payment confirmed!</p>
            <p className="marketplace-checkout-complete-sub">You're enrolled — a receipt has been sent to your email.</p>
            <Link to="/marketplace/my-courses" className="btn btn-primary" style={{ marginTop: 16 }}>Go to My Courses</Link>
          </>
        )}
        {status === 'failed' && (
          <>
            <p className="marketplace-checkout-complete-icon marketplace-checkout-complete-icon--error">✕</p>
            <p className="marketplace-checkout-complete-title">Payment didn't go through</p>
            <p className="marketplace-checkout-complete-sub">Nothing was charged. You can try again from your cart.</p>
            <Link to="/marketplace/cart" className="btn btn-primary" style={{ marginTop: 16 }}>Back to Cart</Link>
          </>
        )}
        {status === 'timeout' && (
          <>
            <p className="marketplace-checkout-complete-title">Still processing…</p>
            <p className="marketplace-checkout-complete-sub">
              If Paystack confirmed your payment, this can take a little longer than usual to reflect.
              Check "My Courses" in a moment — if it's still not there, reach out and we'll sort it out.
            </p>
            <Link to="/marketplace/my-courses" className="btn btn-primary" style={{ marginTop: 16 }}>Check My Courses</Link>
          </>
        )}
        {status === 'error' && (
          <>
            <p className="marketplace-checkout-complete-title">Couldn't confirm this payment</p>
            <p className="marketplace-checkout-complete-sub">Check "My Courses" — if your purchase went through, it'll be there.</p>
            <Link to="/marketplace/my-courses" className="btn btn-primary" style={{ marginTop: 16 }}>Go to My Courses</Link>
          </>
        )}
      </div>
    </div>
  )
}