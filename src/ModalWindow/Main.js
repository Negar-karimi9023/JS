function createModal(config) {
  const hideModalOnEscape = (e) => {
    if (e.key === "Escape") {
      hideModal;
    }
  };

  const hideModal = () => {
    modal.remove();
    document.removeEventListener("keyup", hideModalOnEscape);
  };

  //modal
  const modal = document.createElement("div");
  modal.classList.add("modal");

  //background
  const background = document.createElement("div");
  background.classList.add("background");
  background.onclick = hideModal;

  //container
  const container = document.createElement("div");
  container.classList.add("modal-container");

  //header
  const header = document.createElement("div");
  header.classList.add("header");
  header.innerHTML = config.title;
  container.appendChild(header);

  const closeButton = document.createElement("button");
  closeButton.innerHTML = "&times;";
  header.appendChild(closeButton);
  closeButton.onclick = hideModal;

  //body
  const body = document.createElement("div");
  body.classList.add("body");

  body.innerHTML =
    config.body instanceof HTMLElement ? config.body.innerHTML : config.body;
  container.appendChild(body);

  modal.appendChild(background);
  modal.appendChild(container);
  document.body.appendChild(modal);

  document.addEventListener("keyup", hideModal);
}

document.querySelector("#modal-1").onclick = () =>
  createModal({
    title: "welcome",
    body: "this ia a modal",
  });

document.querySelector("#modal-2").onclick = () =>
  createModal({
    title: "welcome",
    body: document.querySelector(".modal-content").innerHTML,
  });
