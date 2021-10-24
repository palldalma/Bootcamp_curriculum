let productsPrices = {
  Eggs: 200,
  Milk: 200,
  Fish: 400,
  Apples: 150,
  Bread: 50,
  Chicken: 550,
};

// Which products cost less than 201? (just the name)

let lessThan201: string[] = [];

for (let i = 0; i < Object.values(productsPrices).length; i++) {
  if (Object.values(productsPrices)[i] < 201) {
    lessThan201.push(Object.keys(productsPrices)[i]);
  }
}
console.log(lessThan201);

// Which products cost more than 150? (name + price)

let answer = {};

Object.assign(answer, productsPrices);

let lessThan150: string[] = [];

for (let i = 0; i < Object.values(productsPrices).length; i++) {
  if (Object.values(productsPrices)[i] <= 150) {
    lessThan150.push(Object.keys(productsPrices)[i]);
  }
}

lessThan150.forEach((e) => delete answer[e]);
// TESTING
productsPrices['Butter'] = 20;
console.log(answer);
