import * as test from "tape";
import { anagram } from "/Users/dalmapall/Desktop/Greenfox/Unit_Testing/anagram/anagram";

test("getting an apple string", (t) => {
  let actual = anagram("Dalma", "amLad");
  let expected = true;
  t.equal(actual, expected);
  t.end();
});
