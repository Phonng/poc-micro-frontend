import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mfe1',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
        "./useCounter": "./src/hooks/useCounter", // (hoặc “expose custom hook”) – “expose” (hoặc “expose”) custom hook (hoặc “shared logic”) ra bên ngoài (hoặc “remote”).
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        minifyInternalExports: false
      }
    }
  },
  server: {
    port: 5174
  }
})
