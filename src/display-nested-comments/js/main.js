const comments = [
  {
    name: "mario",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At.",
    children: [
      {
        name: "Emily",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, velit iste architecto placeat doloribus repellat!",
        children: [
          {
            name: "mario",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, necessitatibus?",
            children: [
              {
                name: "Emily",
                text: "Lorem, ipsum dolor.",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "David",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    children: [],
  },
];

function renderComments(comments) {
  let output = "";

  for (const comment of comments) {
    const name = `<b>${comment.name}</b>`;
    const text = `<p>${comment.text}</p>`;
    let children = "";

    if (Array.isArray(comment.children) && comment.children.length > 0) {
      children = renderComments(comment.children);
    }

    output += `<li>${name}${text}${children}</li>`;
  }

  return `<ul>${output}</ul>`;
}

document.querySelector(".comments-container").innerHTML =
  renderComments(comments);
