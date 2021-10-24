export abstract class Animal {
  protected name: string;
  protected age: string;
  protected gender: number;
  protected coat: string;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
  abstract breed();
  sleep(): void {
    console.log(`The ${this.name} is sleeping`);
  }
}

export class Mammal extends Animal {
  breed() {
    return `pushing miniature versions out.`;
  }

  setCoat(coat: string) {
    if (coat === "fur" || "feather" || "scales" || "plain skin") {
      this.coat = coat;
    } else throw new Error(`A ${this.name} can not be covered by ${coat}.`);
  }
}

export class Bird extends Animal {
  readonly coat = "feather";
  breed() {
    return `laying eggs.`;
  }
}

export class Reptile extends Animal {
  breed() {
    return `by laying eggs.`;
  }

  setCoat(coat: string) {
    if (coat === "scales" || "plain skin") {
      this.coat = coat;
    } else throw new Error(`A ${this.name} can not be covered by ${coat}.`);
  }
}
