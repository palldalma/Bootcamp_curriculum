// Write the image's url to the console.
// Replace the image with a picture of your favorite animal.
// Make the link point to the Green Fox Academy website.
// Disable the second button.
// Replace its text with 'Don't click me!'.
    
const imageURL = document.querySelector("img");
console.log ("image replaced", imageURL);

imageURL.src = "https://www.zooplus.hu/magazin/wp-content/uploads/2018/10/Golden-Retriever-1.jpg"

const link = document.querySelector("a");
link.href = "https://www.greenfoxacademy.com/"
console.log ("new link" , link)

let secondButton = document.getElementsByClassName("this-one");
secondButton[0].disabled = true;
console.log ("second button disabled", secondButton [0].disabled);

secondButton[0].textContent = "Don't click me."