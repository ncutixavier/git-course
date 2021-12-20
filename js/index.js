const articles = [
  {
    id: 1,
    image: 'https://picsum.photos/300/200?image=237',
    title: 'Animal Crossing',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptatibus totam quae delectus sint! Natus, debitis animi error ut alias dolor incidunt optio commodi odit veniam ipsum. Explicabo nam praesentium veniam! Eveniet aliquam laudantium, facilis, tempora et voluptates voluptatem labore quia eius reiciendis nostrum unde eaque, tenetur culpa nisi ut recusandae! Nobis optio odio amet, quidem impedit repudiandae provident tempore necessitatibus! Odio, debitis inventore consectetur impedit molestiae dolorem vero ducimus quibusdam ullam porro in? Alias adipisci, ad necessitatibus, tempora omnis laboriosam aliquid dolore natus aliquam dignissimos explicabo veritatis provident repudiandae, quo corporis reprehenderit dolorem voluptatem. Sunt minus in magni commodi!',
  },
  {
    id: 2,
    image: 'https://picsum.photos/300/200?image=239',
    title: 'Animal travelling',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptatibus totam quae delectus sint! Natus, debitis animi error ut alias dolor incidunt optio commodi odit veniam ipsum. Explicabo nam praesentium veniam! Eveniet aliquam laudantium, facilis, tempora et voluptates voluptatem labore quia eius reiciendis nostrum unde eaque, tenetur culpa nisi ut recusandae! Nobis optio odio amet, quidem impedit repudiandae provident tempore necessitatibus! Odio, debitis inventore consectetur impedit molestiae dolorem vero ducimus quibusdam ullam porro in? Alias adipisci, ad necessitatibus, tempora omnis laboriosam aliquid dolore natus aliquam dignissimos explicabo veritatis provident repudiandae, quo corporis reprehenderit dolorem voluptatem. Sunt minus in magni commodi!',
  },
  {
    id: 3,
    image: 'https://picsum.photos/300/200?image=240',
    title: 'Guest travelling',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptatibus totam quae delectus sint! Natus, debitis animi error ut alias dolor incidunt optio commodi odit veniam ipsum. Explicabo nam praesentium veniam! Eveniet aliquam laudantium, facilis, tempora et voluptates voluptatem labore quia eius reiciendis nostrum unde eaque, tenetur culpa nisi ut recusandae! Nobis optio odio amet, quidem impedit repudiandae provident tempore necessitatibus! Odio, debitis inventore consectetur impedit molestiae dolorem vero ducimus quibusdam ullam porro in? Alias adipisci, ad necessitatibus, tempora omnis laboriosam aliquid dolore natus aliquam dignissimos explicabo veritatis provident repudiandae, quo corporis reprehenderit dolorem voluptatem. Sunt minus in magni commodi!',
  },
  {
    id: 4,
    image: 'https://picsum.photos/300/200?image=295',
    title: 'Guest travelling',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptatibus totam quae delectus sint! Natus, debitis animi error ut alias dolor incidunt optio commodi odit veniam ipsum. Explicabo nam praesentium veniam! Eveniet aliquam laudantium, facilis, tempora et voluptates voluptatem labore quia eius reiciendis nostrum unde eaque, tenetur culpa nisi ut recusandae! Nobis optio odio amet, quidem impedit repudiandae provident tempore necessitatibus! Odio, debitis inventore consectetur impedit molestiae dolorem vero ducimus quibusdam ullam porro in? Alias adipisci, ad necessitatibus, tempora omnis laboriosam aliquid dolore natus aliquam dignissimos explicabo veritatis provident repudiandae, quo corporis reprehenderit dolorem voluptatem. Sunt minus in magni commodi!',
  },
  {
    id: 5,
    image: 'https://picsum.photos/300/200?image=395',
    title: 'Coffee Shop',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptatibus totam quae delectus sint! Natus, debitis animi error ut alias dolor incidunt optio commodi odit veniam ipsum. Explicabo nam praesentium veniam! Eveniet aliquam laudantium, facilis, tempora et voluptates voluptatem labore quia eius reiciendis nostrum unde eaque, tenetur culpa nisi ut recusandae! Nobis optio odio amet, quidem impedit repudiandae provident tempore necessitatibus! Odio, debitis inventore consectetur impedit molestiae dolorem vero ducimus quibusdam ullam porro in? Alias adipisci, ad necessitatibus, tempora omnis laboriosam aliquid dolore natus aliquam dignissimos explicabo veritatis provident repudiandae, quo corporis reprehenderit dolorem voluptatem. Sunt minus in magni commodi!',
  },
  {
    id: 6,
    image: 'https://picsum.photos/300/200?image=495',
    title: 'Local Machine',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptatibus totam quae delectus sint! Natus, debitis animi error ut alias dolor incidunt optio commodi odit veniam ipsum. Explicabo nam praesentium veniam! Eveniet aliquam laudantium, facilis, tempora et voluptates voluptatem labore quia eius reiciendis nostrum unde eaque, tenetur culpa nisi ut recusandae! Nobis optio odio amet, quidem impedit repudiandae provident tempore necessitatibus! Odio, debitis inventore consectetur impedit molestiae dolorem vero ducimus quibusdam ullam porro in? Alias adipisci, ad necessitatibus, tempora omnis laboriosam aliquid dolore natus aliquam dignissimos explicabo veritatis provident repudiandae, quo corporis reprehenderit dolorem voluptatem. Sunt minus in magni commodi!',
  },
];

function displayArticles(articles) {
  let blog = '';
  for (let i = 0; i < articles.length; i++) {
    let template = `
        <a class="article" href="blog.html?id=${articles[i].id}">
            <div>
                <div class="article-img">
                    <img src="${articles[i].image}" alt="" srcset="">
                </div>
                <h3>${articles[i].title}</h3>
                <p>${articles[i].description.substring(0, 120)}...</p>
            </div>
        </a>
        `;
    blog += template;
  }
  return blog;
}

const articlesContainer = document.querySelector('.articles');
articlesContainer.innerHTML = displayArticles(articles);
