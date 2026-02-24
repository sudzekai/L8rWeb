import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    server: {
        host: 'webshvets.ru',
        port: 80,
        allowedHosts: ['webshvets.ru'],
        strictPort: true   // не менять порт, если занят
    }
})