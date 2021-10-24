let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

let reverse = (toBeReversed: string) => {
  let correctedText: string[] = [];
  let copy: string[] = toBeReversed.split("");

  for (let i = copy.length; i >= 0; i--) {
    correctedText.push(copy[i]);
  }

  return correctedText.join("");
};
console.log(reverse(toBeReversed));
