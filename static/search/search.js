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

    const links = [];
    results.forEach((result) => {
      const title = document.createElement("h2");
      title.innerHTML = result.doc.title;

      const content = document.createElement("p");
      content.innerHTML = result.doc.content.substring(0, 200) + "...";

      const article = document.createElement("article");
      article.appendChild(title);
      article.appendChild(content);

      const link = document.createElement("a");
      link.href = result.doc.link;
      link.tabIndex = 0;
      link.appendChild(article);

      links.push(link);
    });

    if (results.length > 0) {
      searchResults.replaceChildren(...links);
      searchResults.parentElement.hidden = false;
    } else {
      searchResults.innerHTML = "";
      searchResults.parentElement.hidden = true;
    }
  });
}
