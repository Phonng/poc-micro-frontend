import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mfe2',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App'
      },
      remotes: {
        mfe1: 'http://localhost:5174/assets/remoteEntry.js',
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
    port: 5175
  }
})
