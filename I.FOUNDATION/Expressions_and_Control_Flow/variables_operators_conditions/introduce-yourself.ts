let Dalma = {
  name: "Dalma Pall",
  age: 25,
  height: "173 cm",
};

let detailsAboutDalma: any[] = Object.values(Dalma);

for (let i = 0; i < detailsAboutDalma.length - 1; i++) {
  detailsAboutDalma[i] = detailsAboutDalma[i] + "\n";
}

let detailsInAString: string = detailsAboutDalma.join("");

console.log(detailsInAString);
