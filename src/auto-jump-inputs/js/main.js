class jumpInputs {
  constructor(el, config) {
    const container = document.querySelector(el);
    this.container = container;
    this.config = config;
    container.addEventListener("keypress", (event) => {
      if (event.target.tagName === "INPUT") {
        if (event.target.value.length >= config.inputLength) {
          event.returnValue = false;
        }
      }
    });

    container.addEventListener("keyup", (event) => {
      if (event.target.tagName === "INPUT") {
        const value = event.target.value;

        if (event.key != "Backspace" && value.length === config.inputLength) {
          const currentOrderID = parseInt(
            event.target.getAttribute("data-order")
          );

          const nextElement = document.querySelector(
            `input[data-order="${currentOrderID + 1}" ]`
          );
          console.log(currentOrderID);

          if (nextElement !== null) {
            nextElement.focus();
          } else {
            if (this.isFinished()) {
              if (config.onFinish) {
                config.onFinish();
              }
            }
          }
        }
      }
    });

    container.addEventListener("keydown", (event) => {
      if (event.target.tagName === "INPUT" && event.key === "Backspace") {
        if (event.target.value.length === 0) {
          const currentOrderID = parseInt(
            event.target.getAttribute("data-order")
          );

          const prevElement = document.querySelector(
            `input[data-order="${currentOrderID - 1}"]`
          );

          if (prevElement != null) {
            prevElement.focus();
          }
        }
      }
    });
  }
  isFinished() {
    const inputs = document.querySelectorAll("input");
    const emptyInputs = Array.from(inputs).filter((input) => {
      return input.value === "";
    });
    return emptyInputs.length === 0;
  }
}

new jumpInputs(".container", {
  inputLength: 4,
  onFinish() {
    console.log("FINISHED");
  },
});
