async function getUsers() {
  const url = "https://randomuser.me/api/?inc=name,picture&results=48";
  try {
    const request = await fetch(url);
    const result = await request.json();
    const users = result.results;
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
      console.log(user);
    }
  } catch (error) {
    console.log(error);
  }
}
getUsers();
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
