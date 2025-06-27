import fs from 'fs';
import path from 'path';

// Test basic file system operations
async function testFileSystem() {
  const testFilePath = path.join(process.cwd(), 'test-file.txt');
  
  try {
    // Test file writing
    console.log('Testing file write...');
    await fs.promises.writeFile(testFilePath, 'Test content');
    console.log('✅ Successfully wrote test file');
    
    // Test file reading
    console.log('Testing file read...');
    const content = await fs.promises.readFile(testFilePath, 'utf-8');
    console.log('✅ Successfully read test file. Content:', content);
    
    // Test directory creation
    const testDir = path.join(process.cwd(), 'test-dir');
    console.log('Testing directory creation...');
    await fs.promises.mkdir(testDir, { recursive: true });
    console.log('✅ Successfully created test directory');
    
    // Check if dist directory exists
    const distPath = path.join(process.cwd(), 'dist');
    console.log('\nChecking dist directory...');
    try {
      const stats = await fs.promises.stat(distPath);
      console.log(`✅ dist directory exists. Is directory: ${stats.isDirectory()}`);
      
      // List contents of dist directory
      console.log('\nContents of dist directory:');
      const files = await fs.promises.readdir(distPath);
      console.log(files.length > 0 ? files : 'Directory is empty');
      
    } catch (error) {
      console.log('❌ dist directory does not exist or is not accessible');
    }
    
  } catch (error) {
    console.error('❌ File system test failed:', error);
  } finally {
    // Clean up
    try {
      if (fs.existsSync(testFilePath)) {
        await fs.promises.unlink(testFilePath);
      }
      const testDir = path.join(process.cwd(), 'test-dir');
      if (fs.existsSync(testDir)) {
        await fs.promises.rm(testDir, { recursive: true });
      }
    } catch (cleanupError) {
      console.error('Error during cleanup:', cleanupError);
    }
  }
}

testFileSystem();
