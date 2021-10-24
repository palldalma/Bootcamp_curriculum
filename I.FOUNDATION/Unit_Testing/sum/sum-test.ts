import * as test from "tape";
import { Nums } from "/Users/dalmapall/Desktop/Greenfox/Unit_Testing/sum/sum";

let numArray: number[] = [1, 2, 3, 4];
let emptyList: number[] = [];
let listWithOneElement: number[] = [234];

test("return sum of the number array", (t) => {
  let firstSum = new Nums();
  let actual = firstSum.returnSum(listWithOneElement);
  let expected = 234;
  t.equal(actual, expected);
  t.end();
});
