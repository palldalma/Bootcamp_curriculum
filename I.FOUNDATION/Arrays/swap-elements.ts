export {};

let names: string[] = ['Arthur', 'Boe', 'Chloe'];
let newOrder: string[] = [];

for (let i = 0; i < names.length; i++) {
  newOrder.push(names[i]);
}

newOrder.splice(0, 1, names[2]);
newOrder.splice(2, 1, names[0]);

names = newOrder;
