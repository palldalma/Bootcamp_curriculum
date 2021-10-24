let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

function sweets(array: any) {
  array.splice(1, 1, 'Croissant');
  array.splice(3, 1, 'Ice cream');

  return array;
}

console.log(sweets(shopItems));
