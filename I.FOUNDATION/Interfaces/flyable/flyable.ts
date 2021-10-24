import { Animal } from "/Users/dalmapall/Desktop/Greenfox2/Abstract_classes/zoo/zoo";

interface Flyable {
  land();
  fly();
  takeOff();
}

abstract class Vehicle {
  abstract name: string;
  abstract speed: number;
  abstract surfaceToUseOn: string;
}

class Helicopter extends Vehicle implements Flyable {
  name = "Helicopter";
  speed = 260;
  surfaceToUseOn = "air";

  land(): void {}
  fly(): void {}
  takeOff(): void {}
}

class Bird extends Animal implements Flyable {
  readonly coat = "feather";
  breed() {
    return `laying eggs.`;
  }
  land(): void {}
  fly(): void {}
  takeOff(): void {}
}
