const boxes = document.querySelectorAll(".inbox input[type=checkbox]");
const masterCheckBox = document.querySelector("#masterCheckBox");

let lastChecked = false;
function handelCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    boxes.forEach((box) => {
      if (box === this || box === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        box.checked = true;
      }
    });
  }
  lastChecked = this;
}

function handelMasterCheck() {
  console.log("salam");
  if (this.checked) {
    boxes.forEach((box) => (box.checked = true));
  } else {
    boxes.forEach((box) => (box.checked = false));
  }
}

boxes.forEach((box) => box.addEventListener("click", handelCheck));
masterCheckBox.addEventListener("click", handelMasterCheck);
