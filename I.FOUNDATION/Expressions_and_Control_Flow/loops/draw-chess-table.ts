function drawChessTable(size: number = 8) {
  let line: string = "";
  for (let i = 0; i < size; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < size; j++) {
        if (j % 2 === 0) {
          line += "%";
        } else {
          line += " ";
        }
      }
      console.log(line);
      line = "";
    } else {
      for (let j = 0; j < size; j++) {
        if (j % 2 !== 0) {
          line += "%";
        } else {
          line += " ";
        }
      }
      console.log(line);
      line = "";
    }
  }
}

drawChessTable();
