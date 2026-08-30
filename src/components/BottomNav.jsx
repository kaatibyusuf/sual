import React, { useState, useRef, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './BottomNav.css'

const ICONS = {
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
    </svg>
  ),
  quiz: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  dashboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),
  profile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  ),
  qiwaamah: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
    </svg>
  ),
  menu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  ),
  disciplines: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  flashcards: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="7" width="14" height="10" rx="2" transform="rotate(-6 12 12)" />
      <rect x="6" y="8" width="14" height="10" rx="2" />
    </svg>
  ),
  stories: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4h9a3 3 0 0 1 3 3v13H8a2 2 0 0 1-2-2V4z" />
      <path d="M6 4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2" />
      <line x1="9" y1="9" x2="14" y2="9" />
      <line x1="9" y1="13" x2="14" y2="13" />
    </svg>
  ),
  duas: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21c-3-2.5-8-6-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5-5 8.5-8 11z" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="16" y1="3" x2="16" y2="7" />
    </svg>
  ),
  tajweed: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z" />
      <line x1="8" y1="8" x2="16" y2="8" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  ),
  prayerTimes: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21v-8a8 8 0 0 1 16 0v8" />
      <line x1="2" y1="21" x2="22" y2="21" />
      <line x1="12" y1="3" x2="12" y2="7" />
      <line x1="8" y1="21" x2="8" y2="15" />
      <line x1="16" y1="21" x2="16" y2="15" />
    </svg>
  ),
  womensFiqh: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.5c3.5 5 7 9 7 13a7 7 0 0 1-14 0c0-4 3.5-8 7-13z" />
    </svg>
  ),
  spaces: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="9" r="5" />
      <circle cx="15" cy="15" r="5" />
    </svg>
  ),
  hifdh: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a4.5 4.5 0 0 0-4.5 4.5c0 1.2.5 2.3 1.2 3.1A4.5 4.5 0 0 0 7.5 14a4.5 4.5 0 0 0 9 0 4.5 4.5 0 0 0-1.2-3.4c.7-.8 1.2-1.9 1.2-3.1A4.5 4.5 0 0 0 12 3z" />
      <line x1="12" y1="18.5" x2="12" y2="21" />
    </svg>
  ),
  journey: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20c3-1 3.5-3 5-6s2.5-8 5-8 2 5 4.5 5 3-1.5 3.5-3" />
      <circle cx="4" cy="20" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="19" cy="8" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  ),
  rewards: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v8" />
      <path d="M9 10.3c0-1 1.2-1.6 3-1.6s3 .8 3 2-1.2 1.5-3 1.5-3 .7-3 1.9 1.3 1.9 3 1.9 3-.5 3-1.5" />
    </svg>
  ),
    newMuslim: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 14.6 9 22 9.3 16 14 18 21.5 12 17.3 6 21.5 8 14 2 9.3 9.4 9" />
    </svg>
  ),
    arabicDictionary: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6c-2-1.5-5-2-8-1v13c3-1 6-.5 8 1 2-1.5 5-2 8-1V5c-3-1-6-.5-8 1z" />
      <line x1="12" y1="6" x2="12" y2="19" />
    </svg>
  ),
    adab: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 2 8l10 5 10-5-10-5z" />
      <path d="M6 10.5V16c0 1.5 2.5 3 6 3s6-1.5 6-3v-5.5" />
      <path d="M22 8v6" />
    </svg>
  ),
}

// The four always-visible tabs.
const PRIMARY_ITEMS = [
  { to: '/', icon: 'home', label: 'Home', end: true },
  { to: '/quiz', icon: 'quiz', label: 'Quiz' },
  { to: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
  { to: '/profile', icon: 'profile', label: 'Profile' },
]

// Everything else, in the More sheet.
const MORE_ITEMS = [
  { to: '/disciplines', icon: 'disciplines', label: 'Disciplines' },
  { to: '/flashcards', icon: 'flashcards', label: 'Flashcards' },
  { to: '/stories', icon: 'stories', label: 'Stories' },
  { to: '/duas', icon: 'duas', label: 'Duas' },
  { to: '/calendar', icon: 'calendar', label: 'Calendar' },
  { to: '/tajweed', icon: 'tajweed', label: 'Tajweed' },
  { to: '/prayer-times', icon: 'prayerTimes', label: 'Prayer Times' },
  { to: '/womens-fiqh', icon: 'womensFiqh', label: "Women's Fiqh" },
  { to: '/qiwaamah', icon: 'qiwaamah', label: 'Qiwaamah' },
  { to: '/spaces', icon: 'spaces', label: 'Spaces' },
  { to: '/hifdh', icon: 'hifdh', label: 'Hifdh' },
  { to: '/journey', icon: 'journey', label: 'Journey' },
  { to: '/rewards', icon: 'rewards', label: 'Rewards' },
  { to: '/zakaat', icon: 'zakaat', label: 'Everything Zakaat' },
  { to: '/new-muslim', icon: 'newMuslim', label: 'New Muslim Path' },
  { to: '/arabic-dictionary', icon: 'arabicDictionary', label: 'Arabic Dictionary' },
  { to: '/adab', icon: 'adab', label: 'Adab Class' },
]

export default function BottomNav() {
  const [moreOpen, setMoreOpen] = useState(false)
  const navigate = useNavigate()
  const firstItemRef = useRef(null)

  const goTo = (path) => {
    setMoreOpen(false)
    navigate(path)
  }

  // Accessibility: move focus into the sheet the instant it opens,
  // and let Escape close it — without this, a keyboard or screen-
  // reader user who opens "More" has no signal a new panel appeared,
  // and no quick way back out of it.
  useEffect(() => {
    if (moreOpen && firstItemRef.current) {
      firstItemRef.current.focus()
    }
  }, [moreOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && moreOpen) setMoreOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [moreOpen])

  return (
    <>
      {moreOpen && (
        <div className="bottom-nav-overlay" onClick={() => setMoreOpen(false)} role="presentation">
          <div
            className="bottom-nav-sheet"
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="more-sheet-title"
          >
            <div className="bottom-nav-sheet-handle" aria-hidden="true" />
            <p className="bottom-nav-sheet-title" id="more-sheet-title">More</p>
            <div className="bottom-nav-sheet-grid">
              {MORE_ITEMS.map((item, i) => (
                <button
                  key={item.label}
                  ref={i === 0 ? firstItemRef : null}
                  className="bottom-nav-sheet-item"
                  onClick={() => goTo(item.to)}
                >
                  <span className="bottom-nav-sheet-icon" aria-hidden="true">{ICONS[item.icon]}</span>
                  <span className="bottom-nav-sheet-label">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      <nav className="bottom-nav" aria-label="Primary">
        {PRIMARY_ITEMS.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `bottom-nav-card${isActive ? ' bottom-nav-card--active' : ''}`
            }
          >
            <span className="bottom-nav-icon" aria-hidden="true">{ICONS[item.icon]}</span>
            <span className="bottom-nav-label">{item.label}</span>
          </NavLink>
        ))}
        <button
          className={`bottom-nav-card ${moreOpen ? 'bottom-nav-card--active' : ''}`}
          onClick={() => setMoreOpen(true)}
          aria-expanded={moreOpen}
          aria-controls="more-sheet-title"
          aria-label="More"
        >
          <span className="bottom-nav-icon" aria-hidden="true">{ICONS.menu}</span>
          <span className="bottom-nav-label">More</span>
        </button>
      </nav>
    </>
  )
}