function BMI(weightInKG: number, heightInM: number) {
  return +(weightInKG / heightInM ** 2).toFixed(0);
}

console.log(BMI(63, 1.73));
