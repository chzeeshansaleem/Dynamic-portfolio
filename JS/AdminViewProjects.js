const redirctadmin = localStorage.getItem("admin");
if (!redirctadmin) {
  const url = "http://127.0.0.1:5500/HTML/login.html";
  window.location.href = url;
}

const projectData = JSON.parse(localStorage.getItem("allproject"));
// [
//   {
//     username: "zeeshan@gmail.com",
//     projectId: 1,
//     title: "Project Title 0",
//     description:
//       "Describe the project being very specific, you can use the Twitter standard: no more than 280 characters: complement the information: the skills learned or reinforced in its realization and how you faced it, prove to be proactive in the search for solutions.",
//     img: "../asserts/images/pro2.jpg",
//   },
//   {
//     username: "zeeshan@gmail.com",
//     projectId: 2,
//     title: "Project Title 1",
//     description:
//       "Describe the project being very specific, you can use the Twitter standard: no more than 280 characters: complement the information: the skills learned or reinforced in its realization and how you faced it, prove to be proactive in the search for solutions.",
//     img: "../asserts/images/pro2.jpg",
//   },
//   {
//     username: "shani@gmail.com",
//     projectId: 3,
//     title: "Project Title 2",
//     description:
//       "Describe the project being very specific, you can use the Twitter standard: no more than 280 characters: complement the information: the skills learned or reinforced in its realization and how you faced it, prove to be proactive in the search for solutions.",
//     img: "../asserts/images/pro1.jpg",
//   },
// ];

const projectsContainer = document.querySelector(".projects");
const modal = document.querySelector(".modal");
const modalDetails = document.querySelector(".modalDetails");
projectData.forEach((project) => {
  const projectRow = document.createElement("div");
  projectRow.classList.add("ProjectRow");
  const projectDetails = document.createElement("div");
  projectDetails.classList.add("projectDetails");
  const projectTitle = document.createElement("h3");
  projectTitle.textContent = project.title;
  const projectDescription = document.createElement("p");
  projectDescription.classList.add("details");
  if (project.description.length > 150) {
    projectDescription.textContent = project.description.slice(0, 150) + "...";
  } else {
    projectDescription.textContent = project.description;
  }
  const tags1 = document.createElement("p");
  tags1.classList.add("tags");
  tags1.textContent = project.tags;
  const framework1 = document.createElement("p");
  framework1.classList.add("framework");
  if (project.technology.length > 0) {
    framework1.textContent = "Technologies: " + project.technology;
  } else {
    framework1.textContent = "";
  }
  const languages1 = document.createElement("p");
  languages1.classList.add("language");
  if (project.languages.length > 0) {
    languages1.textContent = "Languages: " + project.languages;
  } else {
    languages1.textContent = "";
  }
  projectDescription.onclick = function open() {
    modal.style.display = "block";

    const modalPic = document.querySelector(".modalPic");
    modalPic.style.backgroundImage = `url(${project.img})`;

    modalDetails.innerHTML = "";

    const protitle = document.createElement("h3");
    protitle.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    modalDetails.appendChild(protitle);
    modalDetails.appendChild(description);
  };

  const projectBtn = document.createElement("div");
  projectBtn.classList.add("projectBtn");
  const probtn1 = document.createElement("div");
  probtn1.classList.add("proBtn1");
  const probtn2 = document.createElement("div");
  probtn2.classList.add("proBtn1");
  const liveBtn = document.createElement("button");
  liveBtn.classList.add("liveBtn");
  liveBtn.textContent = "See Live";
  const projectImg = document.createElement("div");
  projectImg.classList.add("projectImg");
  projectImg.style.backgroundImage = `url(${project.img})`;
  // sirf see live per click kr k
  liveBtn.onclick = function () {
    modal.style.display = "block";

    const modalPic = document.querySelector(".modalPic");
    modalPic.style.backgroundImage = `url(${project.img})`;

    const modalDetails = document.querySelector(".modalDetails");
    modalDetails.innerHTML = "";

    const protitle = document.createElement("h3");
    protitle.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;
    const tags = document.createElement("p");
    tags.textContent = project.tags;
    const framework = document.createElement("p");
    framework.textContent = "Technologies: " + project.technology;
    const languages = document.createElement("p");
    languages.textContent = "Languages: " + project.languages;
    modalDetails.appendChild(protitle);
    modalDetails.appendChild(description);
    modalDetails.appendChild(tags);
    modalDetails.appendChild(languages);
    modalDetails.appendChild(framework);
  };

  const cross = document.getElementById("cross");
  if (cross) {
    cross.onclick = () => {
      modal.style.display = "none";
    };
  }
  const sourceBtn = document.createElement("a");
  sourceBtn.href = "#";
  sourceBtn.classList.add("sourceBtn");
  sourceBtn.textContent = "Source Code";

  projectBtn.appendChild(liveBtn);
  projectBtn.appendChild(sourceBtn);

  projectDetails.appendChild(projectTitle);
  projectDetails.appendChild(projectDescription);
  projectDetails.appendChild(tags1);
  projectDetails.appendChild(framework1);

  projectDetails.appendChild(languages1);

  projectDetails.appendChild(projectBtn);

  projectRow.appendChild(projectDetails);
  projectRow.appendChild(projectImg);
  if (projectsContainer) {
    projectsContainer.appendChild(projectRow);
  }
});

const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("input", searchProjects);
}

function searchProjects() {
  const filter = searchInput.value.toUpperCase();
  const projectRows = document.querySelectorAll(".ProjectRow");

  projectRows.forEach((projectRow) => {
    const TAGS = projectRow.querySelector(".tags");
    const TagText = TAGS.textContent.toUpperCase();
    const frame = projectRow.querySelector(".framework");
    const frameText = frame.textContent.toUpperCase();
    const language = projectRow.querySelector(".tags");
    const languageText = language.textContent.toUpperCase();
    const projectTitle = projectRow.querySelector(".projectDetails h3");
    const projectDescription = projectRow.querySelector(".projectDetails p");
    const titleText = projectTitle.textContent.toUpperCase();
    const descriptionText = projectDescription.textContent.toUpperCase();

    if (
      titleText.includes(filter) ||
      descriptionText.includes(filter) ||
      TagText.includes(filter) ||
      frameText.includes(filter) ||
      languageText.includes(filter)
    ) {
      projectRow.style.display = "flex";
    } else {
      projectRow.style.display = "none";
    }
  });
}
// }
const logoutbtn = document.getElementById("logout");

// Logout button for admin and user
if (logoutbtn) {
  logoutbtn.onclick = function () {
    localStorage.removeItem("user");
    localStorage.removeItem("admin");
    const url = "http://127.0.0.1:5500/HTML/login.html";
    window.location.href = url;
  };
}
