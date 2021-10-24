export class Pirate {
  intoxicated: number = 0;
  state: string = 'alive';
  captain: boolean;
  hasParrot: boolean;

  constructor(captain?: boolean) {
    this.captain = captain;
    if (this.captain === true) {
      this.hasParrot = true;
    } else {
      this.hasParrot = false;
      this.captain = false;
    }
  }

  drinkSomeRum() {
    if (this.state === 'dead') {
      console.log(`He's dead`);
    } else this.intoxicated++;
  }

  howsItGoingMate() {
    if (this.state === 'dead') {
      console.log(`He's dead`);
    } else if (this.intoxicated < 5) {
      console.log(`Pour me anudder!`);
      this.intoxicated++;
    } else {
      console.log(`Arghh, I'ma Pirate. How d'ya d'ink its goin?`);
      this.state = `passed out`;
      this.intoxicated = 0;
    }
  }

  die() {
    this.state = 'dead';
  }

  brawl(x: Pirate) {
    let possibleOutcomes: string[] = ['passed out', 'dead', 'alive'];
    let randomOutcome = possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];

    if (x.state !== 'dead' && this.state !== 'dead') {
      this.state = randomOutcome;
    } else console.log(`cannot fight a dead pirate`);

    if (this.state === 'dead') {
      x.state = 'alive';
    } else if (this.state === 'passed out') {
      x.state = this.state;
    } else x.state = 'dead';
  }
}
