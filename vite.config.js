// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        hobbies: resolve(import.meta.dirname, 'aficiones.html'),
        interests: resolve(import.meta.dirname, 'intereses.html'),
        cat: resolve(import.meta.dirname, 'Calcetines.html'),
        projects: resolve(import.meta.dirname, 'proyectos.html'),
      }
    }
  }
});