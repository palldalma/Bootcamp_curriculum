function createMultiplicationTable(baseNumber: number) {
  for (let i = 0; i < 10; i++) {
    console.log(`${i + 1} * ${baseNumber} = ${(i + 1) * baseNumber}`);
  }
}

createMultiplicationTable(5);
