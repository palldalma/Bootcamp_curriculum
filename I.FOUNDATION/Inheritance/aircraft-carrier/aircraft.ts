export class Aircraft {
  ammo: number = 0;
  maxAmmo: number;
  basedamage: number;
  type: string;
  intakeCapacity: number;

  // calculateDamage(): number {
  //   return this.basedamage * this.ammo;
  // }

  figth(): number {
    let damage: number = this.basedamage * this.ammo;
    return damage;
  }

  getType(): string {
    return this.type;
  }

  getStatus(): string {
    return `Type: ${this.type}, Ammo: ${this.ammo}, Base Damage: ${
      this.basedamage
    }, All Damage: ${this.figth()}`;
  }

  isPriority(): boolean {
    if (this.type === "F35") {
      return true;
    } else return false;
  }

  refill(externalAmmo: number): void {
    if (externalAmmo >= this.intakeCapacity) {
      externalAmmo -= this.intakeCapacity;
      this.ammo += this.intakeCapacity;
      //return externalAmmo;
    } else if (externalAmmo < this.intakeCapacity) {
      this.ammo += externalAmmo;
      externalAmmo -= externalAmmo;
    }
    //return externalAmmo;
  }
}

export class F16 extends Aircraft {
  maxAmmo: number = 8;
  basedamage: number = 30;
  type: string = "F16";
  intakeCapacity: number = this.maxAmmo - this.ammo;
}

export class F35 extends Aircraft {
  maxAmmo: number = 12;
  basedamage: number = 50;
  type: string = "F35";
  intakeCapacity: number = this.maxAmmo - this.ammo;
}

let f35: F35 = new F35();
let f16: F35 = new F16();

// console.log(f16.ammo, f16.intakeCapacity);
// f16.refill(6);
// console.log(f16.ammo, f16.intakeCapacity);

// console.log(f35.ammo, f35.intakeCapacity);
// f35.refill(6);
// console.log(f35.ammo, f35.intakeCapacity);
