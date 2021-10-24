function calculateFactorial(input: number): number {
  if (input === 0 || input === 1) return 1;

  for (let i = input - 1; i >= 1; i--) {
    input = input * i; //input *= i;
  }
  return input;
}
console.log(calculateFactorial(4));
