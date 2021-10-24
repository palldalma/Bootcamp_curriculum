export class Garden {
  flowers: Flower[] = [];
  trees: Tree[] = [];

  showGarden(): void {
    for (let i = 0; i < this.flowers.length; i++) {
      if (this.flowers[i].waterLevel < this.flowers[i].needForWater) {
        console.log(`The ${this.flowers[i].color} flower needs water.`);
      } else
        console.log(`The ${this.flowers[i].color} flower doesn't need water.`);
    }

    for (let i = 0; i < this.trees.length; i++) {
      if (this.trees[i].waterLevel < this.trees[i].needForWater) {
        console.log(`The ${this.trees[i].color} tree needs water.`);
      } else console.log(`The ${this.trees[i].color} tree doesn't need water.`);
    }
  }

  water(amount: number): void {
    let availableAmountForEachPlant: number =
      amount / (this.flowers.length + this.trees.length);

    for (let i = 0; i < this.flowers.length; i++) {
      if (this.flowers[i].waterLevel < this.flowers[i].needForWater) {
        this.flowers[i].waterLevel += (availableAmountForEachPlant / 100) * 75;
      } //else console.log(`The ${this.flowers[i].color} flower doesn't need water.`);
    }

    for (let i = 0; i < this.trees.length; i++) {
      if (this.trees[i].waterLevel < this.trees[i].needForWater) {
        this.trees[i].waterLevel += (availableAmountForEachPlant / 100) * 40;
      } // else console.log(`The ${this.trees[i].color} tree doesn't need water.`);
    }
  }
}

export class Flower {
  color: string;
  waterLevel: number = 0;
  readonly needForWater: number = 5;

  constructor(color: string, garden: Garden) {
    this.color = color;
    garden.flowers.push(this);
  }
}

export class Tree {
  color: string;
  waterLevel: number = 0;
  readonly needForWater: number = 10;

  constructor(color: string, garden: Garden) {
    this.color = color;
    garden.trees.push(this);
  }
}
