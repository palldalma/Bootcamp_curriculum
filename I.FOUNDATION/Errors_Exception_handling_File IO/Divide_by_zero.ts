// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'Cannot divide by zero!' if the parameter is 0

function divide(dividend: number, divisor: number) {
  if (dividend === 0 || divisor === 0) {
    throw new Error('cannot be divided by zero');
  } else {
    console.log(dividend / divisor);
    return dividend / divisor;
  }
}

try {
  divide(0, 10);
} catch (err) {
  console.log(err.message);
}
