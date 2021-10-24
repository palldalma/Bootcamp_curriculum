import { Garden, Flower, Tree } from "./garden-application";

let myGarden: Garden = new Garden();
let yellowFlower: Flower = new Flower("yellow", myGarden);
let blueFlower: Flower = new Flower("blue", myGarden);

let purpleTree: Tree = new Tree("purple", myGarden);
let orangeTree: Tree = new Tree("orange", myGarden);

myGarden.showGarden();

console.log();

myGarden.water(40);

myGarden.showGarden();

console.log();

myGarden.water(70);

myGarden.showGarden();
