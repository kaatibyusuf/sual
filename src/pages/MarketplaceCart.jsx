import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import './MarketplaceCart.css'

function formatPrice(kobo, currency) {
  const major = kobo / 100
  const symbol = currency === 'NGN' ? '₦' : currency + ' '
  return `${symbol}${major.toLocaleString()}`
}

export default function MarketplaceCart({ user }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [removingId, setRemovingId] = useState(null)
  const [checkingOut, setCheckingOut] = useState(false)
  const [checkoutError, setCheckoutError] = useState(null)

  const load = async () => {
    if (!user) return
    setLoading(true)
    setError(null)
    try {
      const { data, error } = await supabase
        .from('marketplace_cart_items')
        .select('id, course_id, marketplace_courses(id, title, thumbnail_url, price_kobo, currency, status)')
        .eq('user_id', user.id)
        .order('added_at', { ascending: false })
      if (error) throw error
      setItems(data || [])
    } catch (err) {
      console.error('Failed to load cart:', err)
      setError('Could not load your cart right now.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const removeItem = async (itemId) => {
    setRemovingId(itemId)
    try {
      await supabase.from('marketplace_cart_items').delete().eq('id', itemId)
      setItems(prev => prev.filter(i => i.id !== itemId))
    } catch (err) {
      console.error('Failed to remove item:', err)
    } finally {
      setRemovingId(null)
    }
  }

  const checkout = async () => {
    setCheckingOut(true)
    setCheckoutError(null)
    try {
      const { data, error } = await supabase.functions.invoke('initialize-payment', { body: { product: 'marketplace' } })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      if (data.dropped && data.dropped.length > 0) {
        // Still proceed with whatever is left — the checkout function
        // already dropped these server-side. Surfacing it here so the
        // person understands why the total might be lower than expected.
        console.warn('Some cart items were dropped before checkout:', data.dropped)
      }
      window.location.href = data.authorization_url
    } catch (err) {
      console.error('Checkout failed:', err)
      setCheckoutError(err.message)
      setCheckingOut(false)
    }
  }

  const validItems = items.filter(i => i.marketplace_courses?.status === 'published')
  const total = validItems.reduce((sum, i) => sum + i.marketplace_courses.price_kobo, 0)
  const currency = validItems[0]?.marketplace_courses?.currency || 'NGN'

  if (!user) return <div className="page-content"><p style={{ color: '#8a9ab0' }}>Sign in to view your cart.</p></div>

  return (
    <div className="page-content marketplace-cart-page">
      <h1 className="page-title">Your Cart</h1>

      {loading ? (
        <p style={{ color: '#8a9ab0' }}>Loading…</p>
      ) : error ? (
        <p style={{ color: '#c0392b' }}>{error}</p>
      ) : items.length === 0 ? (
        <div className="marketplace-cart-empty card">
          <p>Your cart is empty.</p>
          <Link to="/marketplace" className="btn btn-primary" style={{ marginTop: 12 }}>Browse Courses</Link>
        </div>
      ) : (
        <div className="marketplace-cart-layout">
          <div className="marketplace-cart-items">
            {items.map(item => {
              const course = item.marketplace_courses
              const unavailable = !course || course.status !== 'published'
              return (
                <div key={item.id} className="marketplace-cart-item">
                  {course?.thumbnail_url && <img src={course.thumbnail_url} alt={course.title} className="marketplace-cart-item-thumb" />}
                  <div className="marketplace-cart-item-body">
                    <p className="marketplace-cart-item-title">{course?.title || 'This course is no longer available'}</p>
                    {unavailable && <p className="marketplace-cart-item-warning">No longer available — will be removed at checkout.</p>}
                    {!unavailable && <p className="marketplace-cart-item-price">{formatPrice(course.price_kobo, course.currency)}</p>}
                  </div>
                  <button className="btn btn-ghost" onClick={() => removeItem(item.id)} disabled={removingId === item.id}>
                    {removingId === item.id ? '…' : 'Remove'}
                  </button>
                </div>
              )
            })}
          </div>

          <div className="marketplace-cart-summary card">
            <p className="marketplace-cart-summary-title">Order Summary</p>
            <div className="marketplace-cart-summary-row">
              <span>Total</span>
              <span className="marketplace-cart-summary-total">{formatPrice(total, currency)}</span>
            </div>
            {checkoutError && <div className="admin-error" style={{ marginBottom: 12 }}>{checkoutError}</div>}
            <button className="btn btn-primary marketplace-cart-checkout-btn" onClick={checkout} disabled={checkingOut || validItems.length === 0}>
              {checkingOut ? 'Redirecting to payment…' : 'Checkout with Paystack'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}