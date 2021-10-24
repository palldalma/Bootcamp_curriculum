const ingredients: any[] = [
  { name: 'vodka', inStock: 1, needsCooling: true },
  { name: 'coffee_liqueur', inStock: 0, needsCooling: true },
  { name: 'fresh_cream', inStock: 1, needsCooling: true },
  { name: 'captain_morgan_rum', inStock: 2, needsCooling: true },
  { name: 'mint_leaves', inStock: 0, needsCooling: false },
  { name: 'sugar', inStock: 0, needsCooling: false },
  { name: 'lime juice', inStock: 0, needsCooling: true },
  { name: 'soda', inStock: 0, needsCooling: true },
];

console.log('+--------------------+---------------+----------+');
console.log('| Ingredient         | Needs cooling | In stock |');
console.log('+--------------------+---------------+----------+');

for (let i = 0; i < ingredients.length; i++) {
  let line: string = '';

  line += '| ';
  line += ingredients[i].name;

  for (let j = ingredients[i].name.length; j < 19; j++) {
    line += ' ';
  }
  line += '| ';
  if (ingredients[i].needsCooling === true) {
    line += 'yes';
    for (let k = 0; k < 11; k++) {
      line += ' ';
    }
  } else {
    line += 'no';
    for (let k = 0; k < 12; k++) {
      line += ' ';
    }
  }
  line += '| ';

  if (ingredients[i].inStock === 0) {
    line += '-';
  } else {
    line += ingredients[i].inStock;
  }

  for (let k = 0; k < 8; k++) {
    line += ' ';
  }
  line += '|';

  console.log(line);
}
console.log('+--------------------+---------------+----------+');
