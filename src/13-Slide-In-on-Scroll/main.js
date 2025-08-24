function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide() {
  //   console.log(window.scrollY);
  console.log(window.innerHeight);
}

window.addEventListener("scroll", debounce(checkSlide));

window.onload = function () {
  console.log(window.innerHeight);
  console.log(window.outerHeight);
  console.log(document.body.scrollHeight);
};
