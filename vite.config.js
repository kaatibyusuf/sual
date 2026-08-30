import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { VitePWA } from 'vite-plugin-pwa'  // temporarily disabled for diagnosis — see if the real build error surfaces without it

export default defineConfig({
  plugins: [
    react(),
    // VitePWA({
    //   manifest: false,
    //   registerType: 'autoUpdate',
    //   workbox: {
    //     globDirectory: 'dist',
    //     globPatterns: ['**/*'],
    //     cleanupOutdatedCaches: true,
    //     maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
    //     navigateFallback: '/index.html',
    //     navigateFallbackDenylist: [/^\/(rest|auth|storage|functions)\//],
    //   },
    // }),
  ],
  build: {
    minify: false,
  },
})