import fs from 'fs';
import path from 'path';

// Test file paths
const testFilePath = path.join(process.cwd(), 'test-output.txt');
const distPath = path.join(process.cwd(), 'dist');

async function testFileSystem() {
  try {
    console.log('Testing file system operations...');
    
    // Test file write
    console.log('1. Testing file write...');
    await fs.promises.writeFile(testFilePath, 'Test content');
    console.log('✅ File write successful');
    
    // Test file read
    console.log('2. Testing file read...');
    const content = await fs.promises.readFile(testFilePath, 'utf-8');
    console.log(`✅ File read successful. Content: "${content}"`);
    
    // Check if dist directory exists
    console.log('\n3. Checking dist directory...');
    try {
      const stats = await fs.promises.stat(distPath);
      console.log(`✅ dist directory exists. Is directory: ${stats.isDirectory()}`);
      
      // List contents of dist directory
      console.log('\n4. Contents of dist directory:');
      const files = await fs.promises.readdir(distPath);
      
      if (files.length > 0) {
        console.log('✅ Dist directory contains files:');
        console.log(files.join('\n'));
      } else {
        console.log('ℹ️  Dist directory is empty');
      }
      
    } catch (error) {
      console.error('❌ Error accessing dist directory:', error.message);
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    // Clean up test file
    try {
      if (fs.existsSync(testFilePath)) {
        await fs.promises.unlink(testFilePath);
        console.log('\n✅ Cleanup: Test file removed');
      }
    } catch (cleanupError) {
      console.error('❌ Error during cleanup:', cleanupError.message);
    }
  }
}

// Run the test
testFileSystem();
