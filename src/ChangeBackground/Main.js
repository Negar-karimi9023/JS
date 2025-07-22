const colors = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "red",
  "Brown",
  "Chartreuse",
  "Crimson",
  "DarkSlateBlue",
  "Indigo",
  "MediumOrchid",
];
function setColor(color) {
  document.body.style.backgroundColor = color;
  document.querySelector("#current-color").innerHTML = color;

  const currentActiveButton = document.querySelector("button.active");
  if (currentActiveButton !== null) {
    currentActiveButton.classList.remove("active");
  }

  document.querySelector(`button[data-color=${color}]`).classList.add("active");
}

colors.forEach((color) => {
  const btn = document.createElement("button");
  btn.style.backgroundColor = color;
  btn.setAttribute("data-color", color);
  document.querySelector("div.colors").appendChild(btn);
  btn.onclick = function () {
    setColor(color);
  };
});
document.body.onload = function () {
  const randomColor = Math.floor(Math.random() * colors.length);
  const color = colors[randomColor];
  setColor(color);
};
