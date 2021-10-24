export {};

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 },
];

// Who has got more candies than 4 candies?
function Candylovers(array: any[]): void {
  let candyLoversNames: string[] = [];
  array.forEach((element) => {
    if (element.candies > 4) {
      candyLoversNames.push(element.name);
    }
  });
  console.log(candyLoversNames);
}

Candylovers(students);

//how many candies do they have on average?

function candyaverage(array: any[]): void {
  let candycount: number = 0;

  array.forEach((element): number => (candycount += element.candies));
  console.log(candycount / array.length);
}

candyaverage(students);
