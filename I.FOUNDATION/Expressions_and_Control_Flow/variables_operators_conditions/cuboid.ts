// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000
export {};
class Cuboid {
  edges: number;

  constructor(edges: number = 10) {
    this.edges = edges;
  }
  surface(): number {
    return this.edges * this.edges * 6;
  }
  volume(): number {
    return this.edges ** 3;
  }
}

let cube1 = new Cuboid();
console.log("surface:" + cube1.surface());
console.log("volume:" + cube1.volume());
