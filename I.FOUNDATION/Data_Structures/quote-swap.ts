let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];

function quoteSwap(array: string[]): string[] {
  let replacement = array[2];
  array.splice(2, 1, array[5]);
  array.splice(5, 1, replacement);

  return array;
}

console.log(quoteSwap(words).join(' '));
