const redirct = localStorage.getItem("user");
if (!redirct) {
  const url = "http://127.0.0.1:5500/HTML/login.html";
  window.location.href = url;
}
var user1 = JSON.parse(localStorage.getItem("user"));

if (user1) {
  console.log("login user" + user1);
  const emailProfile = document.querySelector(".emailProfile");
  const nameProfile = document.querySelector(".nameProfile");
  const passwordProfile = document.querySelector(".passwordProfile");
  const roleProfile = document.querySelector(".roleProfile");
  const numberProfile = document.querySelector(".numberProfile");
  const educationProfile = document.querySelector(".educationProfile");
  const skillsProfile = document.querySelector(".skillsProfile");
  const experienceProfile = document.querySelector(".experienceProfile");
  emailProfile.textContent = user1.email;
  nameProfile.textContent = user1.name;
  passwordProfile.textContent = user1.password;
  roleProfile.textContent = user1.role;
  numberProfile.textContent = user1.phoneNumber;
  const educationList = document.createElement("ul");
  if (user1.education) {
    user1.education.forEach((educationItem) => {
      const listItem = document.createElement("li");
      listItem.textContent = educationItem;
      educationList.appendChild(listItem);
    });
  }
  educationProfile.appendChild(educationList);

  const skillsList = document.createElement("ul");
  if (user1.skills) {
    user1.skills.forEach((skill) => {
      const listItem = document.createElement("li");
      listItem.textContent = skill;
      skillsList.appendChild(listItem);
    });
  }
  skillsProfile.appendChild(skillsList);

  experienceProfile.textContent = user1.experience;
}

const editProfile = document.querySelector(".editProfile");
if (editProfile) {
  editProfile.onclick = function () {
    const modal = document.querySelector(".modal");
    if (modal) {
      modal.style.display = "block";
      modal.style.backgroundColor = "white";
      modal.style.width = "60%";
      modal.style.height = "70vh";
      modal.style.marginLeft = "10%";
    }
    const MainContentOfProject = document.querySelector(
      ".MainContentOfProject"
    );
    MainContentOfProject.innerHTML = "";
    const editform = document.createElement("form");
    const editTable = document.createElement("table");
    const editrow1 = document.createElement("tr");
    const editrow2 = document.createElement("tr");
    const editrow3 = document.createElement("tr");
    const editrow4 = document.createElement("tr");
    const editrow5 = document.createElement("tr");
    const editrow6 = document.createElement("tr");
    const editdata11 = document.createElement("td");
    const editdata12 = document.createElement("td");
    const editdata121 = document.createElement("input");
    const editdata21 = document.createElement("td");
    const editdata22 = document.createElement("td");
    const editdata221 = document.createElement("input");
    const editdata31 = document.createElement("td");
    const editdata32 = document.createElement("td");
    const editdata321 = document.createElement("input");
    const editdata41 = document.createElement("td");
    const editdata42 = document.createElement("td");
    const editdata421 = document.createElement("input");
    const editdata51 = document.createElement("td");
    const editdata52 = document.createElement("td");
    const editdata521 = document.createElement("input");
    const editdata61 = document.createElement("td");
    const editdata62 = document.createElement("td");
    const editdata621 = document.createElement("input");
    editdata11.textContent = "Name:";
    editdata121.value = user1.name;
    editdata21.textContent = "password:";
    editdata221.value = user1.password;
    editdata31.textContent = "phone:";
    editdata321.value = user1.phoneNumber;
    editdata41.textContent = "Education";
    editdata421.value = user1.education;
    editdata51.textContent = "Skills:";
    editdata521.value = user1.skills;
    editdata61.textContent = "Experince:";
    editdata621.value = user1.experience;
    editdata62.appendChild(editdata621); //2nd td
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
    editTable.appendChild(editrow1);
    editTable.appendChild(editrow2);
    editTable.appendChild(editrow3);
    editTable.appendChild(editrow4);
    editTable.appendChild(editrow5);
    editTable.appendChild(editrow6);
    editform.appendChild(editTable);
    const savebtn = document.createElement("button");
    savebtn.textContent = "Save";
    savebtn.type = "submit";
    const cancelEdit = document.getElementById("crossprofile");
    cancelEdit.onclick = function () {
      modal.style.display = "none";
    };
    editform.appendChild(savebtn);
    MainContentOfProject.appendChild(editform);
    savebtn.onclick = function (e) {
      e.preventDefault();
      console.log("after default click submit");
      const updatedData = {
        email: user1.email,
        role: user1.role,
        name: editdata121.value,
        password: editdata221.value,
        phoneNumber: editdata321.value,
        education: editdata421.value.split(","),
        skills: editdata521.value.split(","),
        experience: editdata621.value,
      };
      localStorage.setItem("user", JSON.stringify(updatedData));

      modal.style.display = "none";
    };
  };
}
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
