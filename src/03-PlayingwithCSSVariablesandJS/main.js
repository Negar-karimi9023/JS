const inputcontols = document.querySelectorAll(".control input");

const handelcontrol = () => {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `${this.name}`,
    this.value + suffix
  );
};

inputcontols.forEach((inputcontol) => {
  console.log("hi");
  inputcontol.addEventListener("change", handelcontrol);
});

inputcontols.forEach((inputcontol) =>
  inputcontol.addEventListener("mousemove", handelcontrol)
);
