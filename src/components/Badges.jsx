// src/components/Badges.jsx
import { BADGES, calculateEarnedBadges, getNewlyEarned } from '../lib/badges.js'
import React, { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase.js'
import { generateBadgeCard } from '../lib/shareCard.js'
import './Badges.css'

// Small share icon, same path used in Home.jsx's streak Share
// button, so the affordance reads as the same action wherever it
// shows up in the app.
function ShareIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.6" y1="10.5" x2="15.4" y2="6.5" />
      <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
    </svg>
  )
}

// Generates a badge card and hands it to the OS share sheet if the
// device supports sharing files (Web Share API Level 2 — modern
// mobile Chrome/Safari, including the Android TWA wrapper), falling
// back to a plain download otherwise. Shared by both the unlock
// toast and the badge grid's per-card share affordance below, so the
// two moments ("just unlocked" and "revisiting an old badge") behave
// identically rather than drifting into two slightly different
// implementations.
async function shareBadge(badge) {
  const blob = await generateBadgeCard(badge)
  const file = new File([blob], 'sual-badge.png', { type: 'image/png' })

  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        files: [file],
        title: `${badge.name} — Sual`,
        text: `I just unlocked "${badge.name}" on Sual! ${badge.icon || ''}`,
      })
    } catch (err) {
      // AbortError just means the user closed the share sheet — not
      // a real failure, nothing to surface for that case.
      if (err?.name !== 'AbortError') throw err
    }
  } else {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'sual-badge.png'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }
}

// ── Badge Notification Toast ─────────────────────────────────
export function BadgeToast({ badge, onClose }) {
  const [sharing, setSharing] = useState(false)

  useEffect(() => {
    const t = setTimeout(onClose, 4000)
    return () => clearTimeout(t)
  }, [onClose])

  if (!badge) return null

  const handleShare = async (e) => {
    e.stopPropagation() // don't let the click bubble into anything that might dismiss the toast early
    if (sharing) return
    setSharing(true)
    try {
      await shareBadge(badge)
    } catch (err) {
      console.error('Failed to share badge:', err)
    } finally {
      setSharing(false)
    }
  }

  return (
    <div className="badge-toast">
      <div className="badge-toast-icon">{badge.icon}</div>
      <div className="badge-toast-text">
        <p className="badge-toast-title">Badge Unlocked!</p>
        <p className="badge-toast-name">{badge.name}</p>
        <p className="badge-toast-desc">{badge.description}</p>
        <button
          className="badge-toast-share"
          onClick={handleShare}
          disabled={sharing}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            marginTop: 8,
            padding: '6px 12px',
            borderRadius: 999,
            border: '1.5px solid rgba(255,255,255,0.4)',
            background: 'rgba(255,255,255,0.1)',
            color: 'inherit',
            fontWeight: 700,
            fontSize: '0.78rem',
            cursor: sharing ? 'default' : 'pointer',
            opacity: sharing ? 0.6 : 1,
          }}
        >
          <ShareIcon /> {sharing ? 'Preparing…' : 'Share'}
        </button>
      </div>
      <button className="badge-toast-close" onClick={onClose}>✕</button>
    </div>
  )
}

// ── Single Badge Card ────────────────────────────────────────
export function BadgeCard({ badge, earned }) {
  const [showTip, setShowTip] = useState(false)
  const [sharing, setSharing] = useState(false)

  const handleShare = async (e) => {
    e.stopPropagation() // don't let this toggle showTip via the card's own touch/hover handlers
    if (sharing) return
    setSharing(true)
    try {
      await shareBadge(badge)
    } catch (err) {
      console.error('Failed to share badge:', err)
    } finally {
      setSharing(false)
    }
  }

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
          {earned && (
            <button
              onClick={handleShare}
              disabled={sharing}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                marginTop: 6,
                padding: '4px 10px',
                borderRadius: 999,
                border: '1.5px solid #85CCFF',
                background: 'rgba(133,204,255,0.1)',
                color: '#094570',
                fontWeight: 700,
                fontSize: '0.72rem',
                cursor: sharing ? 'default' : 'pointer',
                opacity: sharing ? 0.6 : 1,
              }}
            >
              <ShareIcon /> {sharing ? 'Preparing…' : 'Share'}
            </button>
          )}
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