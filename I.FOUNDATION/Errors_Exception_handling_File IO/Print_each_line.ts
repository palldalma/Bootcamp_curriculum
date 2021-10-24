// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

let fs = require('fs');

function read(path: string, encoder: string = 'utf8') {
  console.log(fs.readFileSync(path, encoder));
}

try {
  read('/Users/dalmapall/Desktop/TS/homework/Errors_Exception handling_File IO/my-file.txt');
} catch (err) {
  console.log('Unable to read file: my-file.txt');
}
