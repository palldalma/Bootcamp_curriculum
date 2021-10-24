import { Pirate } from '/Users/dalmapall/Desktop/TS/homework/OOP/pirates/pirates';
import { Ship } from '/Users/dalmapall/Desktop/TS/homework/OOP/pirates/ship';

class BattleApp {
  shipSetUp(): void {
    let ship1 = new Ship();
    let ship2 = new Ship();

    let crew1MembersNum: number = Math.floor(Math.random() * 3) + 1;
    let crew2MembersNum: number = Math.floor(Math.random() * 3) + 1;

    function completeShip(ship: Ship, staff: number) {
      for (let i = 0; i < staff; i++) {
        if (i === 0) {
          let captain: Pirate = new Pirate(true);
          ship.fillShip(captain);
        } else {
          let newCrewMember: Pirate = new Pirate();
          ship.fillShip(newCrewMember);
        }
      }
    }

    completeShip(ship1, crew1MembersNum);
    completeShip(ship2, crew2MembersNum);

    console.log(ship1.battle(ship2));
    console.log(ship1, ship2);
  }
}

let firstBattle: BattleApp = new BattleApp();

firstBattle.shipSetUp();
