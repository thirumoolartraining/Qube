// Simple Vite plugin to debug the build process
import { createWriteStream } from 'fs';
import { join } from 'path';

const logFile = join(process.cwd(), 'vite-build-debug.log');
const logStream = createWriteStream(logFile, { flags: 'w' });

function log(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  process.stdout.write(logMessage);
  logStream.write(logMessage);
}

export default function debugPlugin() {
  return {
    name: 'debug-plugin',
    config(config, { command }) {
      log(`Running command: ${command}`);
      log(`Mode: ${config.mode || 'development'}`);
      log(`Root: ${config.root || process.cwd()}`);
      return {};
    },
    buildStart() {
      log('Build started');
    },
    buildEnd() {
      log('Build completed');
    },
    closeBundle() {
      log('Bundle closed');
      logStream.end();
    },
    handleHotUpdate({ file }) {
      log(`File changed: ${file}`);
    },
    transformIndexHtml() {
      log('Transforming index.html');
    },
    generateBundle(options, bundle) {
      log(`Generating bundle with ${Object.keys(bundle).length} files`);
      Object.keys(bundle).forEach(file => {
        log(`  - ${file}`);
      });
    }
  };
}
