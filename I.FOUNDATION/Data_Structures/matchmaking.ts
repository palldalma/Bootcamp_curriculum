let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

let couples: string[] = [];

function matchmaker(array1: string[], array2: string[]) {
  if (array1.length > array2.length) {
    for (let i = 0; i < array1.length; i++) {
      couples.push(array1[i], array2[i]);
    }
    return couples;
  } else if (array1.length < array2.length) {
    for (let i = 0; i < array2.length; i++) {
      couples.push(array1[i], array2[i]);
    }
    return couples;
  }
}
console.log(matchmaker(girls, boys));

// prints: 'Eve','Joe','Ashley',  'Fred', 'Claire', 'Tom', 'Kat','Todd','Jane','Neef', undefined, 'Jeff'
