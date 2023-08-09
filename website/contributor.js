const res = await fetch(
  `https://api.github.com/repos/Bookingjini-Labs/bookingjini-icons/contributors`
);

const contributors = await res.json();
console.log(contributors);

// User Cards and Content
const container = document.getElementById("contributors");

let html = "";
contributors.forEach((contributor) => {
  html += `
       <div class="user user-dark-mode">
            <img alt="user-avatar" class="user-image" src = "${contributor.avatar_url}"/>
            <h5>${contributor.login}</h5>
            <p class="contributions"><a href="https://github.com/Bookingjini-Labs/bookingjini-icons/commits?author=${contributor.login}" target="_blank" ><strong>Contributions:${contributor.contributions}</strong></a> ✨</p>
            <a href="${contributor.html_url}" target="_blank"><button type="button"  class="btn btn-outline-primary"><strong>View Profile</strong></button></a>
       </div>
     `;
});

container.innerHTML = html;

//  Dark/Light functionality color change
// const darkLightMode = document.getElementById("darkmode-toggle");
// const userCard = [...document.getElementsByClassName("user")];

// darkLightMode.addEventListener("change", () => {
//   const isDarkmode = darkLightMode.checked;

//   if (isDarkmode) {
//     userCard.forEach((user) => {
//       user.style.backgroundColor = "#1e1b22";
//       user.style.color = "whitesmoke";
//     });
//   } else {
//     userCard.forEach((user) => {
//       user.style.backgroundColor = "#eef7fb";
//       user.style.color = "black";
//     });
//   }
// });
// Dark/Light functionality color change
//Added new changes accordingly
// Dark/Light functionality color change
const darkLightMode = document.getElementById("darkmode-toggle");
const userCard = [...document.getElementsByClassName("user")];

darkLightMode.addEventListener("change", () => {
  const isDarkmode = darkLightMode.checked;

  if (isDarkmode) {
    userCard.forEach((user) => {
      user.style.backgroundColor = "#1e1b22";
      user.style.color = "whitesmoke";
    });
  } else {
    userCard.forEach((user) => {
      user.style.backgroundColor = "#eef7fb";
      user.style.color = "black";
    });
  }
});

// Initialize based on default mode
const isDarkmodeDefault = darkLightMode.checked;

if (isDarkmodeDefault) {
  userCard.forEach((user) => {
    user.style.backgroundColor = "#1e1b22";
    user.style.color = "whitesmoke";
  });
} else {
  userCard.forEach((user) => {
    user.style.backgroundColor = "#eef7fb";
    user.style.color = "black";
  });
}
