let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

function checkNums(array: number[]): boolean {
  if (array.includes(4 && 8 && 12 && 16)) {
    return true;
  } else return false;
}

console.log(checkNums(listOfNumbers));

//TESTING

let array2: number[] = [2, 3, 4, 5, 6];

console.log(checkNums(array2));
