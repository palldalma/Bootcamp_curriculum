export class Sharpie {
  color: string;
  width: number;
  inkAmount: number;

  constructor(color: string, width: number, inkAmount: number = 100) {
    this.color = color;
    this.width = parseFloat(width.toFixed(2));
    this.inkAmount = parseFloat(inkAmount.toFixed(2));
  }

  use(inkUsed: number): void {
    this.inkAmount -= inkUsed;
  }
}

let sharpie1 = new Sharpie('purple', 40.23);

sharpie1.use(13.9);

// console.log(sharpie1.inkAmount); prints 86.1
