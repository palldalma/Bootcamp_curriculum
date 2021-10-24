// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

import { readFile } from 'fs';

export {};

let fs = require('fs');

let myFile: string;

function readSource(path: string): void {
  try {
    myFile = fs.readFileSync(path, 'utf8');
  } catch (err) {
    console.log('error');
  }
}

function returnUniqueIPAddresses(): string[] | string {
  let lines: string[] = myFile.split('\n');
  let uniqueIPs: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    let currentLine = lines[i];
    let currentIP = currentLine.split(' ')[8];
    if (!uniqueIPs.includes(currentIP)) {
      uniqueIPs.push(currentIP);
    }
  }

  return uniqueIPs;
}

readSource('/Users/dalmapall/Desktop/TS/homework/Errors_Exception handling_File IO/log.txt');
console.log(returnUniqueIPAddresses());

function returnRatio(): string {
  let lines: string[] = myFile.split('\n');

  let numOfPOST: number = 0;
  let numOfGET: number = 0;

  for (let i = 0; i < lines.length; i++) {
    let currentLine: string[] = lines[i].split(' ');

    if (currentLine.includes('POST')) {
      numOfPOST++;
    } else if (currentLine.includes('GET')) {
      numOfGET++;
    }
  }
  return `number of POST request: ${numOfPOST} \nnumber of GET requests: ${numOfGET}`;
}

console.log(returnRatio());
