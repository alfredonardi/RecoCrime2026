import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    cssMinify: 'lightningcss',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'pdf-vendor': ['@react-pdf/renderer']
        }
      }
    }
  },
  // Add public directory configuration
  publicDir: 'public',
  // Ensure assets are copied to correct location
  base: '/'
})