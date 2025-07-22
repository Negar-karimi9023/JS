document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("ol");
  document.querySelector(".items").appendChild(container);

  let items = localStorage.getItem("todo-items");
  items = items === null ? [] : JSON.parse(items);

  for (const item of items) {
    createRow(item);
  }

  document.querySelector("form").onsubmit = (event) => {
    event.preventDefault();
    const value = document.querySelector("form input").value;
    if (value.trim() === "") {
      alert("you should enter a data");
      return;
    }

    const id = (Math.random() + 1).toString(36).substring(7);
    const data = { id, value };
    items.push(data);
    sync();
    createRow(data);
  };

  function createRow(data) {
    const row = document.createElement("li");
    const title = document.createElement("h3");
    title.innerHTML = data.value;
    title.onclick = () => {
      const value = prompt("Enter new data");
      //const findIndex = items.findIndex(item.id === data.id);
      //items[findIndex] = value;
      title.innerHTML = value;
      data.value = value;
      sync();
    };

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.onclick = () => {
      if (confirm("Do you want to delete?")) {
        row.remove();
        items = items.filter((item) => item.id !== data.id);
        sync();
      }
    };

    row.appendChild(title);
    row.appendChild(deleteButton);
    container.appendChild(row);
  }

  function sync() {
    localStorage.setItem("todo-items", JSON.stringify(items));
  }
});
