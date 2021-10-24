function drawTriangle(lineCount: number): void {
  let currentLine: string = "";
  for (let i = 0; i < lineCount; i++) {
    currentLine += "*";
    console.log(currentLine);
  }
}

drawTriangle(5);
