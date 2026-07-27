import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

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