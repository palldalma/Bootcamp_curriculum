export function anagram(original: string, anagram: string) {
  let originalSplit: string[] = original.toLowerCase().split("");
  let anagramSplit: string[] = anagram.toLowerCase().split("");

  if (originalSplit.length === anagramSplit.length) {
    for (let i = 0; i < originalSplit.length; i++) {
      if (anagramSplit.includes(originalSplit[i])) {
        console.log(originalSplit[i], originalSplit, anagramSplit);
        let identicalLetter: number[] = [];
        identicalLetter.push(anagramSplit.indexOf(originalSplit[i]));
        anagramSplit.splice(identicalLetter[0], 1);
      } else return false;
    }
    return true;
  } else return false;
}

console.log(anagram("alma", "Dalma"));
