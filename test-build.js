const fs = require('fs');
const path = require('path');

// Test file operations in the project directory
const testDir = __dirname;
const testFile = path.join(testDir, 'test-file.txt');

console.log('Testing file operations in directory:', testDir);
console.log('Files in directory:', fs.readdirSync(testDir).join(', '));

// Try to create a test file
fs.writeFileSync(testFile, 'Test content');
console.log('Created test file at:', testFile);

// Verify the file was created
console.log('File exists:', fs.existsSync(testFile));
console.log('File content:', fs.readFileSync(testFile, 'utf8'));

// Clean up
fs.unlinkSync(testFile);
console.log('Test file removed');
