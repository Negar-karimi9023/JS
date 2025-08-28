const formEl = document.querySelector(".add-items");
const platesEl = document.querySelector(".plates");

const items = JSON.parse(localStorage.getItem("items")) || [];
function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text: text,
    status: true,
  };

  items.push(item);
  populateList(items, platesEl);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], plateList) {
  plateList.innerHTML = plates
    .map((plate, i) => {
      return `<li>
      <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.status ? "checked" : ""
      }/>
      <label for="item${i}">${plate.text}</label>
      </li>`;
    })
    .join("");
}

formEl.addEventListener("submit", addItem);
populateList(items, platesEl);
