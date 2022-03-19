import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  root: './src/',
  base: '',
  build: { outDir: '../public/', emptyOutDir: true },
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
  ],
});
