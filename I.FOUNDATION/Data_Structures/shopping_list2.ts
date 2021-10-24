let groceries = {
  Milk: 1.07,
  Rice: 1.59,
  Eggs: 3.14,
  Cheese: 12.6,
  'Chicken Breasts': 9.4,
  Apples: 2.31,
  Tomato: 2.58,
  Potato: 1.75,
  Onion: 1.1,
};

let bob = {
  Milk: 3,
  Rice: 2,
  Eggs: 2,
  Cheese: 1,
  'Chicken Breasts': 4,
  Apples: 1,
  Tomato: 2,
  Potato: 1,
};

let alice = {
  Rice: 1,
  Eggs: 5,
  'Chicken Breasts': 2,
  Apples: 1,
  Tomato: 10,
};

//How much does Bob pay?

let BobsCostsPerItem: number[] = [];

for (let j = 0; j < Object.keys(groceries).length; j++) {
  for (let i = 0; i < Object.keys(bob).length; i++) {
    if (Object.keys(groceries)[j] === Object.keys(bob)[i]) {
      BobsCostsPerItem.push(Object.values(groceries)[j] * Object.values(bob)[i]);
    }
  }
}
console.log(BobsCostsPerItem); // prints 3.21, 3.18, 6.28, 12.6, 37.6, 2.31, 5.16, 1.75

let Bobsum: number = 0;

for (let i = 0; i < BobsCostsPerItem.length; i++) {
  Bobsum += BobsCostsPerItem[i];
}

console.log(Bobsum); // prints 72.09

// How much does Alice pay?

let AlicesCostsPerItem: number[] = [];

for (let j = 0; j < Object.keys(groceries).length; j++) {
  for (let i = 0; i < Object.keys(alice).length; i++) {
    if (Object.keys(groceries)[j] === Object.keys(alice)[i]) {
      AlicesCostsPerItem.push(Object.values(groceries)[j] * Object.values(alice)[i]);
    }
  }
}

console.log(AlicesCostsPerItem); // prints 1.59, 15.700000000000001, 18.8, 2.31, 25.8

let Alicesum: number = 0;

for (let i = 0; i < AlicesCostsPerItem.length; i++) {
  Alicesum += AlicesCostsPerItem[i];
}

console.log(Alicesum); // prints 64.2

// Who buys more Rice?

if (bob['Rice'] > alice['Rice']) {
  console.log('Bob buys more rice');
} else if (bob['Rice'] === alice['Rice']) {
  console.log('They buy the same amount.');
} else console.log('Alice buys more Rice than Bob.'); // prints: Bob buys more rice

// Who buys more Potato?

if (bob.hasOwnProperty('Potato') && alice.hasOwnProperty('Potato')) {
  if (bob['Potato'] > alice['Potato']) {
    console.log('Bob buys more potato');
  } else if (bob['Potato'] === alice['Potato']) {
    console.log('They buy the same amount.');
  } else console.log('Alice buys more Rice than Bob.');
} else if (!(bob.hasOwnProperty('Potato') && alice.hasOwnProperty('Potato'))) {
  console.log('It is not comparable');
} //prints: It is not comparable

//Who buys more different products?

if (Object.keys(bob).length > Object.keys(alice).length) {
  console.log('Bob buys more different products');
} else if (Object.keys(bob).length < Object.keys(alice).length) {
  console.log('Alice buys more different products');
} else console.log('They buy the same amount of different products.'); // prints: Bob buys more different products

//Who buys more products? (piece)

let bobsPieces: number[] = [];
let alicesPieces: number[] = [];

for (let i = 0; i < Object.keys(bob).length; i++) {
  bobsPieces.push(Object.values(bob)[i]);
}

for (let i = 0; i < Object.keys(alice).length; i++) {
  alicesPieces.push(Object.values(alice)[i]);
}

let sumOfBobsPieces: number = 0;
let sumOfAlicesPieces: number = 0;

for (let i = 0; i < bobsPieces.length; i++) {
  sumOfBobsPieces += bobsPieces[i];
}

for (let i = 0; i < alicesPieces.length; i++) {
  sumOfAlicesPieces += alicesPieces[i];
}

if (sumOfBobsPieces > sumOfAlicesPieces) {
  console.log('Bob buys more products per piece');
} else if (sumOfBobsPieces < sumOfAlicesPieces) {
  console.log('Alice buys more products per piece');
} else console.log('They buy the same amount of products per piece'); // prints: Alice buys more products per piece
