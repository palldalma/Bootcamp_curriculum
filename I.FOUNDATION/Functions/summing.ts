export {};

function sum(num: number) {
  let sumOfNumbers: number = 0;

  for (let i = 1; i <= num; i++) {
    sumOfNumbers += i;
  }
  return sumOfNumbers;
}

console.log(sum(3));
