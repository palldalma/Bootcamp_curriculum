let telephoneBook = {
  'William A. Lathan': '405-709-1865',
  'John K. Miller': '402-247-8568',
  'Hortensia E. Foster': '606-481-6467',
  'Amanda D. Newland': '319-243-5613',
  'Brooke P. Askew': '307-687-2982',
};

// What is John K. Miller's phone number?
console.log(telephoneBook['John K. Miller']);

// Whose phone number is 307-687-2982?

console.log(Object.keys(telephoneBook).find((key) => telephoneBook[key] === '307-687-2982'));

// Do we know Chris E. Myers' phone number?

if (telephoneBook.hasOwnProperty('Chris E. Myers')) {
  console.log('Yes');
} else {
  console.log('No');
}
