const bodyElement = document.querySelector("body");

function buildheart(e) {
  const x = e.offsetX;
  const y = e.offsetY;
  const spanElement = document.createElement("span");
  spanElement.style.left = x + "px";
  spanElement.style.top = y + "px";
  const size = Math.random() * 100;
  spanElement.style.width = size + "px";
  spanElement.style.height = size + "px";
  bodyElement.appendChild(spanElement);
  setTimeout(() => {
    spanElement.remove();
  }, 3000);
}
bodyElement.addEventListener("mousemove", buildheart);
