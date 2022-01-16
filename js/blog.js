const urlParams = new URLSearchParams(window.location.search); //?id=1
const id = urlParams.get("id");
let blog = document.querySelector(".blog");
const loading = document.querySelector(".loading");
const formContainer = document.querySelector(".form-container");
const addCommentBtn = document.querySelector(".add-comment-btn");
const name = document.querySelector("#name");
const comment = document.querySelector("#comment");
const alertInfo = document.querySelector(".alert");
const addCommentForm = document.querySelector(".add-comment-form");

(function () {
  //get articles from localStorage
  let articles = JSON.parse(localStorage.getItem("articles"));
  //display article
  if (articles === null || articles.length === 0) {
    loading.style.display = "none";
    blog.innerHTML = "<h2>Article has not found!</h2>";
  } else {
    loading.style.display = "none";
    let article = articles.find((article) => article.id == id);
    if (article) {
      let comments = ""
      for (let i = 0; i < article.comments.length; i++) { 
        comments += `
          <div class="comment">
            <h3>${article.comments[i].name}</h3>
            <p>${article.comments[i].comment}</p>
          </div>
        `;
      }
      let articleTemplate = `
        <div class="blog-img">
            <img src="${article.image}" alt="" />
        </div>
        <h1>${article.title}</h1>
        <p>${article.description}</p>
        <button class="leave-comment-btn">Leave a comment</button>
        <div class="comments-container">
          <div class="comments-header">
            <h1>Comments</h1>
            <hr />
          </div>
          <div class="comments">${comments}</div>
        </div>
    `;
      blog.innerHTML += articleTemplate;
      const leaveCommentBtn = document.querySelector(".leave-comment-btn");
      const closeModal = document.querySelector(".close-modal");
      leaveCommentBtn.addEventListener("click", () => {
        formContainer.classList.toggle("open-modal");
        window.scrollTo(0, 0, {
          behavior: "smooth",
        });
      });

      addCommentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!name.value || !comment.value) {
          alertInfo.style.display = "block";
          alertInfo.style.backgroundColor = "#f44336";
          alertInfo.style.color = "#fff";
          alertInfo.innerHTML = `Please fill all fields`;
        } else {
          let articles = JSON.parse(localStorage.getItem("articles"));
          let article = articles.find((article) => article.id == id);
          article.comments.push({
            name: name.value,
            comment: comment.value,
          });
          localStorage.setItem("articles", JSON.stringify(articles));
          window.location.reload(); 
        }
       });

      closeModal.addEventListener("click", () => {
        formContainer.classList.toggle("open-modal");
      });
    } else {
      blog.innerHTML = "<h1>Article has not found!</h1>";
    }
  }
})();
