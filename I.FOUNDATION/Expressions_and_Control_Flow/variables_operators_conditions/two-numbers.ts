class Operations {
  _a: number;
  _b: number;

  constructor(a: number, b: number) {
    this._a = a;
    this._b = b;
  }

  add() {
    return this._a + this._b;
  }

  substract() {
    return this._a - this._b;
  }

  multiply() {
    return this._a * this._b;
  }

  divide() {
    let x: string = (this._a / this._b).toFixed(1);
    let y: number = +x; //the string is converted back to a number
    return y;
  }

  modulo() {
    return this._a % this._b;
  }
}

let task1 = new Operations(22, 13);

console.log(task1.add());
console.log(task1.substract());
console.log(task1.multiply());
console.log(task1.divide());
console.log(task1.modulo());
