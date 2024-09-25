import { defineConfig } from "vite";

export default defineConfig({
    build: {
        outDir: '../server/public',
        emptyOutDir: true
    },
    server: {
        proxy: {
            '/players': {
                target: 'http://localhost:3000'
            }
        }
    }
})