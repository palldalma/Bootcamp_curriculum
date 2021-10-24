import { Sharpie } from './sharpie';

// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

class SharpieSet {
  set: Sharpie[] = [];

  countUsable(): number {
    let usableSharpies: Sharpie[] = [];
    for (let i = 0; i < this.set.length; i++) {
      if (this.set[i].inkAmount > 0) {
        usableSharpies.push(this.set[i]);
      }
    }
    return usableSharpies.length;
  }

  removeTrash() {
    let trash: Sharpie[] = [];
    for (let i = 0; i < this.set.length; i++) {
      if (this.set[i].inkAmount === 0) {
        trash.push(this.set[i]);
      }
      for (let j = 0; j < trash.length; j++)
        if (this.set[i] === trash[j]) {
          this.set.splice(i, 1);
        }
    }
  }
}

let sharpie2 = new Sharpie('green', 40.23, 0);
let sharpie3 = new Sharpie('yellow', 40.23, 10);
let sharpie4 = new Sharpie('black', 40.23, 35);
let sharpie5 = new Sharpie('red', 40.23, 0);
let sharpie6 = new Sharpie('purple', 40.23, 4.35);
let sharpie7 = new Sharpie('brown', 40.23, 100);
let sharpie8 = new Sharpie('orange', 40.23);
let sharpie9 = new Sharpie('pink', 40.23, 99.99);
let sharpie10 = new Sharpie('magenta', 40.23, 0);

let sharpieSet1 = new SharpieSet();

sharpieSet1.set.push(sharpie2);
sharpieSet1.set.push(sharpie3);
sharpieSet1.set.push(sharpie4);
sharpieSet1.set.push(sharpie5);
sharpieSet1.set.push(sharpie6);
sharpieSet1.set.push(sharpie7);
sharpieSet1.set.push(sharpie8);
sharpieSet1.set.push(sharpie9);
sharpieSet1.set.push(sharpie10);

console.log(sharpieSet1);
console.log(sharpieSet1.countUsable());
sharpieSet1.removeTrash();
console.log(sharpieSet1);
