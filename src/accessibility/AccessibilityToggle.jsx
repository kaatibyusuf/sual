// src/accessibility/AccessibilityToggle.jsx
//
// A real <button> with aria-label and aria-pressed, so it's fully
// usable by a NATIVE screen reader even before the built-in reader is
// switched on — this is the entry point into the feature for someone
// who doesn't have TalkBack/VoiceOver already running.

import React from 'react'
import { useAccessibility } from './AccessibilityContext.jsx'
import './accessibility.css'

export default function AccessibilityToggle() {
  const { enabled, toggle } = useAccessibility()

  return (
    <button
      type="button"
      className={`a11y-toggle-btn ${enabled ? 'a11y-toggle-btn--on' : ''}`}
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={enabled ? 'Voice reader on. Tap to turn off.' : 'Voice reader off. Tap to turn on.'}
      data-a11y-label={enabled ? 'Voice reader, currently on' : 'Voice reader, currently off'}
      data-a11y-instant-toggle="true"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 5 6 9H2v6h4l5 4V5z" />
        {enabled ? (
          <path d="M19 5a9 9 0 0 1 0 14M15.5 8.5a4.5 4.5 0 0 1 0 7" />
        ) : (
          <line x1="23" y1="1" x2="1" y2="23" />
        )}
      </svg>
    </button>
  )
}