const formEl = document.querySelector(".add-items");
const platesEl = document.querySelector(".plates");

const items = [];
function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text: text,
    status: false,
  };

  items.push(item);
  this.reset();
  populateList(items, platesEl);
}

function populateList(plates = [], plateList) {
  plateList.innerHTML = plates
    .map((plate, i) => {
      return `<li>
      <label for="">${plate.text}</label>
      </li>`;
    })
    .join("");
}

formEl.addEventListener("submit", addItem);
