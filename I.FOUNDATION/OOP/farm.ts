// Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal

import { Animal } from '/Users/dalmapall/Desktop/TS/homework/OOP/animal';

class Farm {
  animals: Animal[] = [];
  slots: number;

  constructor(slots: number) {
    this.slots = slots;
  }

  breed(): void {
    if (this.slots !== 0) {
      this.animals.push(new Animal());
      this.slots--;
    }
  }

  slaughter(): void {
    for (let i = 0; i < this.animals.length; i++) {
      for (let j = 0; j < this.animals.length - 1; j++) {
        if (this.animals[j].hunger < this.animals[j + 1].hunger) {
          let temp: Animal = this.animals[j];
          this.animals[j] = this.animals[j + 1];
          this.animals[j + 1] = temp;
        }
      }
    }
    this.animals.splice(this.animals.length - 1, 1);
  }
}

let cow6 = new Animal(0, 30);
let cow = new Animal(10, 30);
let cow2 = new Animal(20, 30);
let cow3 = new Animal(30, 30);
let cow4 = new Animal(40, 30);
let cow5 = new Animal(50, 30);

let farm = new Farm(3);

farm.animals.push(cow);
farm.animals.push(cow2);
farm.animals.push(cow3);
farm.animals.push(cow4);
farm.animals.push(cow5);
farm.animals.push(cow6);

farm.slaughter();

farm.breed();
console.log(farm.slots);

console.log(farm.animals);
