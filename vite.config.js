import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    // PWA disabled — vite-plugin-pwa's generateSW closeBundle hook
    // can't reliably find Vite 8/Rolldown's build output. Confirmed
    // as a real, independent issue (not masked by another bug) on
    // [today's date]. Tracking: vite-pwa/vite-plugin-pwa#933 (ground-up
    // rework for Rolldown compatibility, in progress as of writing).
    // VitePWA({
    //   manifest: false,
    //   registerType: 'autoUpdate',
    //   workbox: {
    //     globDirectory: 'dist',
    //     globPatterns: ['**/*.{js,css,html,ico,svg,png,woff2}'],
    //     cleanupOutdatedCaches: true,
    //     maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
    //     navigateFallback: '/index.html',
    //     navigateFallbackDenylist: [/^\/(rest|auth|storage|functions)\//],
    //   },
    // }),
  ],
})