export class Nums {
  returnSum(numArray: number[]): number {
    let sum: number = 0;
    for (let i = 0; i < numArray.length; i++) {
      sum += numArray[i];
    }
    return sum;
  }
}


