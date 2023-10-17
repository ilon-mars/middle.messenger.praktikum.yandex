import { defineConfig } from 'vite';
import { resolve } from 'path';

import eslint from 'vite-plugin-eslint';

import handlebars from './plugins/vite-plugin-handlebars-precompile';

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'dist'),
  },

  plugins: [eslint(), handlebars()],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '~': resolve(__dirname, 'public'),
    },
  },
});
