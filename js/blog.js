const urlParams = new URLSearchParams(window.location.search); //?id=1
const id = urlParams.get('id');

let article = articles.find((article) => article.id == id);

let blog = document.querySelector('.blog');
if (article) {
  let articleTemplate = `
        <div class="blog-img">
            <img src="${article.image}" alt="" />
        </div>
        <h1>${article.title}</h1>
        <p>${article.description}</p>
        <button>Leave a comment</button>
    `;

  blog.innerHTML += articleTemplate;
} else {
  blog.innerHTML = '<h1>Article has not found!</h1>';
}
