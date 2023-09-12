const redirct = localStorage.getItem("user");
if (!redirct) {
  const url = "http://127.0.0.1:5500/HTML/login.html";
  window.location.href = url;
}
const userProject = [
  {
    username: "zeeshan@gmail.com",
    projectId: 1,
    title: "Project Title 0",
    description:
      "Describe the project being very specific, you can use the Twitter standard: no more than 280 characters: complement the information: the skills learned or reinforced in its realization and how you faced it, prove to be proactive in the search for solutions.",
    img: "../asserts/images/pro2.jpg",
    tags: "#MERN #REACT",
    languages: "javascript",
    technology: "JS HTML CSS",
  },
  {
    username: "zeeshan@gmail.com",
    projectId: 2,
    title: "Project Title 1",
    description:
      "Describe the project being very specific, you can use the Twitter standard: no more than 280 characters: complement the information: the skills learned or reinforced in its realization and how you faced it, prove to be proactive in the search for solutions.",
    img: "../asserts/images/pro2.jpg",
    tags: "#MERN #REACT",
    languages: "javascript",
    technology: "JS HTML CSS",
  },
  {
    username: "shani@gmail.com",
    projectId: 3,
    title: "Project Title 2",
    description:
      "Describe the project being very specific, you can use the Twitter standard: no more than 280 characters: complement the information: the skills learned or reinforced in its realization and how you faced it, prove to be proactive in the search for solutions.",
    img: "../asserts/images/pro1.jpg",
    tags: "#MERN #REACT",
    languages: "javascript C++",
    technology: "JS HTML CSS",
  },
];
const user1 = JSON.parse(localStorage.getItem("user"));
// ///////  when reset the project in local storage tab yeh run krna ha ////
// var allProjects = localStorage.setItem(
//   "allproject",
//   JSON.stringify(userProject)
// );
const userProjectData = JSON.parse(localStorage.getItem("allproject"));
// delete project
function deleteUserProject(projectId) {
  const index = userProjectData.findIndex(
    (project) => project.projectId === projectId
  );
  if (index !== -1) {
    userProjectData.splice(index, 1);
    localStorage.setItem("allproject", JSON.stringify(userProjectData));
  }
}
function userpro() {
  const userProjectsContainer = document.querySelector(".usersprojects");
  userProjectsContainer.innerHTML = "";
  const userModal = document.querySelector(".modalmodal");
  const userModalDetails = document.querySelector(".usermodalDetails");

  userProjectData.forEach((project) => {
    if (user1.email === project.username) {
      const userProjectRow = document.createElement("div");
      userProjectRow.classList.add("userProjectRow");
      const userProjectDetails = document.createElement("div");
      userProjectDetails.classList.add("userProjectDetails");
      const userProjectTitle = document.createElement("h3");
      userProjectTitle.textContent = project.title;
      const userProjectDescription = document.createElement("p");
      userProjectDescription.classList.add("userDetails");
      if (project.description.length > 100) {
        userProjectDescription.textContent =
          project.description.slice(0, 150) + "...";
      } else {
        userProjectDescription.textContent = project.description;
      }
      userProjectDescription.onclick = function open() {
        userModal.style.display = "block";

        const userModalPic = document.querySelector(".usermodalPic");
        userModalPic.style.backgroundImage = `url(${project.img})`;

        userModalDetails.innerHTML = "";

        const userProtitle = document.createElement("h3");
        userProtitle.textContent = project.title;

        const userDescription = document.createElement("p");
        userDescription.textContent = project.description;

        userModalDetails.appendChild(userProtitle);
        userModalDetails.appendChild(userDescription);
      };

      const userProjectBtn = document.createElement("div");
      userProjectBtn.classList.add("userProjectBtn");
      const userLiveBtn = document.createElement("button");
      userLiveBtn.classList.add("userliveBtn");
      userLiveBtn.textContent = "Edit Project";
      const userProjectImg = document.createElement("div");
      userProjectImg.classList.add("userProjectImg");
      userProjectImg.style.backgroundImage = `url(${project.img})`;

      // Only open modal when "Edit Project" is clicked
      const editProjectModal = document.querySelector(".editProjectModal");
      userLiveBtn.onclick = function () {
        editProjectModal.style.display = "block";
        editProjectModal.innerHTML = "";
        const editform = document.createElement("form");
        const editTable = document.createElement("table");
        const editrow1 = document.createElement("tr");
        const editrow2 = document.createElement("tr");
        const editrow3 = document.createElement("tr");
        const editrow4 = document.createElement("tr");
        const editrow5 = document.createElement("tr");
        const editrow6 = document.createElement("tr");
        const editrow7 = document.createElement("tr");

        const editdata11 = document.createElement("td");
        const editdata12 = document.createElement("td");
        const editdata121 = document.createElement("input");
        const editdata21 = document.createElement("td");
        const editdata22 = document.createElement("td");
        const editdata221 = document.createElement("textarea");
        const editdata31 = document.createElement("td");
        const editdata32 = document.createElement("td");
        const editdata321 = document.createElement("input");
        const editdata41 = document.createElement("td");
        const editdata42 = document.createElement("td");
        const editdata421 = document.createElement("textarea");
        const editdata51 = document.createElement("td");
        const editdata52 = document.createElement("td");
        const editdata521 = document.createElement("textarea");
        const editdata61 = document.createElement("td");
        const editdata62 = document.createElement("td");
        const editdata621 = document.createElement("textarea");
        const editdata71 = document.createElement("td");
        const editdata72 = document.createElement("td");
        const savebtn = document.createElement("button");

        savebtn.textContent = "Save";
        savebtn.type = "submit";
        const cancelbtn = document.createElement("button");
        cancelbtn.textContent = "cancel ";
        editdata11.textContent = "Project Title:";
        editdata121.value = project.title;
        editdata21.textContent = "Project Description:";
        editdata221.value = project.description;
        editdata31.textContent = "image URL:";
        editdata321.value = project.img;
        editdata41.textContent = "Tags:";
        editdata421.value = project.tags;
        editdata61.textContent = "Languages:";
        editdata621.value = project.technology;
        editdata51.textContent = "Technology:";
        editdata521.value = project.technology;
        editdata72.appendChild(cancelbtn);
        editdata71.appendChild(savebtn);

        editdata62.appendChild(editdata621);
        editdata52.appendChild(editdata521); //2nd td
        editdata42.appendChild(editdata421);
        editdata32.appendChild(editdata321); //2nd td
        editdata22.appendChild(editdata221); //2nd td
        editdata12.appendChild(editdata121); //2nd td
        editrow1.appendChild(editdata11);
        editrow1.appendChild(editdata12);
        editrow2.appendChild(editdata21);
        editrow2.appendChild(editdata22);
        editrow3.appendChild(editdata31);
        editrow3.appendChild(editdata32);
        editrow4.appendChild(editdata41);
        editrow4.appendChild(editdata42);
        editrow5.appendChild(editdata51);
        editrow5.appendChild(editdata52);
        editrow6.appendChild(editdata61);
        editrow6.appendChild(editdata62);
        editrow7.appendChild(editdata71);
        editrow7.appendChild(editdata72);
        editTable.appendChild(editrow1);
        editTable.appendChild(editrow2);
        editTable.appendChild(editrow3);
        editTable.appendChild(editrow4);
        editTable.appendChild(editrow5);
        editTable.appendChild(editrow6);
        editTable.appendChild(editrow7);
        editform.appendChild(editTable);

        cancelbtn.onclick = function () {
          editProjectModal.style.display = "none";
        };
        //editform.appendChild(savebtn);
        editProjectModal.appendChild(editform);
        // editProjectModal.appendChild(cancelbtn);

        savebtn.onclick = function (e) {
          e.preventDefault();
          const projectIndex = userProjectData.findIndex(
            (p) => p.projectId === project.projectId
          );

          console.log("after default edit project click submit");
          if (projectIndex !== -1) {
            userProjectData[projectIndex].title = editdata121.value;
            userProjectData[projectIndex].description = editdata221.value;
            userProjectData[projectIndex].img = editdata321.value;
            userProjectData[projectIndex].tags = editdata421.value;
            userProjectData[projectIndex].languages = editdata621.value;
            userProjectData[projectIndex].technology = editdata521.value;
            localStorage.setItem("allproject", JSON.stringify(userProjectData));
            editProjectModal.style.display = "none";
          }
        };
      };

      const deleteProject = document.createElement("button");
      //   userSourceBtn.href = "#";
      deleteProject.classList.add("usersourceBtn");
      deleteProject.textContent = "delete";
      deleteProject.onclick = function () {
        deleteUserProject(project.projectId);
        userProjectRow.remove();
      };
      userProjectBtn.appendChild(userLiveBtn);
      userProjectBtn.appendChild(deleteProject);

      userProjectDetails.appendChild(userProjectTitle);
      userProjectDetails.appendChild(userProjectDescription);
      userProjectDetails.appendChild(userProjectBtn);

      userProjectRow.appendChild(userProjectDetails);
      userProjectRow.appendChild(userProjectImg);

      if (userProjectsContainer) {
        userProjectsContainer.appendChild(userProjectRow);
      }
    }
  });
}
userpro();
// add project function
const addProjectFunction = document.querySelector(".addProjectBtn");
addProjectFunction.onclick = () => {
  console.log("clicked addProject");
  const addProjectmodal = document.querySelector(".addprojectModal");
  addProjectmodal.style.display = "block";
  addProjectmodal.innerHTML = "";
  const addform = document.createElement("form");
  addform.innerHTML = "";
  const addTable = document.createElement("table");
  const addrow1 = document.createElement("tr");
  const addrow2 = document.createElement("tr");
  const addrow3 = document.createElement("tr");
  const addrow4 = document.createElement("tr");
  const addrow5 = document.createElement("tr");
  const addrow6 = document.createElement("tr");
  const addrow7 = document.createElement("tr");
  const adddata11 = document.createElement("td");
  const adddata12 = document.createElement("td");
  const adddata121 = document.createElement("input");
  const adddata21 = document.createElement("td");
  const adddata22 = document.createElement("td");
  const adddata221 = document.createElement("textarea");
  const adddata31 = document.createElement("td");
  const adddata32 = document.createElement("td");
  const adddata321 = document.createElement("input");
  const adddata41 = document.createElement("td");
  const adddata42 = document.createElement("td");
  const adddata421 = document.createElement("textarea");
  const adddata51 = document.createElement("td");
  const adddata52 = document.createElement("td");
  const adddata521 = document.createElement("textarea");
  const adddata61 = document.createElement("td");
  const adddata62 = document.createElement("td");
  const adddata621 = document.createElement("textarea");
  const adddata71 = document.createElement("td");
  const adddata72 = document.createElement("td");
  const adddata711 = document.createElement("button");
  adddata711.textContent = "Cancel";
  const savebtn = document.createElement("button");
  savebtn.textContent = "Save";
  savebtn.type = "submit";
  adddata72.appendChild(savebtn);
  adddata71.appendChild(adddata711);
  adddata11.textContent = "Project Table:";
  //   adddata121.value = user1.name;
  adddata21.textContent = "Project Description:";
  //   adddata221.value = user1.password;
  adddata31.textContent = "Project Img URL:";
  //   adddata321.value = user1.phoneNumber;
  adddata41.textContent = "Tags:";
  //   editdata421.value = user1.education;
  adddata51.textContent = "Languages:";
  //   editdata521.value = user1.skills;
  adddata61.textContent = "Technology:";
  //   editdata621.value = user1.experience;
  adddata62.appendChild(adddata621); //2nd td
  adddata52.appendChild(adddata521); //2nd td
  adddata42.appendChild(adddata421);
  adddata32.appendChild(adddata321); //2nd td
  adddata22.appendChild(adddata221); //2nd td
  adddata12.appendChild(adddata121); //2nd td
  addrow1.appendChild(adddata11);
  addrow1.appendChild(adddata12);
  addrow2.appendChild(adddata21);
  addrow2.appendChild(adddata22);
  addrow3.appendChild(adddata31);
  addrow3.appendChild(adddata32);
  addrow4.appendChild(adddata41);
  addrow4.appendChild(adddata42);
  addrow5.appendChild(adddata51);
  addrow5.appendChild(adddata52);
  addrow6.appendChild(adddata61);
  addrow6.appendChild(adddata62);
  addrow7.appendChild(adddata71);
  addrow7.appendChild(adddata72);
  addTable.appendChild(addrow1);
  addTable.appendChild(addrow2);
  addTable.appendChild(addrow3);
  addTable.appendChild(addrow4);
  addTable.appendChild(addrow5);
  addTable.appendChild(addrow6);
  addTable.appendChild(addrow7);
  addform.appendChild(addTable);

  // addform.appendChild(savebtn);

  addProjectmodal.appendChild(addform);
  let proid = userProjectData.length;
  console.log(proid);
  // cancel btn
  adddata711.onclick = function () {
    addProjectmodal.style.display = "none";
  };
  savebtn.onclick = function (e) {
    e.preventDefault();
    console.log("after default add project click submit");
    const addprojectDataForm = {
      username: user1.email,
      projectId: proid + 1,
      title: adddata121.value,
      description: adddata221.value,
      img: adddata321.value,
      tags: adddata421.value,
      languages: adddata521.value,
      technology: adddata621.value,
    };
    if (
      adddata121.value.trim() == "" ||
      adddata221.value.trim() == "" ||
      adddata321.value.trim() == ""
    ) {
      alert("title, descrption,Img URL required");
      return;
    }
    userProjectData.push(addprojectDataForm);
    localStorage.setItem("allproject", JSON.stringify(userProjectData));
    userpro();
    console.log(userProjectData);
    console.log(userProjectData.length);
    addProjectmodal.style.display = "none";
  };

  const modalOpen = document.querySelector("#appProjectCross");
  if (modalOpen) {
    // userpro();
    modalOpen.onclick = () => {
      console.log("clicked addProjectCross");
      addProjectmodal.style.display = "none";
    };
  }
};

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
