const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");
hourHand.style.backgroundColor = "red";
minHand.style.backgroundColor = "green";

function clockTime() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const mins = now.getMinutes();
  const minDegrees = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  const hours = now.getMinutes();
  const hourDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(clockTime, 1000);
const nows = new Date();
console.log(nows.getHours(), nows.getMinutes(), nows.getSeconds());
