//4 different solutions are below

//WHILE LOOP

let animals = ['koal', 'pand', 'zebr', 'anacond', ' bo'];
let i = 0;

while (i < animals.length) {
  animals[i] += 'a';
  i++;
}

console.log(animals);

//FOR LOOP

for (let i = 0; i < animals.length; i++) {
  animals[i] += 'a';
}

//MAP METHOD

animals.map(function (e, i) {
  animals[i] += 'a';
});

console.log(animals);

//FOREACH METHOD

animals.forEach(function (e, i) {
  animals[i] += 'a';
});

console.log(animals);
