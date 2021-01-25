function hover() {
  const articles = document.querySelectorAll(".article");
  articles.forEach((article) => {
    article.addEventListener('mouseover', () => {
      console.log("マウスオーバー");
    });
  });
}

window.addEventListener('load', hover);