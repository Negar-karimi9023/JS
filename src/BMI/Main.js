const form = document.querySelector("form");

function calculateBMI(height, weight) {
  height = height / 100;
  weight = weight / (height * height);

  return weight.toFixed(2);
}

function clearResult() {
  document.querySelector("#result").innerHTML = "";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  document.querySelector("#result").innerHTML = "";
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

  if (height.trim() === "" || weight.trim() === "") {
    alert("Inputs are Empty");
    return false;
  }

  height = parseInt(height);
  weight = parseInt(weight);

  if (isNaN(height) || isNaN(weight)) {
    alert("Inputs are not Numbers");
    return false;
  }

  if (height < 0 || weight < 0) {
    alert("Inputs should not be less than 0");
    return false;
  }
  document.querySelector("#result").innerHTML = calculateBMI(height, weight);
});

document.getElementById("height").addEventListener("keydown", clearResult);

document.getElementById("weight").addEventListener("keydown", clearResult);
