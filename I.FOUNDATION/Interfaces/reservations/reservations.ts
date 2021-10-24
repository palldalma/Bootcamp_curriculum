class Reservation implements Reservationy {
  reservations: SingleBooking[] = [];

  constructor(numberOfBookings: number) {
    for (let i = 0; i < numberOfBookings; i++) {
      let newbooking = new SingleBooking();
      this.reservations.push(newbooking);
    }
  }

  getStatus() {
    for (let i = 0; i < this.reservations.length; i++) {
      console.log(
        `Booking# ${this.reservations[i].id} for ${this.reservations[i].day}`
      );
    }
  }
  getDowBooking(): string {
    let daysBooked: string[] = [];
    for (let i in this.reservations) {
      if (!daysBooked.includes(this.reservations[i].day)) {
        daysBooked.push(this.reservations[i].day);
      }
    }
    return daysBooked.join(" ");
  }
  getCodeBooking(): string {
    let reservationCodes: string[] = [];
    for (let i = 0; i < this.reservations.length; i++) {
      reservationCodes.push(this.reservations[i].id);
    }
    return reservationCodes.join(" ");
  }
}

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class SingleBooking {
  readonly id: string = this.createID();
  readonly day: string = this.createDay();

  createID(): string {
    let randomizedArrayOf8Char: string[] = [];
    let possibleCharacters: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(
      ""
    );

    for (let i = 0; i < 8; i++) {
      randomizedArrayOf8Char.push(
        possibleCharacters[
          Math.floor(Math.random() * possibleCharacters.length)
        ]
      );
    }
    let result: string = randomizedArrayOf8Char.join("");
    return result;
  }

  createDay(): string {
    let daysOfTheWeek: string[] = [
      "MON",
      "TUE",
      "WED",
      "THU",
      "FRI",
      "SAT",
      "SUN",
    ];
    return daysOfTheWeek[Math.floor(Math.random() * daysOfTheWeek.length)];
  }
}

let reservations = new Reservation(10);

reservations.getStatus();

console.log(reservations.getDowBooking());
console.log(reservations.getCodeBooking());
