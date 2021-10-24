function drawPyramid(lineCount: number): void {
  let spaces: string = "";
  let stars: string = "*";
  for (let i = 0; i < lineCount; i++) {
    let numberOfSpaces: number = lineCount - i;
    for (let j = 0; j < numberOfSpaces; j++) {
      spaces += " ";
    }
    if (i === 0) {
      stars = "*";
    } else if (i > 0) {
      stars += "**";
    }
    console.log(spaces + stars);
    spaces = "";
  }
}

drawPyramid(9);
