const formEl = document.querySelector(".add-items");
const platesEl = document.querySelector(".plates");
const btnCheckAllEl = document.querySelector(".btn-primary");
const btnUnCheckAllEl = document.querySelector(".btn-danger");
const btnDeleteAllEl = document.querySelector(".btn-delete");

const items = JSON.parse(localStorage.getItem("items")) || [];
function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text: text,
    status: false,
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
      <button class="btn btn-delete" data-index=${i}>Delete</button>
      </li>`;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return;
  const el = e.target;
  items[el.dataset.index].status = !items[el.dataset.index].status;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, platesEl);
}

function deleteItem(e) {
  if (!e.target.matches("button")) return;
  const indexItem = e.target.dataset.index;
  items.splice(indexItem, 1);
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, platesEl);
}

function checkAll() {
  items.forEach((item) => {
    item.status = true;
  });
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, platesEl);
}

function unCheckAll() {
  items.forEach((item) => {
    item.status = false;
  });
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, platesEl);
}

function deleteAll() {
  // console.log("hi");
  // items.length = 0;
  items.splice(0, items.length);
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, platesEl);
}

formEl.addEventListener("submit", addItem);
platesEl.addEventListener("click", toggleDone);
platesEl.addEventListener("click", deleteItem);
btnCheckAllEl.addEventListener("click", checkAll);
btnUnCheckAllEl.addEventListener("click", unCheckAll);
btnDeleteAllEl.addEventListener("click", deleteAll);
populateList(items, platesEl);
