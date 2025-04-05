// my_app/vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/teletext/',
    build: {
        outDir: './docs',
        emptyOutDir: true
    }
})
