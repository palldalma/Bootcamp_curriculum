const apiURL = "http://localhost:3000/bookcollection/details";
const table = document.querySelector("table");

window.onload = () => {
  loadBookCollection(apiURL);
  activateSearchField();
};

function loadBookCollection(endpoint) {
  fetch(endpoint, {
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
      //console.log(result);
      createTable(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function createTable(bookArray) {
  const mainRow = document.createElement("tr");

  const maintitle = document.createElement("th");
  const mainauthor = document.createElement("th");
  const maincategory = document.createElement("th");
  const mainpublisher = document.createElement("th");
  const mainprice = document.createElement("th");

  maintitle.innerHTML = "Title";
  mainauthor.innerHTML = "Author";
  maincategory.innerHTML = "Category";
  mainpublisher.innerHTML = "Publisher";
  mainprice.innerHTML = "Price";

  const headcolumns = [
    maintitle,
    mainauthor,
    maincategory,
    mainpublisher,
    mainprice,
  ];

  headcolumns.forEach((headcolumn) => {
    mainRow.appendChild(headcolumn);
  });

  table.appendChild(mainRow);

  bookArray.forEach((book) => {
    const newRow = document.createElement("tr");

    const title = document.createElement("th");
    const author = document.createElement("th");
    const category = document.createElement("th");
    const publisher = document.createElement("th");
    const price = document.createElement("th");

    const columns = [title, author, category, publisher, price];

    title.innerHTML = book.book_name;
    author.innerHTML = book.aut_name;
    publisher.innerHTML = book.pub_name;
    price.innerHTML = book.book_price;
    category.innerHTML = book.cate_descrip;

    columns.forEach((column) => {
      newRow.appendChild(column);
    });

    table.appendChild(newRow);
  });
}

function activateSearchField() {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    const category = document.getElementById("categoryfilter").value;
    const publisher = document.getElementById("publisherfilter").value;
    const plt = document.getElementById("pltfilter").value;
    const pgt = document.getElementById("pgtfilter").value;

    const query = [];
    event.preventDefault();

    if (category.length !== 0) {
      query.push(`category=${category}`);
    }

    if (publisher.length !== 0) {
      query.push(`publisher=${publisher}`);
    }

    if (plt.length !== 0) {
      query.push(`plt=${plt}`);
    }

    if (pgt.length !== 0) {
      query.push(`pgt=${pgt}`);
    }

    if (query.length !== 0) {
      query.unshift("?");
    }

    if (query.length > 2) {
      for (let i = 1; i < query.length - 1; i++) {
        query[i] += "&";
      }
    }

    let queryString = query.join("");

    fetch(`http://localhost:3000/bookcollection/details${queryString}`, {
      method: "GET",
    })
      .then((response) => {
        if (response.status === 404) {
          throw new Error("Search criteria is incorrect.");
        } else if (response.status < 200 || response.status > 400) {
          throw new Error("Data could not be retrieved.");
        }
        return response;
      })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        table.innerHTML = "";
        createTable(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
}
