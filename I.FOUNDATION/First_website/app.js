console.log ("test")
let submitButton = document.getElementById("submit");
let email = document.querySelector("#email");
let username = document.getElementById("username");

submitButton.addEventListener("click", function(){
              alert (`Hi ${username}, we sent you an email to ${email}.`);
});


// submitButton.addEventListener("click", function() {
//               document.getElementById("body").innerHTML = "Hello World";
//             });

// function showAlert () {
//               alert (`Hi ${username}, we sent you an email to ${email}.`);
// }

// document.getElementById("submit").addEventListener("click", myFunction);

// function myFunction() {
//               alert (`Hi ${username}, we sent you an email to ${email}.`);
// }
