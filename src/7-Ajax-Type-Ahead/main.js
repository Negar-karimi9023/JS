const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => cities.push(...data));

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function findMatchWord(word, cities) {
  return cities.filter((place) => {
    const regExp = new RegExp(word, "gi");
    return place.city.match(regExp) || place.state.match(regExp);
  });
}

function displayMaches() {
  const matchArrays = findMatchWord(this.value, cities);
  const html = matchArrays
    .map((place) => {
      const macheRegx = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        macheRegx,
        `<span class="hl">${this.value}</span>`
      );
      const state = place.city.replace(
        macheRegx,
        `<span class="hl"> ${this.value} </span>`
      );
      return `
    <li>
    <span class="name">${cityName} , ${state}</span>
    <span class="population">${numberWithCommas(place.population)}</span>
    </li>
    `;
    })
    .join("");

  suggestions.innerHTML = html;
  console.log(matchArrays);
}

searchInput.addEventListener("change", displayMaches);
searchInput.addEventListener("keyup", displayMaches);
