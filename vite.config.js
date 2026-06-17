import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Sual - Islamic Knowledge',
        short_name: 'Sual',
        description: 'Ask questions on Fiqh, Seerah, Arabiyyah and more',
        theme_color: '#094570',
        background_color: '#F0F8FF',
        display: 'standalone',
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
      }
    })
  ]
})