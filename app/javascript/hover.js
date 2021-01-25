function hover() {
  const articles = document.querySelectorAll(".article");
  articles.forEach((article) => {
    article.addEventListener('mouseover', () => {
      console.log("マウスオーバー");
    });
    article.addEventListener('mouseout', () => {
      console.log("マウスアウト");
    });
  });
}

window.addEventListener('load', hover);