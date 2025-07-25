const routes = [
  {
    path: "/",
    component: "home",
  },
  {
    path: "/posts",
    component: "posts",
  },
  {
    path: "/posts/:id",
    component: "post-single",
  },
  {
    path: "/contact",
    component: "contact",
  },
];

document.querySelector("#app").onclick = (event) => {
  if (event.target.classList.contains("link")) {
    event.preventDefault();
    console.log(event.target.getAttribute("href"));
    const path = event.target.getAttribute("href");
    window.location.hash = path;
  }
};

window.addEventListener("popstate", () => {
  let path = window.location.hash;

  path = path.substring(1, path.length);

  for (const rout of routes) {
    if (path === rout.path) {
      const page = `/vanillajs-single-page-application/js/pages/${rout.component}.js`;
      // const page = new URL(`./pages/${rout.component}.js`, import.meta.url)
      //   .href;
      console.log("Importing page:", page);

      import(page)
        .then((module) => {
          const content = module.default;
          console.log(content);
          document.querySelector("#content").innerHTML = module.default;
        })
        .catch((err) => {
          console.error("خطا در بارگذاری ماژول:", err);
          document.querySelector("#content").innerHTML =
            "<h1>صفحه یافت نشد</h1>";
        });
    }
  }
});
