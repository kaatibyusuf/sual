import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    // PWA temporarily disabled — vite-plugin-pwa's generateSW closeBundle
    // hook can't reliably find Vite 8/Rolldown's build output (see
    // vite-pwa/vite-plugin-pwa#933, a ground-up rework in progress for
    // Rolldown compatibility). Re-enable once that lands, or once
    // downgrading off Rolldown-based Vite 8 is worth it.
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