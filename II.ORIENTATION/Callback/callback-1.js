//exercise1

const mapWith = (array, callback) => {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
  return output;
};

const addOne = (number) => {
  return number + 1;
};

console.log(mapWith([1, 2, 3], addOne));

//exercise2

const removeSecondLetter = (word) => {
  let newWord = [];

  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      newWord.push(word[i]);
    }
  }
  let result = newWord.join("");

  return result;
};

const words = ["map", "reduce", "filter"];

console.log(mapWith(words, removeSecondLetter));
