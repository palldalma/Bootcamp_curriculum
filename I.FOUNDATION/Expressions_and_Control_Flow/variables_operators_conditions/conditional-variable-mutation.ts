export {};

//task a
let a: number = 24;
let output1: number = 0;

if (a % 2 === 0) {
  output1++;
}

// if a is even increment output1 by one
console.log(output1);

//task b
let b: number = 13;
let output2: string = "";

if (b >= 10 || b <= 20) {
  output2 = "Sweet!";
} else if (b < 10) {
  output2 = "Less!";
} else {
  output2 = "More!";
}
// if b is between 10 and 20 set output2 to "Sweet!"
// if less than 10 set output2 to "Less!",
// if more than 20 set output2 to "More!"

console.log(output2);

//task c
let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

if (credits >= 50 && isBonus === false) {
  c -= 2;
} else if (credits < 50 && isBonus === false) {
  c--;
} else {
}

// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same

console.log(c);

//task d
let d: number = 8;
let time: number = 120;
let output3: string = "";

if (d % 4 === 0 && time < 200) {
  output3 = "Check";
} else if (time > 200) {
  output3 = "Time out";
} else {
  output3 = "Run Forest Run!";
}

// if d is dividable by 4
// and time is not more than 200
// set output3 to "check"
// if time is more than 200
// set output3 to "Time out"
// otherwise set output3 to "Run Forest Run!"
console.log(output3);
