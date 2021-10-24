const api_key = "kSgIZF9WCQ1UAGWkAoOzYIKQAdM24mJJ";
const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo11&api-key=${api_key}`,
  true
);
xhr.send();

xhr.onload = () => {
  const result = JSON.parse(xhr.response);
  console.log(result);
  let container = document.querySelector("container");

  for (let i = 0; i < result.response.docs.length; i++) {
    let newArticle = document.createElement("ul");
    let headline = document.createElement("a");
    headline.href = result.response.docs[i].web_url;
    let snippet = document.createElement("p");
    let publicationDate = document.createElement("p");
    let pub_date = result.response.docs[i].pub_date.slice(0, 10);

    headline.innerHTML = result.response.docs[i].headline.main;
    snippet.innerHTML = result.response.docs[i].snippet;
    publicationDate.innerHTML = `publication date: ${pub_date}`;

    newArticle.appendChild(headline);
    newArticle.appendChild(snippet);
    newArticle.appendChild(publicationDate);
    container.appendChild(newArticle);
  }
};
