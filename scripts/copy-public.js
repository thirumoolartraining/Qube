const fs = require('fs-extra');
const path = require('path');

async function copyPublic() {
  const source = path.join(__dirname, '..', 'public');
  const dest = path.join(__dirname, '..', 'dist');
  
  try {
    // Ensure destination exists
    await fs.ensureDir(dest);
    
    // Copy public directory to dist
    await fs.copy(source, dest, { overwrite: true });
    
    console.log('Successfully copied public directory to dist');
  } catch (err) {
    console.error('Error copying public directory:', err);
    process.exit(1);
  }
}

copyPublic();
