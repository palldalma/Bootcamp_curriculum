import { Domino } from './domino';

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

function print(dominoes: Domino[]) {
  dominoes.forEach(function (value) {
    console.log(value);
  });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

// print(dominoes);

function printInOrder(dominoArray: Domino[]): Domino[] {
  let resultArray: Domino[] = [dominoArray[0]];

  for (let i = 0; i < dominoArray.length; i++) {
    for (let j = 1; j < dominoArray.length; j++) {
      if (dominoArray[i].values[1] === dominoArray[j].values[0] && resultArray.length < dominoArray.length) {
        resultArray.push(dominoArray[j]);
      }
      for (let k = 0; k < dominoArray.length; k++) {
        if (
          resultArray[resultArray.length - 1].values[1] === dominoArray[k].values[0] &&
          !resultArray.includes(dominoArray[k])
        ) {
          resultArray.push(dominoArray[k]);
        }
      }
    }
  }
  return resultArray;
}

console.log(printInOrder(dominoes));

// function bubble(arrayExpected) {
//     for (let i = 0; i < arrayExpected.length; i++) {
//       for (let j = 0; j < arrayExpected.length - 1; j++) {
//         if (arrayExpected[j] > arrayExpected[j + 1]) {
//           // ITT HONNAN TUDJA, HOGY AZ INDEX ÉRTÉKÉT AKARJUK HOZZÁADNI ÉS NEM EGYET, MINT ÉRTÉKET?
//           let swappedElement = arrayExpected[j];
//           arrayExpected[j] = arrayExpected[j + 1];
//           arrayExpected[j + 1] = swappedElement;
//         }
//       }
//     }
//     return arrayExpected;
//   }

// function solveDominoes(dominoes: Domino[]): void {
//     for (let d: number = 1; d <= dominoes.length - 2; d++) {
//       for (
//         let mod: number = dominoes.length - 1;
//         dominoes[d].values[0] !== dominoes[d - 1].values[1];
//         mod--
//       )
//         [dominoes[d], dominoes[mod]] = [dominoes[mod], dominoes[d]];
//     }
//   }
