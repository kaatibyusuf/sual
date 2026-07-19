import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

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
      // Browsers only check for a new sw.js on navigation, and by
      // spec at most once every 24 hours even then — a PWA left open
      // for days never triggers that check on its own. Re-checking
      // whenever the tab/app becomes visible again catches the case
      // that matters most: someone switching back to Sual after it's
      // been sitting in the background.
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') registration.update()
      })

      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing
        if (!newWorker) return
        newWorker.addEventListener('statechange', () => {
          // "installed" + an existing controller means a new version
          // finished installing while an old one is still actively
          // running the page — this is the moment to prompt, rather
          // than swapping silently, which can leave the page in a
          // half-old-half-new state until it's reloaded anyway.
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