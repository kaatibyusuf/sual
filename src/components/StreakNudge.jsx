import React from 'react'
import { Link } from 'react-router-dom'
import { useStreakActivityDates, computeStreakFromDates, hasActivityToday } from '../lib/streakActivity.js'
import './StreakNudge.css'

// Fires on every app open — not deduped per day like DailyReminder,
// and deliberately kept as a separate component rather than folded
// into it (per explicit request). It doesn't need a dismiss-forever
// flag: the gating condition is simply "today has no logged activity
// yet AND there's a live streak worth protecting." The moment the
// person does anything that counts, useStreakActivityDates' next
// fetch will make hasActivityToday true and this stops rendering on
// its own — no separate state to manage or accidentally leave stale.
//
// Only shows when streak > 0 on purpose: nudging a brand-new user
// with no streak yet to "not lose" something they haven't built
// would just read as naggy, every single time they open the app.
export default function StreakNudge({ user }) {
  const { activeDateStrings, loading } = useStreakActivityDates(user)
  const { streak } = computeStreakFromDates(activeDateStrings)

  if (!user || loading) return null
  if (streak <= 0) return null
  if (hasActivityToday(activeDateStrings)) return null

  return (
    <div className="sn-banner" role="status">
      <span className="sn-banner-flame" aria-hidden="true">🔥</span>
      <span className="sn-banner-text">
        Your <strong>{streak}-day streak</strong> is still alive. Do something today to keep it going.
      </span>
      <Link to="/quiz" className="sn-banner-cta">Continue</Link>
    </div>
  )
}