import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/frontend-apps/react-consumer-app/',
  plugins: [react()],
  resolve: {
    alias: {
      '@amiraelgarf/custom-frontend-library': path.resolve(__dirname, './node_modules/@amiraelgarf/custom-frontend-library'),
      '@amiraelgarf/custom-frontend-library/react': path.resolve(__dirname, './node_modules/@amiraelgarf/custom-frontend-library/dist/react'),
      '@amiraelgarf/custom-frontend-library/loader': path.resolve(__dirname, './node_modules/@amiraelgarf/custom-frontend-library/loader')
    }
  }
})
