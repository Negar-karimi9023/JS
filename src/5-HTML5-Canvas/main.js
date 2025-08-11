const myCanvas = document.getElementById("myCanvas");
const btnClearCanvas = document.getElementById("btnClearCanvas");
const ctx = myCanvas.getContext("2d");
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

let gradient = ctx.createLinearGradient(0, 0, 200, 0);

gradient.addColorStop(0, "green");
gradient.addColorStop(0.7, "blue");
gradient.addColorStop(1, "pink");
ctx.strokeStyle = gradient;
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 5;
let isDrawing = false;

let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) return;
  console.log(e);
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function clearCanvasArea() {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
}

document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
document.addEventListener("mouseup", () => (isDrawing = false));
document.addEventListener("mouseout", () => (isDrawing = false));

btnClearCanvas.addEventListener("click", clearCanvasArea);
