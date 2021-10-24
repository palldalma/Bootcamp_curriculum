window.onload = () => {
  const form = document.querySelector("form");

  // window.onload = () => {
  //   const xhr = new XMLHttpRequest();
  // };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;

    const userData = { name: name, email: email };
    const requestBody = JSON.stringify(userData);
    if (name && email) {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:3000/signup");
      xhr.setRequestHeader("content-type", "application/json");
      xhr.onload = () => {
        const response = JSON.parse(xhr.responseText);
      };
      xhr.send(requestBody);
      window.alert(`Subscription was successful, ${name}.`);
      form.reset();
    } else {
      window.alert("Please, fill in every field.");
    }
  });
};

//16.sor!!!
