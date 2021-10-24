const apiURL = "http://localhost:3000";

function displayBooks() {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onload = () => {
    const books = JSON.parse(httpRequest.response);
    const mainContainer = document.querySelector("container");
    detailBTN.innerText = "See details";
    mainContainer.appendChild(detailBTN);
    detailBTN.addEventListener("click", showDetails);
    detailBTN.style.display = "block";

    books.forEach((book) => {
      const tbody = document.querySelector("#booklist");
      const tr = document.createElement("tr");

      const tdID = document.createElement("td");
      tdID.textContent = book.book_id;

      tr.appendChild(tdID);

      const tdTitle = document.createElement("td");
      tdTitle.classList.add("title");
      tdTitle.textContent = book.book_name;
      tr.appendChild(tdTitle);

      tbody.appendChild(tr);

      const thead = document.querySelector("thead");
      thead.innerHTML = "";

      const th1 = document.createElement("th");
      th1.innerHTML = "ID";
      thead.appendChild(th1);

      const th2 = document.createElement("th");
      th2.innerHTML = "Title";
      thead.appendChild(th2);
    });
  };
  httpRequest.open("GET", `${apiURL}/bookcollection`, true);
  httpRequest.send();
}

const detailBTN = document.createElement("button");

window.onload = () => {
  displayBooks();
};

function showDetails() {
  detailBTN.style.display = "none";

  let requestForDetails = new XMLHttpRequest();
  requestForDetails.onload = () => {
    let booklist = document.querySelector("#booklist");
    booklist.innerHTML = "";

    const thead = document.querySelector("thead");
    thead.innerHTML = "";

    const th1 = document.createElement("th");
    th1.innerHTML = "ID";
    thead.appendChild(th1);

    const th2 = document.createElement("th");
    th2.innerHTML = "Title";
    thead.appendChild(th2);

    const th3 = document.createElement("th");
    th3.innerHTML = "Author";
    thead.appendChild(th3);

    const th4 = document.createElement("th");
    th4.innerHTML = "Category";
    thead.appendChild(th4);

    const th5 = document.createElement("th");
    th5.innerHTML = "Publisher";
    thead.appendChild(th5);

    const th6 = document.createElement("th");
    th6.innerHTML = "Price";
    thead.appendChild(th6);

    let resultObject = JSON.parse(requestForDetails.response);
    resultObject.forEach((book) => {
      booklist.appendChild(createNewListElement(book));
    });

    const backBtn = document.createElement("button");
    const docContainer = document.querySelector("container");
    backBtn.innerHTML = "Back";
    backBtn.addEventListener("click", () => {
      backBtn.style.display = "none";
      const tbody = document.querySelector("tbody");
      tbody.innerHTML = "";
      displayBooks();
    });
    docContainer.appendChild(backBtn);

    showFilters();
  };
  requestForDetails.open("GET", "http://localhost:3000/moreinfo");
  requestForDetails.send();
}

const createNewListElement = (bookObject) => {
  const tr = document.createElement("tr");

  const tdID = document.createElement("td");
  tdID.textContent = bookObject.book_id;
  tr.appendChild(tdID);

  const tdTitle = document.createElement("td");
  tdTitle.textContent = bookObject.book_name;
  tr.appendChild(tdTitle);

  const tdAuthor = document.createElement("td");
  tdAuthor.textContent = bookObject.aut_name;
  tr.appendChild(tdAuthor);

  const tdCategory = document.createElement("td");
  tdCategory.textContent = bookObject.cate_descrip;
  tr.appendChild(tdCategory);

  const tdPublisher = document.createElement("td");
  tdPublisher.textContent = bookObject.pub_name;
  tr.appendChild(tdPublisher);

  const tdPrice = document.createElement("td");
  tdPrice.textContent = bookObject.book_price;
  tr.appendChild(tdPrice);

  return tr;
};

const filterDiv = document.createElement("div");
function showFilters() {
  if (filterDiv.classList.contains("created")) {
    return;
  } else {
    const filterCategoryHeader = document.createElement("h3");
    filterDiv.classList.add("created");
    filterCategoryHeader.innerHTML = "Category filter";
    const filterCategoryInput = document.createElement("input");
    filterCategoryInput.type = "text";
    filterCategoryInput.placeholder = "type in your category";
    const container = document.querySelector("container");
    filterDiv.appendChild(filterCategoryHeader);
    filterDiv.appendChild(filterCategoryInput);
    container.appendChild(filterDiv);
  }
}
