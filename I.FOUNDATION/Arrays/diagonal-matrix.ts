export {};

// let numbers = [
//   [1, 0, 0, 0],
//   [0, 1, 0, 0],
//   [0, 0, 1, 0],
//   [0, 0, 0, 1],
// ];

let numbers = new Array(4);

for (let i = 0; i < numbers.length; i++) {
  let subArrays = new Array(4);

  for (let j = 0; j < subArrays.length; j++) {
    subArrays[i] = 1;

    if (j != i) {
      subArrays[j] = 0;
    }
  }

  numbers[i] = subArrays;
}

console.log(numbers);
