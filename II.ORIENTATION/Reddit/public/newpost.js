window.onload = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const url = document.getElementById("url").value;
    const submitBTN = document.querySelector(".button");

    const userInput = { title: title, url: url };
    const requestBody = JSON.stringify(userInput);

    if (title && url) {
      const postRequest = new XMLHttpRequest();
      postRequest.open("POST", "http://localhost:3000/posts");
      postRequest.setRequestHeader("content-type", "application/json");
      postRequest.onload = () => {
        console.log(postRequest.responseText);
      };

      postRequest.send(requestBody);
      window.confirm("Your article was successfully added to the list.");
      form.reset();
    } else if (!title || !url) {
      window.alert("Incomplete fields");
    }
  });
};
