import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {viteSingleFile} from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  /* build: {
    target: 'esnext',
    assetsInlineLimit: 100000000, // Permite inlining de assets grandes
    chunkSizeWarningLimit: 100000000,
  }, */
});






/* import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
}) */
