import fs from 'fs';
import path from 'path';

function listFiles(dir, prefix = '') {
  const files = fs.readdirSync(dir);
  let result = [];
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      result = result.concat(listFiles(fullPath, `${prefix}${file}/`));
    } else {
      result.push(`${prefix}${file}`);
    }
  });
  
  return result;
}

try {
  const files = listFiles('dist');
  console.log('Files in dist directory:');
  console.log(files.join('\n'));
} catch (error) {
  console.error('Error reading dist directory:', error);
}
