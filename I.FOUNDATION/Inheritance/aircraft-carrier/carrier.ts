import {
  Aircraft,
  F16,
  F35,
} from "/Users/dalmapall/Desktop/Greenfox/Inheritance/aircraft-carrier/aircraft";

class Carrier {
  private aircrafts: Aircraft[] = [];
  ammoStore: number;
  healthpoint: number;
  supplyNeed: number = 0; //megnézem mekkora supply kéne, ha az összes gépet feltölteném

  constructor(ammoStore: number, health: number) {
    this.ammoStore = ammoStore;
    this.healthpoint = health;
  }

  calculateSupplyNeed(): void {
    for (let i = 0; i < this.aircrafts.length; i++) {
      this.supplyNeed += this.aircrafts[i].maxAmmo - this.aircrafts[i].ammo;
    }
  }
  add(newAircraft: Aircraft): void {
    this.aircrafts.push(newAircraft);
  }

  fill(): void {
    this.calculateSupplyNeed();

    if (this.ammoStore >= this.supplyNeed) {
      for (let i = 0; i < this.aircrafts.length; i++) {
        this.aircrafts[i].refill(this.ammoStore);
        this.ammoStore -= this.aircrafts[i].intakeCapacity;
      }
    } else if (this.ammoStore < this.supplyNeed) {
      for (let i = 0; i < this.aircrafts.length; i++) {
        if (this.aircrafts[i].isPriority() === true) {
          this.aircrafts[i].refill(this.ammoStore);
          this.ammoStore -= this.aircrafts[i].intakeCapacity;
        }
      }
    } else throw new Error(`The ammoStore is empty.`);
  }

  fight(anotherCarrier: Carrier): void {
    let totalDamage: number = 0;
    for (let i = 0; i < this.aircrafts.length; i++) {
      totalDamage += this.aircrafts[i].figth();
      this.aircrafts[i].ammo = 0;
    }
    anotherCarrier.healthpoint -= totalDamage;
  }

  getStatus() {
    let totalDamage: number = 0;

    if (this.healthpoint > 0) {
      for (let i = 0; i < this.aircrafts.length; i++) {
        totalDamage += this.aircrafts[i].figth();
        console.log(this.aircrafts[i].getStatus());
      }
      return `HP: ${this.healthpoint}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.ammoStore}; Total damage: ${totalDamage} `;
    } else return `It's dead Jim :(`;
  }
}

//TESTING
let carrier1: Carrier = new Carrier(2300, 5000);
let f35_1: F35 = new F35();
let f35_2: F35 = new F35();
let f35_3: F35 = new F35();
let f35_4: F35 = new F35();

let f16_1: F16 = new F16();
let f16_2: F16 = new F16();
let f16_3: F16 = new F16();

carrier1.add(f35_1);
carrier1.add(f35_2);
carrier1.add(f35_3);

carrier1.add(f16_1);
carrier1.add(f16_2);

carrier1.fill();

let carrier2: Carrier = new Carrier(4000, 3000);
carrier2.add(f35_4);
carrier2.add(f16_3);

carrier2.fill();

carrier1.fight(carrier2);

carrier1.fill();

// console.log(carrier1.getStatus());
// console.log(carrier2.getStatus());

// carrier1.fight(carrier2);

// console.log(carrier1.getStatus());
// console.log();
// console.log(carrier2.getStatus());

// carrier2.fill();

// console.log(carrier2.getStatus());
