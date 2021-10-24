function printParams(string1: string, ...restOftheWords): void {
  //console.log(string1 + ' ' + restOftheWords.join(' '));
  console.log(arguments);
}

printParams('Dalma', 3, 4, 'haha');
