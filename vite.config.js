import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';


// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react(), svgr()],
    base: '/Shreya-s-portfolio-website/',
  }

  if (command !== 'serve') {
    config.base = '/Shreya-s-portfolio-website/'
  }

  return config
})

