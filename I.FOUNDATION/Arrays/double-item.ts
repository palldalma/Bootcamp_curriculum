let drinks = ["Gin", "Whiskey", "wine", "Beer"];

//with arr.forEach
drinks.forEach(function (e, i) {
  drinks[i] += e;
});

//with arr.map()

drinks.map(function (e, i) {
  drinks[i] += e;
});
console.log(drinks);
