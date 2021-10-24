//GENERATE A LIST OF EXISTING ARTICLES BY RETRIEVING DATA FROM THE BACKEND

window.onload = () => {
  let articleListRequest = new XMLHttpRequest();
  articleListRequest.open("GET", "http://localhost:3000/posts");
  articleListRequest.send();

  articleListRequest.onload = () => {
    let resultObject = JSON.parse(articleListRequest.responseText);

    resultObject.forEach((article) => {
      document
        .querySelector(".tableContainer")
        .appendChild(createArticle(article));
    });
  };
  createSubmitSection();
};

//STRUCTURING EACH ROW USING A HTML TABLE
let myArticles = document.createElement("table");

const createArticle = (articleObject) => {
  let articleRow = document.createElement("tr");
  let title = document.createElement("td");
  let url = document.createElement("a");
  let reaction1 = document.createElement("td");
  let reaction2 = document.createElement("td");
  reaction2.classList.add("reaction2");

  let deleteBox = document.createElement("td");
  deleteBox.classList.add("deleteBox");

  let heart = document.createElement("i");
  heart.classList.add("hearts");

  let brokenheart = document.createElement("i");
  brokenheart.classList.add("brokenhearts");

  let likeCounter = document.createElement("td");
  likeCounter.classList.add("likecounter");
  let likeValue = document.createElement("p");

  let deleteIcon = document.createElement("i");

  articleRow.appendChild(title);
  articleRow.appendChild(reaction1);
  articleRow.appendChild(likeCounter);
  articleRow.appendChild(reaction2);
  articleRow.appendChild(deleteBox);

  title.appendChild(url);
  reaction1.appendChild(heart);
  reaction2.appendChild(brokenheart);
  likeCounter.appendChild(likeValue);
  deleteBox.appendChild(deleteIcon);

  myArticles.appendChild(articleRow);

  url.innerHTML = articleObject.title;
  url.href = articleObject.url;

  heart.innerHTML = `<i class="fa fa-heart-o" aria-hidden="true"></i>`;
  brokenheart.innerHTML = `<i class="far fa-thumbs-down"></i>`;

  deleteIcon.innerHTML = `<i class="fas fa-trash-alt"></i>`;

  //THE NUMBER OF LIKES IS UPDATED BY A SEPERATE REQUEST BELOW

  let loadLikesRequest = new XMLHttpRequest();
  loadLikesRequest.open("GET", "http://localhost:3000/posts/");
  loadLikesRequest.send();
  loadLikesRequest.onload = () => {
    let resultObjectTHIRD = JSON.parse(loadLikesRequest.responseText);
    for (let i = 0; i < resultObjectTHIRD.length; i++) {
      if (resultObjectTHIRD[i].title === articleObject.title) {
        likeValue.innerHTML = resultObjectTHIRD[i].score;
      }
    }
  };

  //THE HEART AND DISLIKE BUTTONS REACH OUT TO THE DATABASE WITH THESE REQUESTS
  heart.addEventListener("click", () => {
    let findRelevantArticleRequest = new XMLHttpRequest();
    findRelevantArticleRequest.open("GET", "http://localhost:3000/posts/");
    findRelevantArticleRequest.send();

    findRelevantArticleRequest.onload = () => {
      let resultObject = JSON.parse(findRelevantArticleRequest.responseText);
      console.log(resultObject);

      let id;

      for (let i = 0; i < resultObject.length; i++) {
        if (resultObject[i].title === articleObject.title) {
          id = resultObject[i].id;
        }
      }

      let upvoteRequest = new XMLHttpRequest();
      upvoteRequest.open("PUT", `http://localhost:3000/posts/${id}/upvote`);
      upvoteRequest.send();
      upvoteRequest.onload = () => {
        console.log("Upvoted" + id);

        let refreshRequest = new XMLHttpRequest();
        refreshRequest.open("GET", "http://localhost:3000/posts");
        refreshRequest.send();
        refreshRequest.onload = () => {
          let resultObjectSECOND = JSON.parse(refreshRequest.responseText);

          for (let i = 0; i < resultObjectSECOND.length; i++) {
            if (resultObjectSECOND[i].id === id) {
              likeValue.innerHTML = resultObjectSECOND[i].score;
            }
          }
        };
      };
    };
  });

  brokenheart.addEventListener("click", () => {
    let findRelevantArticleRequest = new XMLHttpRequest();
    findRelevantArticleRequest.open("GET", "http://localhost:3000/posts/");
    findRelevantArticleRequest.send();

    findRelevantArticleRequest.onload = () => {
      let resultObject = JSON.parse(findRelevantArticleRequest.responseText);
      console.log(resultObject);

      let id;

      for (let i = 0; i < resultObject.length; i++) {
        if (resultObject[i].title === articleObject.title) {
          id = resultObject[i].id;
        }
      }

      let downvoteRequest = new XMLHttpRequest();
      downvoteRequest.open("PUT", `http://localhost:3000/posts/${id}/downvote`);
      downvoteRequest.send();
      downvoteRequest.onload = () => {
        console.log("Downvoted" + id);

        let refreshRequest = new XMLHttpRequest();
        refreshRequest.open("GET", "http://localhost:3000/posts");
        refreshRequest.send();
        refreshRequest.onload = () => {
          let resultObjectSECOND = JSON.parse(refreshRequest.responseText);

          for (let i = 0; i < resultObjectSECOND.length; i++) {
            if (resultObjectSECOND[i].id === id) {
              likeValue.innerHTML = resultObjectSECOND[i].score;
            }
          }
        };
      };
    };
  });

  //DELETE BUTTON
  deleteIcon.addEventListener("click", () => {
    let findRelevantArticleRequest = new XMLHttpRequest();
    findRelevantArticleRequest.open("GET", "http://localhost:3000/posts/");
    findRelevantArticleRequest.send();

    findRelevantArticleRequest.onload = () => {
      let resultObject = JSON.parse(findRelevantArticleRequest.responseText);

      let id;

      let selected;

      for (let i = 0; i < resultObject.length; i++) {
        if (resultObject[i].title === articleObject.title) {
          id = resultObject[i].id;
          selected = resultObject[i].title;
        }
      }

      let deleteRequest = new XMLHttpRequest();
      deleteRequest.open("DELETE", `http://localhost:3000/posts/${id}`);
      deleteRequest.send();
      deleteRequest.onload = () => {
        console.log("Deleted" + id);

        window.alert(`${selected} has just been deleted.`);
        location.reload();
      };
    };
  });

  return myArticles;
};

// THIS FUNCTION CREATES THE SUBMIT SECTION ON THE RIGHT SIDE OF THE MAIN PAGE
function createSubmitSection() {
  const submitSection = document.querySelector(".submitsection");
  const linkToSubmitPageButton = document.createElement("button");
  linkToSubmitPageButton.innerText = "SUBMIT A NEW POST";
  linkToSubmitPageButton.classList.add("linkToSubmitPage");
  submitSection.appendChild(linkToSubmitPageButton);

  const infoBox = document.createElement("div");
  infoBox.classList.add("infobox");

  const info = document.createElement("p");
  info.innerHTML = `Collect your favourite articles and see how many likes they get.</br></br>Have fun :) .`;
  infoBox.appendChild(info);
  submitSection.appendChild(infoBox);

  linkToSubmitPageButton.addEventListener(
    "click",
    () => {
      location = document.getElementById("newpost").getAttribute("href");
      window.open(location, "_blank");
    },
    false
  );
}
