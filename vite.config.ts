import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteEslint from 'vite-plugin-eslint';
import viteStylelint from 'vite-plugin-stylelint';
import svg from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(path.dirname(''), './src')
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api']
      }
    }
  },

  plugins: [
    react(),
    svg(),
    viteEslint({
      failOnError: false
    }),
    viteStylelint({
      lintInWorker: true
    })
  ]
});
