// Simple test script to verify basic file system operations
const fs = require('fs');
const path = require('path');

console.log('Starting simple file system test...');
console.log('Current working directory:', process.cwd());

// Test file path
const testFilePath = path.join(process.cwd(), 'test-simple.txt');

// Test 1: Write to a file
try {
  console.log('\nTest 1: Writing to a file...');
  fs.writeFileSync(testFilePath, 'This is a test file');
  console.log('✅ Successfully wrote to file');
} catch (error) {
  console.error('❌ Error writing to file:', error.message);
  process.exit(1);
}

// Test 2: Read from the file
try {
  console.log('\nTest 2: Reading from the file...');
  const content = fs.readFileSync(testFilePath, 'utf-8');
  console.log('✅ File content:', `"${content}"`);
} catch (error) {
  console.error('❌ Error reading file:', error.message);
}

// Test 3: List directory contents
try {
  console.log('\nTest 3: Listing directory contents...');
  const files = fs.readdirSync(process.cwd());
  console.log('✅ Directory contents (first 10 files):');
  console.log(files.slice(0, 10).join('\n'));
  if (files.length > 10) console.log(`... and ${files.length - 10} more`);
} catch (error) {
  console.error('❌ Error listing directory:', error.message);
}

// Cleanup
try {
  if (fs.existsSync(testFilePath)) {
    fs.unlinkSync(testFilePath);
    console.log('\n✅ Cleanup: Test file removed');
  }
} catch (error) {
  console.error('❌ Error during cleanup:', error.message);
}

console.log('\nTest completed!');
