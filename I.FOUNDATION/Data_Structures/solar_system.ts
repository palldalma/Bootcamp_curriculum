let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];

function putSaturn(inputArray: string[]) {
  inputArray.splice(5, 0, 'Saturn');
  return inputArray;
}

console.log(putSaturn(planetList));
