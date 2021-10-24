let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

function appendA(array: string[]) {
  let appended: string[] = [];

  for (let i = 0; i < array.length; i++) {
    appended.push(array[i] + 'a');
  }

  return appended;
}

console.log(appendA(far));
