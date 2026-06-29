// src/components/Badges.jsx

import React, { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase.js'
import { BADGES, calculateEarnedBadges, getNewlyEarned } from '../lib/badges.js'
import './Badges.css'

// ── Badge Notification Toast ─────────────────────────────────
export function BadgeToast({ badge, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 4000)
    return () => clearTimeout(t)
  }, [onClose])

  if (!badge) return null

  return (
    <div className="badge-toast">
      <div className="badge-toast-icon">{badge.icon}</div>
      <div className="badge-toast-text">
        <p className="badge-toast-title">Badge Unlocked!</p>
        <p className="badge-toast-name">{badge.name}</p>
        <p className="badge-toast-desc">{badge.description}</p>
      </div>
      <button className="badge-toast-close" onClick={onClose}>✕</button>
    </div>
  )
}

// ── Single Badge Card ────────────────────────────────────────
export function BadgeCard({ badge, earned }) {
  const [showTip, setShowTip] = useState(false)

  return (
    <div
      className={`badge-card ${earned ? 'badge-card--earned' : 'badge-card--locked'}`}
      onMouseEnter={() => setShowTip(true)}
      onMouseLeave={() => setShowTip(false)}
      onTouchStart={() => setShowTip(v => !v)}
    >
      <div className="badge-card-icon">{earned ? badge.icon : '🔒'}</div>
      <p className="badge-card-name">{badge.name}</p>
      {showTip && (
        <div className="badge-tooltip">
          <p className="badge-tooltip-text">{badge.description}</p>
          {!earned && <p className="badge-tooltip-locked">Not yet earned</p>}
        </div>
      )}
    </div>
  )
}

// ── Full Badge Section (used in Profile) ─────────────────────
export function BadgesSection({ user }) {
  const [earnedIds, setEarnedIds] = useState(new Set())
  const [newBadge, setNewBadge] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return
    loadBadges()
  }, [user])

  const loadBadges = async () => {
    try {
      const [
        { data: history },
        { data: levelData },
        { data: bookmarks },
        { data: subscription },
      ] = await Promise.all([
        supabase.from('quiz_history').select('*').eq('user_id', user.id),
        supabase.from('user_levels').select('*').eq('user_id', user.id).single(),
        supabase.from('bookmarks').select('id').eq('user_id', user.id),
        supabase.from('subscriptions').select('*').eq('user_id', user.id).single(),
      ])

      const earned = calculateEarnedBadges({
        quizHistory: history || [],
        userLevel: levelData,
        bookmarks: bookmarks || [],
        subscription,
      })
    // Save earned badge IDs to profiles table
await supabase
  .from('profiles')
  .upsert({
    id: user.id,
    badge_ids: [...earned],
    updated_at: new Date().toISOString(),
  }, { onConflict: 'id' })
  
      // Check for newly earned badges vs what was stored
      const stored = JSON.parse(localStorage.getItem(`sual_badges_${user.id}`) || '[]')
      const newly = getNewlyEarned(stored, earned)

      if (newly.length > 0) {
        const badge = BADGES.find(b => b.id === newly[0])
        setNewBadge(badge || null)
        localStorage.setItem(`sual_badges_${user.id}`, JSON.stringify([...earned]))
      }

      setEarnedIds(earned)
    } catch (err) {
      console.error('Badge load error:', err)
    } finally {
      setLoading(false)
    }
  }

  const earnedCount = earnedIds.size

  return (
    <>
      {/* Toast notification */}
      {newBadge && (
        <BadgeToast badge={newBadge} onClose={() => setNewBadge(null)} />
      )}

      <div className="badges-section card">
        <div className="badges-header">
          <h3 className="badges-title">Achievements</h3>
          <span className="badges-count">{earnedCount} / {BADGES.length}</span>
        </div>

        {loading ? (
          <p className="badges-loading">Loading achievements...</p>
        ) : (
          <div className="badges-grid">
            {BADGES.map(badge => (
              <BadgeCard
                key={badge.id}
                badge={badge}
                earned={earnedIds.has(badge.id)}
              />
            ))}
          </div>
        )}

        {!loading && earnedCount === 0 && (
          <p className="badges-empty">Take your first quiz to start earning badges.</p>
        )}
      </div>
    </>
  )
}

// ── Mini badge strip (used in Spaces posts) ──────────────────
export function BadgeStrip({ earnedIds = [] }) {
  const earned = BADGES.filter(b => earnedIds.includes(b.id))
  if (earned.length === 0) return null

  // Show top 3 only
  return (
    <div className="badge-strip">
      {earned.slice(0, 3).map(b => (
        <span key={b.id} className="badge-strip-item" title={b.name}>
          {b.icon}
        </span>
      ))}
      {earned.length > 3 && (
        <span className="badge-strip-more">+{earned.length - 3}</span>
      )}
    </div>
  )
}