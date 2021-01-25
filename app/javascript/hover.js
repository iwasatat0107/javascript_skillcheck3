function hover() {
  const articles = document.querySelectorAll(".article");
  articles.forEach((article) => {
    article.addEventListener('mouseover', () => {
      article.setAttribute("style", "background-color:#F1940B;");
    });
    article.addEventListener('mouseout', () => {
      article.removeAttribute("style");
    });
  });
}
setInterval(hover, 1000);