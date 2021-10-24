//  Create a function that takes a string and a list of string as a parameter
//  Returns the index of the string in the list where the first string is part of
//  Only need to find the first occurence and return the index of that
//  Returns `-1` if the string is not part any of the strings in the list

function substrlist(stringToBeFound: string, arrayToSearch: string[]): number {
  for (let i = 0; i < arrayToSearch.length; i++) {
    if (arrayToSearch[i].includes(stringToBeFound.valueOf())) {
      return i;
    } else return -1;
  }
}

console.log(substrlist('ching', ['this', 'is', 'what', "I'm", 'searching', 'in']));
