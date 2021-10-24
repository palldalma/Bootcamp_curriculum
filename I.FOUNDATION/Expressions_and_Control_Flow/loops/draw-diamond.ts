export {};

function drawDiamond(lineCount: number) {
  for (let actualLine = 1; actualLine <= lineCount / 2 + 1; actualLine++) {
    let line: string = "";
    let spaceCount: number = lineCount / 2 + 1 - actualLine; //actualLine is the index of the row
    let starCount: number = actualLine * 2 - 1;

    for (let i = 1; i <= spaceCount; i++) {
      line += " ";
    }
    for (let i = 1; i <= starCount; i++) {
      line += "*";
    }
    console.log(line);
  }

  for (
    let actualLine = lineCount / 2 + 2;
    actualLine <= lineCount + 1;
    actualLine++
  ) {
    let line: string = "";
    let spaceCount: number = actualLine - lineCount / 2 - 1;
    let starCount: number = lineCount - spaceCount * 2;

    for (let i = 1; i <= spaceCount; i++) {
      line += " ";
    }
    for (let i = 1; i <= starCount; i++) {
      line += "*";
    }
    console.log(line);
  }
}

drawDiamond(7);
