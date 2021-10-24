//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one

function findSubString(baseString: string, wordToSearchFor: string) {
  baseString = baseString.toLowerCase();
  wordToSearchFor = wordToSearchFor.toLowerCase();
  if (baseString.includes(wordToSearchFor)) {
    return baseString.indexOf(wordToSearchFor);
  } else return -1;
}

console.log(findSubString("Dalma Pall", "pall")); //prints 6
