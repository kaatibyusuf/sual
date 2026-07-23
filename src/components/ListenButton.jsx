// src/components/ListenButton.jsx
//
// Reads a block of text aloud using the browser's built-in speech
// synthesis. Free, works offline, no API costs. Best suited to
// English commentary and explanatory text — see the honest caveat
// below about Arabic text specifically.

import React, { useState, useEffect } from 'react'

export default function ListenButton({ text, label = 'Listen' }) {
  const [speaking, setSpeaking] = useState(false)
  const [supported, setSupported] = useState(true)

  useEffect(() => {
    setSupported(typeof window !== 'undefined' && 'speechSynthesis' in window)
  }, [])

  const toggle = () => {
    if (!supported) return

    if (speaking) {
      window.speechSynthesis.cancel()
      setSpeaking(false)
      return
    }

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.95
    utterance.onend = () => setSpeaking(false)
    utterance.onerror = () => setSpeaking(false)

    window.speechSynthesis.cancel() // stop anything already playing first
    window.speechSynthesis.speak(utterance)
    setSpeaking(true)
  }

  if (!supported) return null

  return (
    <button
      onClick={toggle}
      aria-pressed={speaking}
      aria-label={speaking ? 'Stop reading aloud' : `${label} — read this aloud`}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: speaking ? '#094570' : '#f0f8ff',
        color: speaking ? '#fff' : '#094570',
        border: '1px solid #dceafb', borderRadius: 999,
        padding: '8px 16px', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer',
      }}
    >
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {speaking
          ? <><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></>
          : <><polygon points="5 3 19 12 5 21 5 3" /></>}
      </svg>
      {speaking ? 'Stop' : label}
    </button>
  )
}