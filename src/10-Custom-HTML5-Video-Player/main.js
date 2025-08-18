const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const toggle = document.querySelector(".toggle");
const buttons = document.querySelectorAll("[data-skip]");
const ranges = document.querySelectorAll(".player__slider");
const progressBar = player.querySelector(".progress__filled");
const progressMain = document.querySelector(".progress");

function togglePlay() {
  console.log("hi");
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function updateButton() {
  const icon = video.paused ? "play" : "pause";
  toggle.textContent = icon;
}

function skip() {
  // console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}
function handelRangeUpdate() {
  // console.log(this.name);
  // console.log(this.value);
  video[this.name] = this.value;
}

function handelProgressUpdate() {
  //console.log(progress);
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  console.log(flag);
  const position = (e.offsetX / progressMain.offsetWidth) * video.duration;
  video.currentTime = position;
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handelProgressUpdate);

toggle.addEventListener("click", togglePlay);
buttons.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("change", handelRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handelRangeUpdate)
);

let flag = false;
progressMain.addEventListener("click", scrub);
progressMain.addEventListener("mousemove", (e) => flag && scrub(e));
progressMain.addEventListener("mousedown", () => (flag = true));
progressMain.addEventListener("mouseup", () => (flag = false));
