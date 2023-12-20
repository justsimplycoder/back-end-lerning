/* Иформация о файле */

const fs = require('node:fs');
const path = require('node:path');

const filePath = __dirname + '/hello.txt';

const stat = fs.statSync(filePath);

console.log(stat);

console.log('file size:');
console.log(stat['size']);

console.log('file creation time:');
console.log(stat['ctime']);

try {
    console.log('is readable file:');
    fs.accessSync(filePath, fs.constants.R_OK);
    console.log('true');
} catch (err) {
    console.error('false');
}

try {
		console.log('is writable file:');
    fs.accessSync(filePath, fs.constants.W_OK);
    console.log('true');
} catch (err) {
    console.error('false');
}

console.log(path.extname(filePath));

console.log(path.basename(filePath));

console.log(path.dirname(filePath));