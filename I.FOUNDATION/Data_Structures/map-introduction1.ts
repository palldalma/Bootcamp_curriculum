// MAP INTRODUCTION 1

// Create an empty map where the keys are integers and the values are characters

let map = {
  97: 'a',
  98: 'b',
  99: 'c',
  65: 'A',
  66: 'B',
  67: 'C',
};

//Print all the keys
console.log(Object.keys(map));

//Print all the values
console.log(Object.values(map));

//Add value D with the key 68
map['68'] = 'D';

//COUNTING KEY-VALUE PAIRS
function keyValueCounter(Object: Object) {
  let count = 0;

  for (let key in Object) {
    ++count;
  }
  return count;
}

console.log(keyValueCounter(map)); // prints 7

//Print the value that is associated with key 99
console.log(map['99']);

//Remove the key-value pair with key 97 (csak egy property törlésére jó)
delete map['97']; // { '65': 'A', '66': 'B', '67': 'C', '68': 'D', '98': 'b', '99': 'c' }

// Print whether there is an associated value with key 100 or not
console.log(map.hasOwnProperty('100')); //false

// Remove all the key-value pairs - ha mindent törölnél
Object.keys(map).forEach(function (key) {
  delete map[key];
});

console.log(map); // prints {};
