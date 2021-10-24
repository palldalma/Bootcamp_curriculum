// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

export class Animal {
  hunger: number;
  thirst: number;

  constructor(hunger: number = 50, thirst: number = 50) {
    this.hunger = hunger;
    this.thirst = thirst;
  }

  eat(): void {
    this.hunger = Math.round(this.hunger);
    this.hunger -= 1;
  }

  drink(): void {
    this.thirst = Math.round(this.thirst);
    this.thirst -= 1;
  }

  play(): void {
    this.hunger += 1;
    this.thirst += 1;
  }
}

let kitty = new Animal();

kitty.play();

console.log("the kitty's hunger is " + kitty.hunger, " the kitty's thirst is " + kitty.thirst);

let doggo = new Animal(12.3, 15.6);

doggo.drink();
doggo.eat();

console.log("doggo's thirst: " + doggo.thirst, "doggo's hunger: " + doggo.hunger);
