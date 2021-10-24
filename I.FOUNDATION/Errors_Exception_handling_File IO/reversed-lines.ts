// Create a method that decrypts reversed-lines.txt

export {};

let fs = require('fs');

function decrypt(text: string): string {
  try {
    text = fs.readFileSync(text, 'UTF-8');
  } catch (err) {
    console.log('Unable to read file.');
  }

  let textArray: string[] = text.split('');
  let reversedArray: string[] = [];

  for (let i = textArray.length; i >= 0; i--) {
    reversedArray.push(textArray[i]);
  }

  let decryptedText: string = '';

  decryptedText = reversedArray.join('');

  console.log(decryptedText);
  return decryptedText;
}

decrypt('/Users/dalmapall/Desktop/TS/homework/Errors_Exception handling_File IO/reversed-lines.txt');
