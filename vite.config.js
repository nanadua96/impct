import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  root: './src/',
  publicDir: 'public',
  base: '',
  build: { outDir: '../public/', emptyOutDir: true },
  plugins: [createHtmlPlugin({ minify: true })],
});
