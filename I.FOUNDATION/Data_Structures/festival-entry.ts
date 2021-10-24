const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

type FestivalGoer = {
  name: string;
  alcohol: number;
  guns: number;
};

const queue: FestivalGoer[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 },
];

function securityCheck(array: any[]) {
  array.forEach((element) => {
    if (element.alcohol > 0 && element.guns > 0) {
      securityAlcoholLoot += element.alcohol;
      watchlist.push(element.name);
      delete element.name;
      delete element.alcohol;
      delete element.guns;

      //array.splice (array.indexOf (element), 1); - nem jó
    } else if (element.guns > 0 && element.alcohol === 0) {
      watchlist.push(element.name);
      delete element.name;
      delete element.alcohol;
      delete element.guns;

      //array.splice (array.indexOf (element), 1);
    } else if (element.alcohol > 0 && element.guns === 0) {
      securityAlcoholLoot += element.alcohol;
      element.alcohol = 0;
    }
  });
  return array;
}
console.log(securityCheck(queue));

// [
//     {},
//     { name: 'Mark', alcohol: 0, guns: 0 },
//     {},
//     {},
//     { name: 'Anna', alcohol: 0, guns: 0 },
//     { name: 'Rob', alcohol: 0, guns: 0 },
//     { name: 'Joerg', alcohol: 0, guns: 0 }
//   ]

console.log(securityCheck(watchlist)); // [ 'Amanda', 'Dolores', 'Wade' ]
console.log(securityAlcoholLoot); // 43
