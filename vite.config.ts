import {resolve} from 'node:path'
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      input: {
        home: resolve(process.cwd(), 'index.html'),
        buildDays: resolve(process.cwd(), 'build-days/index.html'),
        csiPricing: resolve(process.cwd(), 'csi-pricing/index.html'),
        usageBasedBilling: resolve(process.cwd(), 'usage-based-billing/index.html'),
      },
      output: {
        manualChunks(id) {
          if (
            id.includes('github-slugger') ||
            id.includes('react-markdown') ||
            id.includes('rehype-raw') ||
            id.includes('rehype-sanitize') ||
            id.includes('rehype-slug') ||
            id.includes('remark-gfm')
          ) {
            return 'markdown'
          }

          if (id.includes('@primer/octicons-react') || id.includes('@primer/react')) {
            return 'primer'
          }

          return undefined
        },
      },
    },
  },
})
