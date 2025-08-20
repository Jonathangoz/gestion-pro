// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    // Esto hace que las importaciones con '@/' funcionen en las pruebas
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
});