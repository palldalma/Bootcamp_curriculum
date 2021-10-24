function calc(baseNumber: number): void {
  let sum: number = 0;
  for (let i = 0; i <= baseNumber; i++) {
    sum += i;
  }

  console.log(
    `The sum of numbers from 0 to ${baseNumber} is ${sum}\nand their average is ${
      sum / baseNumber
    }.`
  );
}

calc(5);
