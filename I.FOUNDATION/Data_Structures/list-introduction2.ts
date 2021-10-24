// LIST INTRODUCTION 2
//Create a list ('List A') which contains the following values

let ListA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

//Create a new list ('List B') with the values of List A
//let ListB: string[] = Array.from(ListA);

let ListB: string[] = [];

for (let i = 0; i < ListA.length; i++) {
  ListB.push(ListA[i]);
}

console.log('elements of ListB: ' + ListB);

//Print out whether List A contains Durian or not

console.log(ListA.includes('Durian'));

//Remove "Durian" from List B

// let indexValueofDurian: number = ListB.indexOf("Durian");

ListB.splice(ListB.indexOf('Durian'), 1);

//Add Kiwifruit to List A after the 4th element
ListA.splice(4, 0, 'Kiwifruit');

console.log(ListA);

//Compare the size of List A and List B

function compareArrays(array1: string[], array2: string[]): void {
  if (array1.length > array2.length) {
    console.log('the First array is longer than the second array with a size of ' + array1.length);
  } else if (array1.length === array2.length) {
    console.log('The length of these array is equal');
  } else console.log('the second array is longer than the first array');
}

compareArrays(ListA, ListB);

// Get the index of Avocado from List A
console.log(ListA.indexOf('Avocado'));

//Get the index of Durian from List B
console.log(ListB.indexOf('Durian')); //prints -1

//Add Passion Fruit and Pomelo to List B in a single statement
ListB.push('Passion Fruit', 'Pomelo');

//Print out the 3rd element from List A
console.log(ListA[2]);

console.log(ListA, ListB);
