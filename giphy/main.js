const API = "f0Sb38O3pufsZOSAytJ68Ulw77mknKV6";

const form = document.getElementById("search");
const input = document.getElementById("input");
const div = document.getElementById("div");

form.addEventListener("reset", (e) => {
  e.preventDefault();
  div.innerHTML = "";
  input.value = "";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const queryString = input.value;
  searchGiph(queryString);
});

function searchGiph(queryString) {
  const path = `http://api.giphy.com/v1/gifs/search?api_key=${API}&q=${queryString}`;
  fetch(path)
    .then((res) => res.json())
    .then((obj) => {
      let image = "";
      obj.data.forEach((el) => {
        let imgUrl = el.images.fixed_width.url;
        let imgTitle = el.title;
        image += `
        <img src="${imgUrl}" alt="${imgTitle}">
        `;
      });
      div.innerHTML = image;
    });
}
