const booklist = document.getElementById("booklist");
const link = document.getElementById("details");
const button = document.querySelector("button");

window.onload = () => {
  loadBookCollection();
};

function loadBookCollection() {
  fetch("http://localhost:3000/bookcollection", {
    method: "GET",
  })
    .then((response) => {
      if (response.status < 200 || response.status > 400) {
        throw new Error("Data could not be retrieved.");
      }
      return response;
    })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      displayBookCollection(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function displayBookCollection(bookArray) {
  bookArray.forEach((book) => {
    const newbook = document.createElement("p");
    newbook.innerHTML = book.book_name;
    booklist.appendChild(newbook);
  });
}

button.addEventListener("click", () => {
  link.setAttribute("href", "details.html");
});
