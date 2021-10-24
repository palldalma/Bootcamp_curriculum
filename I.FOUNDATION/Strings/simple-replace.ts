export {};
let example: string = "In a dishwasher far far away.";

let example2: string[] = example.split(" ");
example2.splice(example2.indexOf("dishwasher"), 1, "galaxy");
example = example2.join(" ");

console.log(example);
