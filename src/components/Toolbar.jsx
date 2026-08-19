import React from 'react'
import './Toolbar.css'

// Font size now lives in Profile → Display settings, not here — the
// old toolbar packed four separate controls (A-/A/A+ plus the theme
// toggle) into one persistent bar that was mostly empty space next
// to the notification bell. This is now just the one thing that
// makes sense to reach from anywhere: light/dark.
export default function Toolbar({ darkMode, setDarkMode }) {
  return (
    <div className="toolbar">
      <button
        type="button"
        className={`theme-switch ${darkMode ? 'theme-switch--dark' : ''}`}
        onClick={() => setDarkMode(!darkMode)}
        role="switch"
        aria-checked={darkMode}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <span className="theme-switch-track">
          <span className="theme-switch-icon theme-switch-icon--sun" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <line x1="12" y1="2" x2="12" y2="4" />
              <line x1="12" y1="20" x2="12" y2="22" />
              <line x1="4.9" y1="4.9" x2="6.3" y2="6.3" />
              <line x1="17.7" y1="17.7" x2="19.1" y2="19.1" />
              <line x1="2" y1="12" x2="4" y2="12" />
              <line x1="20" y1="12" x2="22" y2="12" />
              <line x1="4.9" y1="19.1" x2="6.3" y2="17.7" />
              <line x1="17.7" y1="6.3" x2="19.1" y2="4.9" />
            </svg>
          </span>
          <span className="theme-switch-icon theme-switch-icon--moon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          </span>
          <span className="theme-switch-knob" />
        </span>
      </button>
    </div>
  )
}