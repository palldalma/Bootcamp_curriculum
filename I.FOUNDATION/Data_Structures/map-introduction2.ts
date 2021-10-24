// MAP INTRODUCTION 2

let ISBN = {
  '978-1-60309-452-8': 'A Letter to Jo',
  '978-1-60309-459-7': 'Lupus',
  '978-1-60309-444-3': 'Red Panda and Moon Bear',
  '978-1-60309-461-0': 'The Lab',
};

// //Print all the key-value pairs in the following format

Object.keys(ISBN).forEach(function (key) {
  console.log(ISBN[key] + '(ISBN: ' + key + ')');
});

// // Remove the key-value pair with key 978-1-60309-444-3
console.log();
delete ISBN['978-1-60309-444-3'];

Object.keys(ISBN).forEach(function (key) {
  console.log(ISBN[key] + '(ISBN: ' + key + ')');
});

//Remove the key-value pair with value The Lab
console.log();
const keyOfTheLab = Object.keys(ISBN).find((key) => ISBN[key] === 'The Lab');

delete ISBN[keyOfTheLab];

Object.keys(ISBN).forEach(function (key) {
  console.log(ISBN[key] + '(ISBN: ' + key + ')');
});

//Add the following key-value pairs to the map

ISBN['978-1-60309-450-4'] = 'They Called Us Enemy';
ISBN['978-1-60309-453-5'] = 'Why Did We Trust Him?';

// Print whether there is an associated value with key 478-0-61159-424-8 or not
console.log(ISBN.hasOwnProperty('478-0-61159-424-8'));

//Print the value associated with key 978-1-60309-453-5
console.log(ISBN['978-1-60309-453-5']);
