/*1. store the element that says 'The King' in the 'king' variable.
      console.log it.*/

const king = document.getElementById("b325");
console.log("king", king);
/*
2. store 'The Businessman' and 'The Lamplighter'
in the 'businessLamp' variable.
console.log each of them.*/

//getElementsByClassName() - csak a közös class nevek space-szel elválasztva
const businessLamp2 = document.getElementsByClassName("asteroid big");
console.log("businesslamp", businessLamp2);

/*
3. store 'The King' and 'The Conceited Man'
in the 'conceitedKing' variable.
alert them one by one.*/

const conceitedKing = document.querySelector("section");
console.log("conceitedKing", conceitedKing);

/*
4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
in the 'noBusiness' variable.
console.log each of them.*/

const noBusiness = document.querySelectorAll("div");
console.log("noBusiness", noBusiness);
