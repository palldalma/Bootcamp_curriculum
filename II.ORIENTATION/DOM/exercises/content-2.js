// 1) replace the list items' content with items from this list:
// ['apple', 'banana', 'cat', 'dog']

const toBeReplaced = document.querySelectorAll("li");
const listItems = ['apple', 'banana', 'cat', 'dog'];

for (let i = 0; i < toBeReplaced.length; i++) {
  
  toBeReplaced[i].textContent = listItems[i];
  
}