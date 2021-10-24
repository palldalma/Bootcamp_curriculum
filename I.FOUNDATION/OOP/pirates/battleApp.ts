import { Pirate } from '/Users/dalmapall/Desktop/TS/homework/OOP/pirates/pirates';
import { Ship } from '/Users/dalmapall/Desktop/TS/homework/OOP/pirates/ship';





//crew of first ship
let captain1 = new Pirate(true);
let pirate2 = new Pirate();
let pirate3 = new Pirate();

let ship1 = new Ship();

ship1.fillShip(captain1);
ship1.fillShip(pirate2);
ship1.fillShip(pirate3);

//crew of second ship
let captain2 = new Pirate(true);
let pirateB = new Pirate();
let pirateB2 = new Pirate();
let pirateB3 = new Pirate();
let pirateB4 = new Pirate();

let ship2 = new Ship();

ship2.fillShip(captain2);
ship2.fillShip(pirateB);
ship2.fillShip(pirateB2);
ship2.fillShip(pirateB3);
ship2.fillShip(pirateB4);

//battle
captain2.drinkSomeRum();
captain2.drinkSomeRum();
captain2.drinkSomeRum();

console.log(ship1, ship2);

ship1.battle(ship2);

console.log(ship1, ship2);
