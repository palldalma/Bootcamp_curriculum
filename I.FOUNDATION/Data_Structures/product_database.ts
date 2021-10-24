let products = {
  Eggs: 200,
  Milk: 200,
  Fish: 400,
  Apples: 150,
  Bread: 50,
  Chicken: 550,
};

//How much is the fish?

console.log(products['Fish']);

//What is the most expensive product?

// const max = Math.max.apply(null, Object.values(products));
// console.log(max)

let max: number = 0;

for (let product of Object.values(products)) {
  if (product > max) {
    max = product;
  }
}

console.log(Object.keys(products).find((key) => products[key] === max));

//What is the average price?

let sumOfProducts = 0;

for (let product of Object.values(products)) {
  sumOfProducts += product;
}

let average: number = sumOfProducts / Object.values(products).length;

console.log(average);

//How many products' price is below 300?

let productsBelow300 = 0;

for (let product of Object.values(products)) {
  if (product < 300) {
    productsBelow300 += 1;
  }
}
console.log(productsBelow300);

// Is there anything we can buy for exactly 125?

let buyFor125: boolean = false;

for (let product of Object.values(products)) {
  if (product === 125) {
    buyFor125 = true;
  }
}
console.log(buyFor125);

// What is the cheapest product?

let min: number = Number.MAX_SAFE_INTEGER;

for (let product of Object.values(products)) {
  if (product < min) {
    min = product;
  }
}

console.log(Object.keys(products).find((key) => products[key] === min));
