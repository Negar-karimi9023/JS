async function getUsers() {
  let users;
  const cachedUser = localStorage.getItem("users");
  if (cachedUser !== null) {
    users = JSON.parse(cachedUser);
  } else {
    const url = "https://randomuser.me/api/?inc=name,picture&results=48";
    const request = await fetch(url);
    const result = await request.json();
    users = result.results;
    localStorage.setItem("users", JSON.stringify(users));
  }

  return users;
}

async function showUsers(users = null) {
  try {
    document.querySelector(".users").innerHTML = "";
    if (users === null) {
      users = await getUsers();
    }
    for (user of users) {
      const name =
        user.name.title + " " + user.name.first + " " + user.name.last;
      const picture = user.picture.medium;

      const userContainer = document.createElement("div");
      userContainer.classList.add("col-2");
      userContainer.classList.add("user");

      const pic = document.createElement("img");
      pic.src = picture;
      pic.alt = name;

      const userName = document.createElement("h3");
      userName.innerHTML = name;

      userContainer.appendChild(pic);
      userContainer.appendChild(userName);
      document.querySelector(".users").appendChild(userContainer);
      //console.log(user);
    }
    return users;
  } catch (error) {
    console.log(error);
  }
}

(async function () {
  const users = await showUsers();
  let timeOut;
  document.querySelector("#filter").addEventListener("keyup", (e) => {
    window.clearTimeout(timeOut);

    timeOut = setTimeout(() => {
      console.log("1");
      const value = e.target.value.toLowerCase();
      const filterdUser = users.filter((user) => {
        const name = `${user.name.title} ${user.name.first} ${user.name.last}`;
        return name.toLowerCase().indexOf(value) > -1;
      });
      showUsers(filterdUser);
    }, 500);
  });
})();

// const url = "https://randomuser.me/api/?inc=name,picture&results=48";
// const request = fetch(url)
//   .then((Response) => Response.json())
//   .then((result) => {
//     const users = result.results;
//     for (user of users) {
//       const name =
//         user.name.title + " " + user.name.first + " " + user.name.last;
//       const picture = user.picture.medium;

//       const userContainer = document.createElement("div");
//       userContainer.classList.add("col-2");
//       userContainer.classList.add("user");

//       const pic = document.createElement("img");
//       pic.src = picture;
//       pic.alt = name;

//       const userName = document.createElement("h3");
//       userName.innerHTML = name;

//       userContainer.appendChild(pic);
//       userContainer.appendChild(userName);
//       document.querySelector(".users").appendChild(userContainer);
//       console.log(user);
//     }
//   });
