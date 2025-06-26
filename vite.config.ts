import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  
  return {
    plugins: [
      react(),
      isProduction && visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
        filename: 'stats.html'
      }),
    ].filter(Boolean),
    base: isProduction ? '/' : '/',
    publicDir: 'public',
    server: {
      port: 3000,
      open: true,
    },
    preview: {
      port: 3000,
      open: true,
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
      exclude: ['lucide-react'],
    },
    build: {
      outDir: 'dist',
      assetsDir: '.',
      emptyOutDir: true,
      sourcemap: isProduction ? 'hidden' : false,
      minify: isProduction ? 'esbuild' : false,
      cssCodeSplit: true,
      reportCompressedSize: true,
      chunkSizeWarningLimit: 1600,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
        },
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            utils: ['zod', 'zustand', 'react-hook-form'],
          },
        },
      },
    },
    define: {
      'process.env': process.env,
    },
  };
});
