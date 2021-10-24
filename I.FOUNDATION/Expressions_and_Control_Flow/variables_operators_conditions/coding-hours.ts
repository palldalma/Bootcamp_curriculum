// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

const codingHoursADay: number = 6;
const weeks: number = 17;
const codingDays: number = weeks * 5;
const averageWorkHours: number = 52;
const totalCodinghours: number = codingDays * codingHoursADay;

function print() {
  console.log(
    `The attendees code ${totalCodinghours} hours a semester. \nThe percentage of coding hours over the average working hours in the semester is ${(
      (totalCodinghours / (averageWorkHours * weeks)) *
      100
    ).toFixed(0)}%. `
  );
}

print();
