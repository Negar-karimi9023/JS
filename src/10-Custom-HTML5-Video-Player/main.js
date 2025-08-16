const video = document.querySelector(".viewer");
const toggle = document.querySelector(".toggle");

function togglePlay() {
  console.log("hi");
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function updateButton() {
  const icon = video.paused ? "play" : "pause";
  toggle.textContent = icon;
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
toggle.addEventListener("click", togglePlay);
