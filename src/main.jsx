import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import './ripple.css'
import { initRippleEffect } from './lib/rippleEffect.js'

// ── Refuse to run a dev build on the real production domain ────
// import.meta.env.DEV is true whenever Vite serves an unminified
// development build (npm run dev) — expected and completely fine on
// localhost, where this check simply never fires. It should NEVER be
// true on the actual production domain; if it is, something is
// wrong (a misconfigured deployment, or someone deliberately serving
// a dev build under the real domain), and a dev build should not be
// treated as safe to hand to real users — no minification, verbose
// framework warnings, and none of the guarantees a real production
// build gives. This only ever blocks that specific combination; it
// has no effect on local development at all.
const PRODUCTION_HOSTNAMES = ['app.usesual.com', 'www.app.usesual.com']

if (import.meta.env.DEV && PRODUCTION_HOSTNAMES.includes(window.location.hostname)) {
  document.body.innerHTML = `
    <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#062f4a;color:#fff;font-family:sans-serif;text-align:center;padding:24px;">
      <div>
        <p style="font-size:1.2rem;font-weight:700;margin-bottom:8px;">Sual is unavailable right now.</p>
        <p style="opacity:0.7;font-size:0.9rem;">Please try again shortly.</p>
      </div>
    </div>`
  throw new Error('Refusing to run a development build on the production domain.')
}

// ── Console warning ──────────────────────────────────────────
// NOT a technical protection -- DevTools cannot be reliably blocked
// by anything running on the page, and any determined user can
// bypass or ignore this entirely. This exists solely to deter the
// well-known "self-XSS" scam, where someone is tricked into pasting
// malicious code into their own browser console believing it will
// unlock a feature or fix a problem. It has zero effect on anyone
// legitimately inspecting the app (a developer, a security
// researcher, or a curious user).
console.log('%cStop!', 'color: #c0392b; font-size: 48px; font-weight: 800;')
console.log(
  '%cThis is a browser feature intended for developers. If someone told you to copy and paste something here, it is very likely a scam that could give them access to your account.',
  'font-size: 15px;'
)

// Prevent pull-to-refresh from wiping in-progress app state (e.g. a
// quiz mid-attempt) when a user accidentally scrolls down at the top
// of the page. The CSS overscroll-behavior fix handles this on most
// Android browsers; this covers Safari/iOS, where that CSS property
// isn't reliably supported.
let touchStartY = 0
document.addEventListener('touchstart', e => { touchStartY = e.touches[0].clientY }, { passive: true })
document.addEventListener('touchmove', e => {
  const touchY = e.touches[0].clientY
  const scrollTop = document.scrollingElement.scrollTop
  if (scrollTop === 0 && touchY > touchStartY) {
    e.preventDefault()
  }
}, { passive: false })

// Water-drop ripple on every button press, app-wide — see
// lib/rippleEffect.js for exactly what it does and doesn't catch.
// A single delegated listener attached once here, not something any
// individual component needs to import or wire up itself.
initRippleEffect()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') registration.update()
      })
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing
        if (!newWorker) return
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            if (window.confirm('A new version of Sual is available. Reload now?')) {
              window.location.reload()
            }
          }
        })
      })
    })
  })
}