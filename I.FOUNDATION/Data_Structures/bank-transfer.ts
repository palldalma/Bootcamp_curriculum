const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 },
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

function getNameAndBalance(account: number): any[] {
  let detailsToBePrinted: any[] = [];

  accounts.forEach((element) => {
    if (element.accountNumber === account) {
      detailsToBePrinted.push(element.clientName, element.balance);
    }
  });
  return detailsToBePrinted;
}

console.log(getNameAndBalance(11234543)); // prints: [ 'Igor', 203004099.2 ]

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
function transfer(from: number, to: number, amount: number): void {
  let sourceAccountFound: boolean = false;
  let destinationAccountFound: boolean = false;

  accounts.forEach((accountFrom) => {
    if (accountFrom.accountNumber === from) {
      //source account found
      sourceAccountFound = true;
      accounts.forEach((accountTo) => {
        if (accountTo.accountNumber === to) {
          //destination account found
          destinationAccountFound = true;
          accountFrom.balance -= amount;
          accountTo.balance += amount;
        }
      });
    }
  });
  if (!sourceAccountFound || !destinationAccountFound) {
    console.log('404');
  }
}

console.log(getNameAndBalance(11234543));
console.log(getNameAndBalance(43546731));

transfer(11234543, 43546731, 200);

console.log(getNameAndBalance(11234543));
console.log(getNameAndBalance(43546731));
