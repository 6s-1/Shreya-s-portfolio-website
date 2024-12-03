import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/Shreya-s-portfolio-website/', // Use '/' for dev and '/repository-name/' for prod
  plugins: [react(), svgr()],
}))
