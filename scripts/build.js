import fs from 'fs-extra';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function build() {
  try {
    console.log('Cleaning previous build...');
    await fs.remove('dist');

    console.log('Building application...');
    // Run Vite build
    const isWindows = process.platform === 'win32';
    const viteCommand = isWindows ? 'npx.cmd vite build' : 'npx vite build';
    
    execSync(viteCommand, { stdio: 'inherit' });

    console.log('Copying public directory to dist...');
    // Copy public directory to dist
    await fs.copy('public', 'dist', { overwrite: true });

    console.log('Build completed successfully!');
    console.log('You can now deploy the contents of the dist directory to your hosting provider.');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

build();
