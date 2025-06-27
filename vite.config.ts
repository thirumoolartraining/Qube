import { defineConfig, type ConfigEnv, type UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import type { RollupError } from 'rollup';

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }: ConfigEnv): Promise<UserConfig> => {
  const isProduction = mode === 'production';
  console.log(`Running in ${isProduction ? 'production' : 'development'} mode`);
  
  // Rollup configuration
  const rollupOptions = {
    onwarn(warning: RollupError, warn: (warning: RollupError) => void) {
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
        return;
      }
      warn(warning);
    },
    input: {
      main: resolve(__dirname, 'index.html'),
    },
    output: {
      assetFileNames: 'assets/[name]-[hash][extname]',
      chunkFileNames: 'assets/[name]-[hash].js',
      entryFileNames: 'assets/[name]-[hash].js',
      manualChunks: {
        vendor: ['react', 'react-dom', 'react-router-dom'],
        utils: ['zod', 'zustand', 'react-hook-form'],
      },
    },
  };
  
  return {
    plugins: [
      react(),
      isProduction && visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
        filename: 'stats.html'
      }),
    ].filter(Boolean) as any[],
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
      assetsDir: 'assets',
      emptyOutDir: true,
      sourcemap: isProduction ? 'hidden' : false,
      minify: isProduction ? 'esbuild' : false,
      cssCodeSplit: true,
      reportCompressedSize: true,
      chunkSizeWarningLimit: 1600,
      rollupOptions,
      // Copy public directory in production
      copyPublicDir: isProduction,
    },
    define: {
      'process.env': {},
    },
  };
});
