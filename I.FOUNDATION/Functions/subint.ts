function findMatchingIndices(pattern: number, inputArray: number[]): number[] {
  let outputArray: number[] = [];

  for (let i = 0; i < inputArray.length; i++) {
    let numberTurnedIntoString = inputArray[i].toString();
    if (numberTurnedIntoString.includes(pattern.toString())) {
      outputArray.push(i);
    }
  }
  return outputArray;
}

let testArray = [12, 14, 41, 56, 61, 76];

console.log(findMatchingIndices(1, testArray));
