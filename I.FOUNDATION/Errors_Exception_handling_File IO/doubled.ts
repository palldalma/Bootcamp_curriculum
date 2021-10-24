//// Create a method that decrypts duplicated-chars.txt

export {};

let fs = require('fs');

function decrypt(text: string): string {
  try {
    text = fs.readFileSync(text, 'UTF-8');
  } catch (err) {
    console.log('Unable to read file.');
  }

  let textArray: string[] = text.split('');

  let decryptedText: string = '';

  for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      delete textArray[i];
    }
  }
  decryptedText = textArray.join('');

  console.log(decryptedText);
  return decryptedText;
}

decrypt('/Users/dalmapall/Desktop/TS/homework/Errors_Exception handling_File IO/duplicated-chars.txt');

//működik, de ha errort kap, akkor nem csak azt írja ki, amit én ki szeretnék íratni: Unable to read file. UesdlaalDstpT/oeokErr_xeto adigFl Odpiaecastt
