// src/accessibility/AccessibilityContext.jsx
//
// Central on/off switch + speech engine for the built-in voice
// reader. Two things live here on purpose:
//
// 1. speak() — the built-in reader (Web Speech API), used by
//    TouchExploreLayer for tap-to-hear, and by any page that wants
//    to announce something out loud (e.g. "new message from your
//    partner").
// 2. announce() — also updates a hidden aria-live region, so a
//    NATIVE screen reader (TalkBack/VoiceOver) running alongside the
//    built-in one hears the same announcements. This is the
//    "screen-reader compatibility underneath" half of the feature —
//    it works whether or not our own reader is switched on.

import React, { createContext, useContext, useCallback, useEffect, useRef, useState } from 'react'

const AccessibilityContext = createContext(null)

const STORAGE_KEY = 'sual-a11y-reader-enabled'

export function AccessibilityProvider({ children }) {
  const [enabled, setEnabled] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'true'
    } catch {
      return false
    }
  })
  const [liveMessage, setLiveMessage] = useState('')
  const liveResetTimer = useRef(null)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(enabled))
    } catch {
      // Storage can throw in private-browsing contexts — not worth
      // surfacing an error for a preference toggle.
    }
  }, [enabled])

  const speak = useCallback((text, { interrupt = true } = {}) => {
    if (!enabled || !text) return
    if (!('speechSynthesis' in window)) return
    if (interrupt) window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 1
    window.speechSynthesis.speak(utterance)
  }, [enabled])

  const announce = useCallback((text) => {
    if (!text) return
    // aria-live only fires on a text CHANGE, so clear first — this
    // lets two identical announcements in a row (e.g. two "new
    // message" texts) both get picked up by native screen readers.
    clearTimeout(liveResetTimer.current)
    setLiveMessage('')
    liveResetTimer.current = setTimeout(() => setLiveMessage(text), 30)
    speak(text, { interrupt: false })
  }, [speak])

  const toggle = useCallback(() => {
    setEnabled(prev => {
      const next = !prev
      // Speak the confirmation directly rather than through speak(),
      // since `enabled` state hasn't re-rendered yet at this point
      // and speak() gates on it.
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel()
        if (next) {
          window.speechSynthesis.speak(new SpeechSynthesisUtterance(
            'Voice reader on. Tap once to hear an item, tap twice to select it.'
          ))
        }
      }
      return next
    })
  }, [])

  return (
    <AccessibilityContext.Provider value={{ enabled, toggle, speak, announce }}>
      {children}
      {/* Native screen readers pick this up regardless of whether the
          built-in reader is on — kept in the DOM at all times. */}
      <div aria-live="polite" role="status" className="sr-only">{liveMessage}</div>
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext)
  if (!ctx) {
    throw new Error('useAccessibility() must be called within an AccessibilityProvider')
  }
  return ctx
}