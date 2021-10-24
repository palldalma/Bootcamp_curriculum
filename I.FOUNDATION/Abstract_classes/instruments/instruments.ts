export abstract class Instrument {
  protected name: string;

  play() {} // with the help of the sound() the play() method is fully implementable
}

export abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;

  abstract sound(): string;

  play() {
    console.log(
      `${this.name}, a ${
        this.numberOfStrings
      }-stringed instrument that goes ${this.sound()}`
    );
  }
}

export class ElectricGuitar extends StringedInstrument {
  name = "Electric Guitar";

  constructor(numberOfString?: number) {
    super();
    if (numberOfString) {
      this.numberOfStrings = numberOfString;
    } else this.numberOfStrings = 6;
  }

  sound() {
    if (this.numberOfStrings === 6) {
      return "Twang";
    } else return "Twangg";
  }
}

export class BassGuitar extends StringedInstrument {
  name = "Bass Guitar";

  constructor(numberOfString?: number) {
    super();
    if (numberOfString) {
      this.numberOfStrings = numberOfString;
    } else this.numberOfStrings = 4;
  }

  sound() {
    return "Duum-duum-duum";
  }
}

export class Violin extends StringedInstrument {
  name = "Violin";
  numberOfStrings = 4;

  sound() {
    return "Screech";
  }
}
