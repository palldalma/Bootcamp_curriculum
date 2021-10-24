export {};

//never work on the original array, copy it with the spread operator or slice()
let names = ["Arthur", "Boe", "Chloe"];

let names2 = [...names];
console.log(names2);

let names3 = names.slice();
names2[0] = names3[2];
names2[2] = names3[0];

names = names2;
console.log(names);
