// async function getRequest() {
//   const urlJson = fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => {
//       return response.json();
//     })
//     .then((posts) => console.log(posts))
//     .catch((err) => console.log(err));
// }

// getRequest();

function create(id, title, body) {
  return `
  <div class = "style">
    <p>Id: ${id}</p>
    <p>Title: ${title}</p>
    <p>Body: ${body}</p>
  </div>
  `;
}

async function getRequest() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function render() {
  const container = document.querySelector(".container");
  try {
    const awaitRequest = await getRequest();
    awaitRequest.forEach((el) => {
      container.innerHTML += create(el.id, el.title, el.body);
    });
  } catch (error) {
    console.log(error);
  }
}

const btn = document
  .querySelector(".get")
  .addEventListener("click", () => render());


  