import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStreakActivityDates, computeStreakFromDates, getActiveMonthsForYear } from '../lib/streakActivity.js'
import { generateStreakCard } from '../lib/shareCard.js'
import './StreakHistory.css'

const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const ICONS = {
  back: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  ),
  chevronLeft: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  ),
  chevronRight: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
  flame: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.5c3.5 5 7 9 7 13a7 7 0 0 1-14 0c0-4 3.5-8 7-13z" />
    </svg>
  ),
  share: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.6" y1="10.5" x2="15.4" y2="6.5" />
      <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
    </svg>
  ),
}

// The daily streak is the real, underlying metric (see Home.jsx and
// the app-open nudge) — this page is deliberately just a different
// VIEW of the same day-level data, not a second streak system. A
// month lights up here if it had at least one active day; the
// number itself never changes based on which page you're looking
// at it from.
export default function StreakHistory({ user }) {
  const navigate = useNavigate()
  const { activeDateStrings } = useStreakActivityDates(user)
  const { streak } = computeStreakFromDates(activeDateStrings)

  const currentYear = new Date().getFullYear()
  const [year, setYear] = useState(currentYear)
  const activeMonths = getActiveMonthsForYear(activeDateStrings, year)

  const [sharing, setSharing] = useState(false)
  const [shareError, setShareError] = useState(null)

  const handleShare = async () => {
    if (sharing || streak <= 0) return
    setSharing(true)
    setShareError(null)
    try {
      const blob = await generateStreakCard(streak)
      const file = new File([blob], 'sual-streak.png', { type: 'image/png' })
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({ files: [file], title: 'My Sual Streak', text: `${streak}-day streak on Sual 🔥` })
        } catch (err) {
          if (err?.name !== 'AbortError') throw err
        }
      } else {
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'sual-streak.png'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      }
    } catch (err) {
      console.error('Failed to share streak card:', err)
      setShareError("Couldn't create your streak image. Please try again.")
    } finally {
      setSharing(false)
    }
  }

  return (
    <div className="page-content sh-page">
      <div className="sh-top-row">
        <button className="sh-back-btn" onClick={() => navigate(-1)} aria-label="Back">
          {ICONS.back}
        </button>
        <p className="sh-title">Streak History</p>
        <span style={{ width: 24 }} />
      </div>

      <div className="sh-headline">
        <span className="sh-headline-icon">{ICONS.flame}</span>
        <p className="sh-headline-text">
          {streak > 0 ? (
            <>
              <span className="sh-headline-number">{streak}-day</span><br />
              <span className="sh-headline-word">streak!</span>
            </>
          ) : (
            <span className="sh-headline-word">No streak yet</span>
          )}
        </p>
      </div>

      <div className="sh-year-row">
        <button className="sh-year-nav" onClick={() => setYear(y => y - 1)} aria-label="Previous year">
          {ICONS.chevronLeft}
        </button>
        <p className="sh-year-label">{year}</p>
        <button
          className="sh-year-nav"
          onClick={() => setYear(y => y + 1)}
          disabled={year >= currentYear}
          aria-label="Next year"
          style={{ visibility: year >= currentYear ? 'hidden' : 'visible' }}
        >
          {ICONS.chevronRight}
        </button>
      </div>

      <div className="sh-month-grid">
        {MONTH_LABELS.map((label, i) => {
          const isFuture = year === currentYear && i > new Date().getMonth()
          const active = activeMonths[i]
          return (
            <div key={label} className="sh-month-cell">
              <span className={`sh-month-dot ${active ? 'sh-month-dot--active' : ''} ${isFuture ? 'sh-month-dot--future' : ''}`}>
                {active ? ICONS.flame : null}
              </span>
              <span className="sh-month-label">{label}</span>
            </div>
          )
        })}
      </div>

      <p className="sh-tip">
        {streak > 0
          ? "You're doing great! Keep learning today to extend your streak."
          : 'Take a quiz, read a story, or log any activity today to start a new streak.'}
      </p>

      {shareError && <p className="sh-share-error">{shareError}</p>}

      {streak > 0 && (
        <button className="sh-share-btn" onClick={handleShare} disabled={sharing}>
          <span className="sh-share-icon">{ICONS.share}</span>
          {sharing ? 'Preparing…' : 'Share'}
        </button>
      )}
    </div>
  )
}