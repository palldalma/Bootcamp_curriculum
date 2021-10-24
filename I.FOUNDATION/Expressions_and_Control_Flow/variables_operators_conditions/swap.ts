let numberToSwap1: number = 123;
let numberToSwap2: number = 526;

console.log(
  `Number1 before the swap was ${numberToSwap1} and number2 was ${numberToSwap2}.`
);
let temp: number = numberToSwap1;
numberToSwap1 = numberToSwap2;
numberToSwap2 = temp;

console.log(
  `After the swap, number1 is ${numberToSwap1} and number2 is ${numberToSwap2}.`
);
