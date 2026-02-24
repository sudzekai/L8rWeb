import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    server: {
        base: '/L8rWeb',
        host: 'webshvets.ru',
        port: 80,
        allowedHosts: ['webshvets.ru', "sudzekai.github.io"],
        strictPort: true   // не менять порт, если занят
    }
})