// Create a Station and a Car classes
// Station
// gasAmount -> available gas amount of the gas station
// refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
// gasAmount -> gas amount of the car
// capacity -> capacity of the fuel tank
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100

class Station {
  name: string;
  gasAmount: number = 1000;

  constructor(name: string) {
    this.name = name;
  }

  refill(car: Car) {
    this.gasAmount -= car.capacity;
    car.gasAmount += car.capacity;
  }
}

class Car {
  gasAmount: number;
  capacity: number;

  constructor(gasAmount: number = 0, capacity: number = 100) {
    this.gasAmount = gasAmount;
    this.capacity = capacity;
  }
}

let petrolstation = new Station('Shell');
let car = new Car();

console.log('original amount' + ' petrol station ' + petrolstation.gasAmount + ' car ' + car.gasAmount);

petrolstation.refill(car);

console.log('after refill' + ' petrol station ' + petrolstation.gasAmount + ' car ' + car.gasAmount);
