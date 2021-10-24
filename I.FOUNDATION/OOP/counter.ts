export class Counter {
  integer: number;
  initialValue: number;

  constructor(integer: number = 0) {
    this.integer = integer;
    this.initialValue = integer;
  }

  add(number?: number): number {
    if (number) {
      Math.round((this.integer += number));
    } else {
      this.integer += 1;
    }
    return this.integer;
  }

  get(): number {
    return this.integer;
  }

  reset(): void {
    this.integer = this.initialValue;
  }
}

let test = new Counter(23);

console.log(test.add());
