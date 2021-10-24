export {};
let numArray: number[] = [3, 65, 4, 37, 8];
function bubble(arrayExpected: number[]): number[] {
  for (let i = 0; i < arrayExpected.length; i++) {
    for (let j = 0; j < arrayExpected.length - 1; j++) {
      if (arrayExpected[j] > arrayExpected[j + 1]) {
        let swappedElement = arrayExpected[j];
        arrayExpected[j] = arrayExpected[j + 1];
        arrayExpected[j + 1] = swappedElement;
      }
    }
  }
  return arrayExpected;
}

console.log(bubble(numArray));

//reversed - descending

function advancedBubble(
  arrayExpected: number[],
  isDescending: boolean
): number[] {
  if (isDescending === true) {
    for (let i = 0; i < arrayExpected.length; i++) {
      for (let j = 0; j < arrayExpected.length - 1; j++) {
        if (arrayExpected[j] < arrayExpected[j + 1]) {
          let swappedElement = arrayExpected[j];
          arrayExpected[j] = arrayExpected[j + 1];
          arrayExpected[j + 1] = swappedElement;
        }
      }
    }
    return arrayExpected;
  } else {
    return bubble(arrayExpected);
  }
}

console.log(bubble(numArray));
console.log(advancedBubble(numArray, false));
console.log(advancedBubble(numArray, true));
