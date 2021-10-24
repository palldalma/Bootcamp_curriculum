function drawDiagonal(lineCount: number) {
  let line: string = "";
  for (let i = 0; i < lineCount; i++) {
    for (let j = 0; j < lineCount; j++) {
      if (i === 0 || i === lineCount - 1) {
        line += "%";
      } else if (j === 0 || j === i || j === lineCount - 1) {
        line += "%";
      } else {
        line += " ";
      }
    }
    console.log(line);
    line = "";
  }
}

drawDiagonal(9);
