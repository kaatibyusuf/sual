import React, { useEffect, useState } from 'react'
import './MilestoneCelebration.css'

const STREAK_MILESTONES = [3, 7, 14, 30, 60, 100, 200, 365]
const STORAGE_PREFIX = 'sual-milestone-'

export function checkStreakMilestone(streak) {
  if (!STREAK_MILESTONES.includes(streak)) return null
  const key = `${STORAGE_PREFIX}streak-${streak}`
  if (localStorage.getItem(key)) return null
  localStorage.setItem(key, 'true')
  return { type: 'streak', value: streak }
}

export function checkPerfectScore(percentage) {
  if (percentage !== 100) return null
  return { type: 'perfect', value: 100 }
}

const COPY = {
  streak: (v) => ({ title: `${v}-Day Streak!`, sub: 'Consistency like this is exactly how real growth happens.' }),
  perfect: () => ({ title: 'Perfect Score!', sub: 'Every single answer, right. Excellent work.' }),
}

export default function MilestoneCelebration({ milestone, onDismiss }) {
  const [closing, setClosing] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => { setClosing(true); setTimeout(onDismiss, 400) }, 3200)
    return () => clearTimeout(t)
  }, [onDismiss])

  if (!milestone) return null
  const copy = COPY[milestone.type](milestone.value)
  const colors = ['#85CCFF', '#c8952f', '#5DCAA5', '#F0997B', '#AFA9EC']

  return (
    <div className={`mc-overlay ${closing ? 'mc-overlay--closing' : ''}`} onClick={() => { setClosing(true); setTimeout(onDismiss, 300) }}>
      <div className="mc-confetti" aria-hidden="true">
        {Array.from({ length: 36 }).map((_, i) => (
          <span
            key={i}
            className="mc-piece"
            style={{
              left: `${Math.random() * 100}%`,
              background: colors[i % colors.length],
              animationDelay: `${Math.random() * 0.4}s`,
              animationDuration: `${1.8 + Math.random() * 1.2}s`,
            }}
          />
        ))}
      </div>
      <div className="mc-card" onClick={e => e.stopPropagation()}>
        <span className="mc-icon">🎉</span>
        <p className="mc-title">{copy.title}</p>
        <p className="mc-sub">{copy.sub}</p>
      </div>
    </div>
  )
}