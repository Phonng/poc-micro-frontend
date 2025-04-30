import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        mfe1: 'http://localhost:5174/assets/remoteEntry.js',
        mfe2: 'http://localhost:5175/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom']
    }),
    visualizer({ open: true }) // Thêm dòng này

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
  }
})
