// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file2.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

export {};

let fs = require('fs');

function manipulator(content: string) {
  try {
    fs.writeFileSync('my-file2.txt', content, 'UTF-8');
  } catch (error) {
    console.log('Unable to write file: my-file.txt');
  }
}

manipulator('Dalma Pall-Smith');
