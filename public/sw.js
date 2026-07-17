const CACHE_NAME = 'sual-cache-v2'
const PRECACHE_URLS = ['/']

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  )
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return

  // caches.put() throws on non-http(s) requests (e.g.
  // chrome-extension://...) — a browser extension making a request
  // through the page was silently breaking that half of this
  // handler. Guarding here stops it from ever being attempted.
  const url = new URL(event.request.url)
  const isCacheable = url.protocol === 'http:' || url.protocol === 'https:'

  // Navigation requests (a typed URL, a refresh, a deep link into
  // any route) must fall back to the cached APP SHELL ('/') on
  // failure, not to caches.match(event.request) for that exact path.
  // A route that was never precached or visited before — like
  // /exam-prep the first time anyone opens it — resolves to
  // `undefined` from the cache, and event.respondWith() throws
  // "Failed to convert value to 'Response'" when handed undefined,
  // rather than falling through to React Router once the shell has
  // actually loaded. This was the real cause of the blank page.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (isCacheable) {
            const clone = response.clone()
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone))
          }
          return response
        })
        .catch(() => caches.match('/').then((shell) => shell || Response.error()))
    )
    return
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (isCacheable) {
          const clone = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone))
        }
        return response
      })
      .catch(() => caches.match(event.request).then((cached) => cached || Response.error()))
  )
})