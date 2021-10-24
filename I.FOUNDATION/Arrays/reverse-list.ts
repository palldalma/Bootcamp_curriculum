export {};

let numbers = [3, 4, 5, 6, 7];

//task1 - it is important to copy the original array first, .reverse affects the original array that called it
let copyOfnumbers = numbers.slice();
let reversedArray1: number[] = copyOfnumbers.reverse();

console.log(numbers);
console.log(reversedArray1);

//task2

let tempArray = new Array(numbers.length);

for (let i = 0; i < numbers.length; i++) {
  tempArray[numbers.length - i - 1] = numbers[i];
}
console.log(tempArray);

//task2

let reversedArray2: number[] = [];

for (let i = numbers.length; i >= 0; i--) {
  reversedArray2.push(numbers[i]);
}
console.log(numbers);
