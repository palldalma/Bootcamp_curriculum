//     1)  Append every paragraph with the last one's content.
//     2)  Do the same again, but you should keep the cat strong.

//task 1
// const items2 = document.querySelectorAll("p");
// for (let i = 0; i < items2.length - 1; i++) {
//   let next = items2[i + 1].textContent;

//   items2[i].textContent += " " + next;
// }

// //task 2
const items = document.querySelectorAll("p");
for (let i = 0; i < items.length - 1; i++) {
  let next = items[i + 1].innerHTML;

  items[i].innerHTML += " " + next;
}
