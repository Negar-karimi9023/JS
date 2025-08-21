const apiKey = "aYLNo2dpY7x6l7/kOe8SvQ==KsHt59A8O5k0fm7q";
const options = {
  method: "Get",
  headers: {
    "X-Api-Key": apiKey,
  },
};
const btnEl = document.querySelector(".btn");
let jokeEl = document.querySelector("#joke");

const apiURL = "https://api.api-ninjas.com/v1/dadjokes";

async function getJoke() {
  const response = await fetch(apiURL, options);
  const data = await response.json();
  jokeEl.innerHTML = data[0].joke;
}

btnEl.addEventListener("click", getJoke);
