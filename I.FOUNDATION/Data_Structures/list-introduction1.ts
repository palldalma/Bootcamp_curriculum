// LIST INTRODUCTION 1

let names: string[] = [];
console.log(names.length);
names.push("William");
console.log(names.length);
names.push("John", "Amanda");
console.log(names.length);
console.log(names[2]);

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (let i = 0; i < names.length; i++) {
  console.log(i + 1 + ". " + names[i]);
}

names.splice(1, 1);

for (let i = names.length - 1; i >= 0; i--) {
  console.log(names[i]);
}

names.splice(0);
console.log(names);
