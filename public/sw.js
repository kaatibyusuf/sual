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
self.addEventListener('push', (event) => {
  let data = { title: 'Sual', body: 'You have something waiting for you today.', url: '/' }
  try {
    if (event.data) data = { ...data, ...event.data.json() }
  } catch {
    // Payload wasn't JSON — fall back to the defaults above rather
    // than letting a malformed push crash silently with no
    // notification shown at all.
  }

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/icons/icon-192.png',
      badge: '/icons/icon-192.png',
      data: { url: data.url },
    })
  )
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  const url = event.notification.data?.url || '/'
  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          client.navigate(url)
          return client.focus()
        }
      }
      return self.clients.openWindow(url)
    })
  )
})
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