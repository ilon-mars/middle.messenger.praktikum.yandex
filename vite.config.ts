import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';

import eslint from 'vite-plugin-eslint';

import handlebars from './plugins/vite-plugin-handlebars-precompile';

// https://vitejs.dev/config/
export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
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
};
