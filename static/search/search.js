function loadSearch(url, inputId="searchInput") {
  const index = elasticlunr(function () {
    this.addField('title');
    this.addField('tags');
    this.addField('content');
    this.setRef('id');
  });

  fetch(url).then((response) => response.json()).then((data) =>
    data.forEach(doc => index.addDoc(doc))
  );

  const input = document.getElementById(inputId);
  input.addEventListener('input', (e) => {
    const term = e.target.value;
    const searchResults = document.getElementById("searchResults");

    if (term.length < 3) {
      searchResults.innerHTML = "";
      searchResults.parentElement.hidden = true;
      return;
    }

    const results = index.search(e.target.value, {
      fields: {
        title: {boost: 1},
        tags: {boost: 2},
        content: {boost: 1},
      }
    });

    const articles = [];
    results.forEach((result) => {
      const article = document.createElement("article");

      const title = document.createElement("h2");
      const link = document.createElement("a");
      link.innerHTML = result.doc.title;
      link.href = result.doc.link;
      title.appendChild(link);
      article.appendChild(title);

      const content = document.createElement("p");
      content.innerHTML = result.doc.content.substring(0, 200) + "...";
      article.appendChild(content);

      articles.push(article);
    });

    if (results.length > 0) {
      searchResults.replaceChildren(...articles);
      searchResults.parentElement.hidden = false;
    } else {
      searchResults.innerHTML = "";
      searchResults.parentElement.hidden = true;
    }
  });
}
