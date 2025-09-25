import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(() => {
  return {
    plugins: [react()],
    root: path.resolve(__dirname, 'client'), // 👈 point to client folder
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'client/src'),
      },
    },
    build: {
      outDir: path.resolve(__dirname, 'dist'), // 👈 output dist at project root
      emptyOutDir: true,
    },
    server: {
      port: 3000,
      open: true
    },
  };
});
