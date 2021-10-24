//PERSONAL FINANCE

let expenses: number [] = [500, 1000, 1250, 175, 800, 120];
let sum: number = 0;

//How much did we spend?
for (let expense of expenses) {
    sum += expense;
}

console.log (sum);

//Which was our greatest expense?
console.log(Math.max(...expenses));

//Which was our cheapest spending?
console.log(Math.min(...expenses));

//What was the average amount of our spendings?
console.log (sum/expenses.length);