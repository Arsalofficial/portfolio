import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-scroll': require.resolve('react-scroll'), // Resolve react-scroll correctly
    },
  },
  build: {
    rollupOptions: {
      external: ['typed.js', 'react-scroll', 'clsx', 'tailwind-merge'], // External dependencies
    },
  },
});
