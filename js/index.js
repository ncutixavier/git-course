const formContainer = document.querySelector(".form-container");
const createBtn = document.querySelector(".create-btn");
const closeModal = document.querySelector(".close-modal");
const addArticleForm = document.querySelector(".add-article-form");
const title = document.querySelector("#title");
const description = document.querySelector("#content");
const image = document.querySelector("#image");
const addArticleBtn = document.querySelector(".add-article-btn");
const infoAlert = document.querySelector(".alert");
const loading = document.querySelector(".loading");
const updateArticleBtn = document.querySelector(".update-article-btn");

//function to display all articles
function displayArticles(articles) {
  let blog = "";
  for (let i = 0; i < articles.length; i++) {
    let template = `
          <div class="article" data-id=${articles[i].id}>
              <div class="article-img">
                  <img src="${articles[i].image}" alt="image">
              </div>
              <h3>${articles[i].title}</h3>
              <p>${articles[i].description.substring(0, 120)}...</p>
              <div class="action-btn">
                <button type="submit" class="btn edit-btn">
                  <i class="far fa-edit"></i>
                </button>
                <button type="submit" class="btn view-btn">
                  <i class="far fa-eye"></i>
                </button>
                <button type="submit" class="btn delete-btn">
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
          </div>
        `;
    blog += template;
  }
  return blog;
}

const articlesContainer = document.querySelector(".articles");

//open modal when create article button is clicked
createBtn.addEventListener("click", () => {
  updateArticleBtn.style.display = "none";
  formContainer.classList.toggle("open-modal");
});

//close modal when cancel button is clicked
closeModal.addEventListener("click", () => {
  formContainer.classList.toggle("open-modal");
});

//add article when add article button is clicked
addArticleForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //check if all fields are filled
  if (!title.value || !description.value || !image.value) {
    infoAlert.style.display = "block";
    infoAlert.style.backgroundColor = "#f44336";
    infoAlert.style.color = "#fff";
    infoAlert.innerHTML = `Please fill all fields`;
  } else {
    const article = {
      title: title.value,
      description: description.value,
      image: image.value,
    };
    console.log(article);

    addArticleBtn.innerHTML += '<i class="fas fa-spinner fa-spin"></i>';
    addArticleBtn.setAttribute("disabled", "disabled");

    //add article to localStorage
    if (localStorage.getItem("articles") === null) {
      let articles = [];
      articles.push({
        id: 1,
        ...article,
        comments: [],
      });
      localStorage.setItem("articles", JSON.stringify(articles));
      addArticleBtn.innerHTML = 'Added <i class="fas fa-check"></i>';
      addArticleBtn.setAttribute("disabled", "disabled");
      addArticleForm.reset();
      setTimeout(() => {
        addArticleBtn.innerHTML = "Add Article";
        addArticleBtn.removeAttribute("disabled");
        formContainer.classList.toggle("open-modal");
        window.location.reload();
      }, 2000);
    } else {
      let articles = JSON.parse(localStorage.getItem("articles"));
      articles.push({
        id: articles.length + 1,
        ...article,
        comments: [],
      });
      localStorage.setItem("articles", JSON.stringify(articles));
      addArticleBtn.innerHTML = 'Added <i class="fas fa-check"></i>';
      addArticleBtn.setAttribute("disabled", "disabled");
      addArticleForm.reset();
      setTimeout(() => {
        addArticleBtn.innerHTML = "Add Article";
        addArticleBtn.removeAttribute("disabled");
        formContainer.classList.toggle("open-modal");
        window.location.reload();
      }, 500);
    }
  }
});

(function () {
  //get articles from localStorage
  let articles = JSON.parse(localStorage.getItem("articles"));

  //display articles
  if (articles === null || articles.length === 0) {
    loading.style.display = "none";
    articlesContainer.innerHTML = `<h2>No articles yet</h2>`;
    articlesContainer.classList.add("blog-container");
  } else {
    articlesContainer.innerHTML = displayArticles(articles);
    loading.style.display = "none";

    const allArticles = document.querySelectorAll(".article");
    const editBtns = document.querySelectorAll(".edit-btn");
    const viewBtns = document.querySelectorAll(".view-btn");
    const deleteBtns = document.querySelectorAll(".delete-btn");

    //View article
    viewBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let articleId = btn.parentNode.parentNode.getAttribute("data-id");
        console.log(articleId);
        window.location.href = `blog.html?id=${articleId}`;
      });
    });

    //delete article
    deleteBtns.forEach((btn) => { 
      btn.addEventListener("click", (e) => {
        let articleId = btn.parentNode.parentNode.getAttribute("data-id");
        console.log(articleId);
        let articles = JSON.parse(localStorage.getItem("articles"));
        let filteredArticles = articles.filter((article) => article.id !== Number(articleId));
        console.log(filteredArticles);
        localStorage.setItem("articles", JSON.stringify(filteredArticles));
        window.location.reload();
      });
    });

    //Edit article
    editBtns.forEach((btn) => { 
      btn.addEventListener("click", (e) => {
        let articleId = btn.parentNode.parentNode.getAttribute("data-id");
        console.log(articleId);
        addArticleBtn.style.display = "none";
        updateArticleBtn.style.display = "block";
        updateArticleBtn.setAttribute("data-id", articleId);
        formContainer.classList.toggle("open-modal");

        let articles = JSON.parse(localStorage.getItem("articles"));
        let article = articles.find((article) => article.id === Number(articleId));
        console.log(article);
        title.value = article.title;
        description.value = article.description;
        image.value = article.image;

        updateArticleBtn.addEventListener("click", (e) => { 
          e.preventDefault();
          let articles = JSON.parse(localStorage.getItem("articles"));
          let article = articles.find((article) => article.id === Number(articleId));
          article.title = title.value;
          article.description = description.value;
          article.image = image.value;
          article.comments = article.comments;
          localStorage.setItem("articles", JSON.stringify(articles));
          window.location.reload();
        });
      });
    });
  }
})();
