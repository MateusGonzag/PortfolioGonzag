import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
  ],
  resolve: {
    alias: {
      '@icons': path.resolve(__dirname, './src/assets/icons'),
      '@bg': path.resolve(__dirname, './src/assets/images')
    },
  },
  server: {
    compress: true,
  },
});