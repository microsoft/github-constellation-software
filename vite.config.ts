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
        usageBasedBilling: resolve(process.cwd(), 'usage-based-billing/index.html'),
      },
      output: {
        manualChunks: {
          markdown: [
            'github-slugger',
            'react-markdown',
            'rehype-raw',
            'rehype-sanitize',
            'rehype-slug',
            'remark-gfm',
          ],
          primer: ['@primer/octicons-react', '@primer/react'],
        },
      },
    },
  },
})
