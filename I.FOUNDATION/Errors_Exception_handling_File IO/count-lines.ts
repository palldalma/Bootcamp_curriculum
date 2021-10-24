// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

export {};

let fs = require("fs");

function lineCount(path: string): number {
  let myFile;

  try {
    myFile = fs.readFileSync(path, "utf8");
  } catch (err) {
    return 0;
  }

  let nLines = 0;
  for (let i = 0; i <= myFile.length; i++) {
    if (myFile[i] === "\n") {
      nLines++;
    }
  }

  return nLines;
}

console.log(
  lineCount(
    "/Users/dalmapall/Desktop/TS/homework/Errors_Exception handling_File IO/my-file.txt"
  )
);
