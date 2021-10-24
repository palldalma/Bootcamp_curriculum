//PRINT ELEMENTS

export {};

let numbers = [4, 5, 6, 7];

numbers.forEach(function (e, i) {
  console.log(e);
});

//Hogyan kéne ugyanezt loop-pal?

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
