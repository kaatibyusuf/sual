import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import './SpacesCTA.css'

// Reusable banner nudging free-feature users (Women's Fiqh, Qiwaamah)
// toward Spaces. Checks subscription + referral access the same way
// Spaces.jsx itself does, and renders nothing for anyone who's
// already a subscriber — this is purely an acquisition nudge, not
// something existing paying members need to see repeatedly.
export default function SpacesCTA({ user, variant = 'default' }) {
  const navigate = useNavigate()
  const [isPaid, setIsPaid] = useState(null) // null = still checking
  const [dismissed, setDismissed] = useState(() => {
    return sessionStorage.getItem('sual-spaces-cta-dismissed') === 'true'
  })

  useEffect(() => {
    if (!user) { setIsPaid(false); return }

    let cancelled = false
    const check = async () => {
      try {
        const [{ data: sub }, { data: referral }] = await Promise.all([
          supabase.from('subscriptions').select('status, expires_at').eq('user_id', user.id).maybeSingle(),
          supabase
            .from('referral_free_access')
            .select('expires_at')
            .eq('user_id', user.id)
            .gt('expires_at', new Date().toISOString())
            .limit(1)
            .maybeSingle(),
        ])
        if (cancelled) return
        const subActive = sub?.status === 'active' && sub?.expires_at && new Date(sub.expires_at) > new Date()
        setIsPaid(subActive || !!referral)
      } catch {
        if (!cancelled) setIsPaid(false)
      }
    }
    check()
    return () => { cancelled = true }
  }, [user])

  const dismiss = () => {
    setDismissed(true)
    sessionStorage.setItem('sual-spaces-cta-dismissed', 'true')
  }

  if (isPaid !== false || dismissed) return null

  const copy = COPY[variant] || COPY.default

  return (
    <div className="scta-banner card">
      <button className="scta-dismiss" onClick={dismiss} aria-label="Dismiss">✕</button>
      <p className="scta-title">{copy.title}</p>
      <p className="scta-text">{copy.text}</p>
      <div className="scta-price-row">
        <span className="scta-price">₦2,500<span className="scta-price-period">/month</span></span>
        <button className="scta-btn" onClick={() => navigate('/spaces')}>
          Explore Spaces →
        </button>
      </div>
    </div>
  )
}

const COPY = {
  default: {
    title: 'This content is free — Spaces goes further',
    text: 'Unlock the full 42 Hadith, Umdatul-Ahkam, Sahih Bukhari, live scholar answers, accountability partners, and a real community of students.',
  },
  reflectStreak: {
    title: "You've been consistent. Keep the momentum",
    text: 'Spaces has Accountability Partners built for exactly this. Pair up with someone else working on the same thing, and check in together.',
  },
  hadith: {
    title: 'Want to go deeper into the hadith sciences?',
    text: 'Spaces members get the full 42 Hadith, Umdatul-Ahkam, and Sahih Bukhari collections, each with a 20-question test right after every hadith.',
  },
}