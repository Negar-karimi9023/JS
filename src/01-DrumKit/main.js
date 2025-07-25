const keys = document.querySelectorAll(".key");

const playing = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio || !key) return;
  audio.play();
  key.classList.add("playing");
};

const removeTransition = (e) => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
};

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playing);
