import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // manifest.json already exists, hand-maintained, and is the
      // exact file Bubblewrap's twa-manifest.json points at
      // (webManifestUrl) for the Android app already live on the
      // Play Store. Disabling manifest generation here means this
      // plugin only adds the service worker — it never touches or
      // regenerates that file, so there's zero risk to the existing
      // Android build.
      manifest: false,

      // Auto-updates the service worker in the background and
      // activates the new version on next navigation, rather than
      // requiring a custom "new version available" prompt UI. The
      // tradeoff: someone mid-session during a deploy can see a
      // single automatic reload. If that becomes its own complaint
      // later, switching to registerType: 'prompt' (with a small
      // "Update available" toast) is a contained follow-up, not a
      // rebuild of this.
      registerType: 'autoUpdate',

      // Precache the actual app shell — hashed JS/CSS bundles Vite
      // already produces, plus the icons and fonts referenced in
      // index.html. Vite's own filename hashing means a new deploy's
      // assets never collide with old cached ones; workbox's
      // cleanupOutdatedCaches (on by default) removes the stale
      // versions once the new SW activates.
      workbox: {
        // Explicitly named rather than inferred. Vite 8 builds with
        // Rolldown now, not Rollup, and vite-plugin-pwa's closeBundle
        // hook has to correctly detect where Rolldown actually wrote
        // the build output before it can glob it. Naming it directly
        // removes that inference step entirely — if this was a
        // detection/timing issue rather than a real glob mismatch,
        // this line alone is the fix. Update this if build.outDir is
        // ever changed away from Vite's default.
        globDirectory: 'dist',
        globPatterns: ['**/*.{js,css,html,ico,svg,png,woff2}'],
        cleanupOutdatedCaches: true,

        // Default is 2 MiB per file — the main index bundle is
        // 2.19 MB and got silently excluded from precaching without
        // this (build error: "Assets exceeding the limit... won't be
        // precached"). Raised generously above current size so
        // normal growth doesn't hit this again on every future
        // build.
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,

        // The actual fix for "opens like a web link, nothing shows
        // offline": any navigation (a fresh load, or a route that
        // isn't itself precached, e.g. a deep link) that can't reach
        // the network now falls back to the cached index.html — the
        // real Sual app shell — instead of the browser's own blank/
        // error page. React then boots as normal from there; data
        // fetches (Supabase, OpenAI) still correctly fail offline,
        // same as intended — only the interface itself is what's
        // guaranteed to render.
        navigateFallback: '/index.html',

        // Never let a Supabase/OpenAI/Paystack API call get
        // intercepted by the navigation fallback — those need to hit
        // the network for real and fail honestly if there isn't one,
        // not resolve to a cached HTML page.
        navigateFallbackDenylist: [/^\/(rest|auth|storage|functions)\//],
      },
    }),
  ],
  build: {
    minify: false,
  },
})