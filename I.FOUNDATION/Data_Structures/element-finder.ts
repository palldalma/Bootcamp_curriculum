const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(array: number[]) {
  if (array.includes(7)) {
    return 'Hoorray';
  } else return 'Nooooooo';
}
console.log(containsSeven(numbers));
