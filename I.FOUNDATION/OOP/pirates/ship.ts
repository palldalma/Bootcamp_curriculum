import { Pirate } from '/Users/dalmapall/Desktop/TS/homework/OOP/pirates/pirates';

export class Ship {
  private crew: Pirate[] = [];

  fillShip(newPirate: Pirate): void {
    if (this.crew.length === 0 && newPirate.captain === true) {
      this.crew.push(newPirate);
    } else if (this.crew.length >= 1 && this.crew[0].captain === true && newPirate.captain !== true) {
      //newPirate.captain = false;
      this.crew.push(newPirate);
    } else console.log(`crew member cannot be added.`);
  }

  getinfo(): void {
    console.log(`captain's rum level: ${this.crew[0].intoxicated}, captain's state: ${this.crew[0].state}`);
    console.log(`num of pirates alive: ${this.crew.length}`);
  }

  battle(otherShip: Ship): boolean {
    function crewAlive(shipToCheck: Ship): number {
      let sumAlive: number = 0;
      for (let i = 0; i < shipToCheck.crew.length; i++) {
        if (shipToCheck.crew[i].state !== 'dead') {
          sumAlive++;
        }
      }
      return sumAlive;
    }

    let homeShipScore: number = crewAlive(this) - this.crew[0].intoxicated;
    let opponentShipScore: number = crewAlive(otherShip) - otherShip.crew[0].intoxicated;

    if (homeShipScore >= opponentShipScore) {
      let totalLossesOfOpponent: number = Math.floor(Math.random() * otherShip.crew.length) + 1;
      let intoxicationLevelIncrease: number = Math.floor(Math.random() * 3) + 1;

      console.log(intoxicationLevelIncrease);
      console.log(totalLossesOfOpponent);

      for (let i = 0; i < totalLossesOfOpponent; i++) {
        otherShip.crew[i].state = 'dead';
      }

      //partyHome
      for (let i = 0; i < this.crew.length; i++) {
        if (this.crew[i].state !== 'dead') {
          for (let j = 0; j < intoxicationLevelIncrease; j++) {
            this.crew[i].drinkSomeRum();
          }
        }
      }

      return true;
    }
    let totalLossesOfHomeTeam: number = Math.floor(Math.random() * this.crew.length) + 1;
    let intoxicationLevelIncrease: number = Math.floor(Math.random() * 3) + 1;

    console.log(intoxicationLevelIncrease);
    console.log(totalLossesOfHomeTeam);

    for (let i = 0; i < totalLossesOfHomeTeam; i++) {
      this.crew[i].state = 'dead';
    }

    //partyOpponent
    for (let i = 0; i < otherShip.crew.length; i++) {
      if (otherShip.crew[i].state !== 'dead') {
        for (let j = 0; j < intoxicationLevelIncrease; j++) {
          otherShip.crew[i].drinkSomeRum();
        }
      }
    }

    return false;
  }
}
