const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
myCanvas.offsetWidth = window.innerWidth;
myCanvas.offsetHeight = window.innerHeight;

ctx.strokeStyle = "Red";
ctx.lineWidth = "2px";

let lastX = 0;
let lastY = 0;

let isDraw = false;

function draw(e) {
  if (!isDraw) return;
  console.log(e);
  console.log(isDraw);
  ctx.beginPath();
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.moveTo(lastX, lastY);
  ctx.stroke();
}

myCanvas.addEventListener("mousemove", draw);
myCanvas.addEventListener("mousedown", () => (isDraw = true));
myCanvas.addEventListener("mouseup", () => (isDraw = false));
myCanvas.addEventListener("mouseout", () => (isDraw = false));
