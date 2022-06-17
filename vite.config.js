import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://hernan0740.github.io/gh-react-prueba/',
  plugins: [react()]
})
