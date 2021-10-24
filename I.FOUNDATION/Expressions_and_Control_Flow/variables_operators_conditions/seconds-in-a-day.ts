// let currentHours: number = 14;
// let currentMinutes: number = 34;
// let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables
export {};
function tellRemainingTime(
  currentHours: number,
  currentMinutes: number,
  currentSeconds: number
) {
  currentMinutes = currentMinutes * 60;
  currentHours = currentHours * 60 * 60;

  let secondsInADay: number = 24 * 60 * 60;

  let remainingTime: number =
    secondsInADay - (currentHours + currentMinutes + currentSeconds);

  let remainingHours: number = Math.floor(remainingTime / 60 / 60);

  let remainaingMinutes: number = Math.floor(
    (remainingTime - remainingHours * 60 * 60) / 60
  );

  let remainingSeconds: number =
    remainingTime - remainingHours * 60 * 60 - remainaingMinutes * 60;

  console.log(
    `The remaining time is ${remainingHours}:${remainaingMinutes}:${remainingSeconds}`
  );
}

tellRemainingTime(14, 34, 42);
tellRemainingTime(23, 59, 1);
tellRemainingTime(12, 30, 1);
