import React, { useState, useEffect } from 'react'
import './AddToHomeScreen.css'

const DISMISS_KEY = 'sual-a2hs-dismissed-at'
const DISMISS_DAYS = 14

function isStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches
    || window.navigator.standalone === true // legacy iOS Safari flag
}

function isIOS() {
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent)
    && !window.MSStream
}

function wasDismissedRecently() {
  const raw = localStorage.getItem(DISMISS_KEY)
  if (!raw) return false
  const dismissedAt = new Date(raw)
  const daysSince = (Date.now() - dismissedAt.getTime()) / (1000 * 60 * 60 * 24)
  return daysSince < DISMISS_DAYS
}

function ShareIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v13" />
      <path d="M7 8l5-5 5 5" />
      <rect x="4" y="12" width="16" height="9" rx="2" />
    </svg>
  )
}

export default function AddToHomeScreen() {
  const [platform, setPlatform] = useState(null) // 'ios' | 'android' | null
  const [dismissed, setDismissed] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [installing, setInstalling] = useState(false)

  useEffect(() => {
    if (isStandalone() || wasDismissedRecently()) return

    if (isIOS()) {
      setPlatform('ios')
      return
    }

    // Android/Chrome fires this if the PWA criteria are met — capture
    // it once, then trigger it ourselves from our own button rather
    // than letting the browser show its own unstyled mini-banner,
    // which is easy to miss or accidentally dismiss.
    const handler = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setPlatform('android')
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const dismiss = () => {
    localStorage.setItem(DISMISS_KEY, new Date().toISOString())
    setDismissed(true)
  }

  const installAndroid = async () => {
    if (!deferredPrompt) return
    setInstalling(true)
    deferredPrompt.prompt()
    await deferredPrompt.userChoice
    setDeferredPrompt(null)
    setInstalling(false)
    dismiss()
  }

  if (dismissed || !platform) return null

  return (
    <div className="a2hs-banner">
      <button className="a2hs-close" onClick={dismiss} aria-label="Dismiss">✕</button>

      {platform === 'ios' ? (
        <>
          <p className="a2hs-title">Add Sual to your Home Screen</p>
          <p className="a2hs-text">
            Tap <span className="a2hs-icon-inline"><ShareIcon /></span> in Safari's toolbar,
            then scroll down and tap <strong>Add to Home Screen</strong>.
          </p>
        </>
      ) : (
        <>
          <p className="a2hs-title">Install Sual as an app</p>
          <p className="a2hs-text">Get quicker access and a full-screen experience, no browser bar.</p>
          <button className="a2hs-install-btn" onClick={installAndroid} disabled={installing}>
            {installing ? 'Installing…' : 'Install App'}
          </button>
        </>
      )}
    </div>
  )
}