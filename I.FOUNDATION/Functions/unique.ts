function unique(inputArray: number[]): number[] {
  let outputArray: number[] = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (!outputArray.includes(inputArray[i])) {
      //IF IT DOESN'T INCLUDE
      outputArray.push(inputArray[i]);
    }
  }
  outputArray.sort();
  return outputArray;
}

console.log(unique([1, 11, 34, 11, 61, 52, 61, 1, 34]));
