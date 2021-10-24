import * as test from "tape";
import { Apples } from "/Users/dalmapall/Desktop/Greenfox/Unit_Testing/apples/apples";

test("getting an apple string", (t) => {
  let firstapple = new Apples();
  let actual = firstapple.getApple();
  let expected = "apple";
  t.equal(actual, expected);
  t.end();
});
