const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const MeaningEl = document.getElementById("Meaning");
const audioEl = document.getElementById("audio");

async function fetchApi(word) {
  try {
    infoTextEl.innerText = `Searching the meaning of word "${word}"`;
    meaningContainerEl.style.display = "none";

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());

    if (result.title) {
      infoTextEl.style.display = "none";
      meaningContainerEl.style.display = "block";
      titleEl.innerText = word;
      MeaningEl.innerText = "N/A";
      audioEl.style.display = "none";
    } else {
      infoTextEl.style.display = "none";
      meaningContainerEl.style.display = "block";
      audioEl.style.display = "inline-flex";
      titleEl.innerText = result[0].word;
      MeaningEl.innerText = result[0].meanings[0].definitions[0].definition;
      audioEl.src = result[0].phonetics[0].audio;
    }
  } catch (error) {
    console.log(error);
  }
}

function findword(e) {
  if (e.target.value && e.key === "Enter") {
    fetchApi(e.target.value);
  }
}

inputEl.addEventListener("keyup", findword);
