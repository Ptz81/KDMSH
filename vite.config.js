import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // base: '/KDMSH',
  resolve: {
    alias: {
      src: './src',
      components: './src/components',
    },
  }
});
