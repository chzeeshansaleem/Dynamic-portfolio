const redirct = localStorage.getItem("admin");
if (!redirct) {
  const url = "http://127.0.0.1:5500/HTML/login.html";
  window.location.href = url;
}
const users = JSON.parse(localStorage.getItem("users"));
console.log(users);
const userProjectData = JSON.parse(localStorage.getItem("allproject"));
// delete project
function deleteUserProject(usermail) {
  console.log("delete Project Clicked by admin");
  for (let i = 0; i < userProjectData.length; i++) {
    const index = userProjectData.findIndex(
      (user) => user.username === usermail
    );
    if (index != -1) {
      userProjectData.splice(index, 1);
      i--;
    }
  }
  localStorage.setItem("allproject", JSON.stringify(userProjectData));
  const index = users.findIndex((user) => user.email === usermail);
  if (index !== -1) {
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    usershow();
  }
}
const adminuser = document.querySelector(".adminUser");
function deleteUser(useremail) {
  const index = users.findIndex((user) => user.email === useremail);
  if (index !== -1) {
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
  }
}
const adminTable = document.createElement("table");
adminTable.setAttribute("id", "myTable");

function usershow() {
  if (adminuser) {
    adminTable.innerHTML = "";
    const currentAdminEmail = JSON.parse(localStorage.getItem("admin"));
    users.forEach((user) => {
      if (
        user.role === "user" ||
        (user.role === "admin" && user.email !== currentAdminEmail)
      ) {
        const adminTableRow = document.createElement("tr");
        const adminTableRowTdName = document.createElement("td");
        adminTableRowTdName.textContent = user.name;
        const adminTableRowTdEmail = document.createElement("td");
        adminTableRowTdEmail.textContent = user.email;
        const adminTableRowTdAction = document.createElement("td");
        const adminAction = document.createElement("button");
        adminAction.textContent = "Delete";
        adminAction.style.background = "red";

        adminTableRowTdAction.appendChild(adminAction);
        adminTableRow.appendChild(adminTableRowTdName);
        adminTableRow.appendChild(adminTableRowTdEmail);
        adminTableRow.appendChild(adminTableRowTdAction);
        adminTable.appendChild(adminTableRow);
        adminAction.onclick = function () {
          deleteUserProject(user.email);
          //deleteUser(user.email);
        };
      }
    });
    adminuser.appendChild(adminTable);
  }
}
usershow();
const AdminAddUser = document.querySelector(".AdminAddUser");
const AdminAddUserBtn = document.querySelector(".AdminAddUserBtn");
AdminAddUserBtn.onclick = function () {
  AdminAddUser.style.display = "block";
  const adminCross = document.querySelector("adminCross");
  AdminAddUser.innerHTML = "";
  const addform = document.createElement("form");
  //   addform.innerHTML = "";
  const addTable = document.createElement("table");
  const addrow1 = document.createElement("tr");
  const addrow2 = document.createElement("tr");
  const addrow3 = document.createElement("tr");
  const addrow4 = document.createElement("tr");
  const addrow5 = document.createElement("tr");
  const adddata11 = document.createElement("td");
  const adddata12 = document.createElement("td");
  const adddata121 = document.createElement("input");
  adddata121.setAttribute("type", "email");
  const adddata21 = document.createElement("td");
  const adddata22 = document.createElement("td");
  const adddata221 = document.createElement("input");
  adddata221.setAttribute("type", "password");
  const adddata31 = document.createElement("td");
  const adddata32 = document.createElement("td");
  const userRadio = document.createElement("select");
  const choose = document.createElement("option");
  choose.textContent = "choose";
  choose.value = "choose";
  choose.selected = true;
  choose.disabled = true;
  const userSelect = document.createElement("option");
  userSelect.textContent = "user";
  userSelect.value = "user";
  const adminSelect = document.createElement("option");
  adminSelect.textContent = "admin";
  adminSelect.value = "admin";
  const adddata51 = document.createElement("td");
  const adddata52 = document.createElement("td");
  const cancelAddUser = document.createElement("button");
  userRadio.appendChild(choose);
  userRadio.appendChild(userSelect);
  userRadio.appendChild(adminSelect);

  const adddata41 = document.createElement("td");
  const adddata42 = document.createElement("td");
  const adddata421 = document.createElement("input");
  const savebtn = document.createElement("button");
  savebtn.textContent = "Save";
  savebtn.type = "submit";
  adddata11.textContent = "Email:";
  adddata21.textContent = "Password:";
  adddata31.textContent = "Role:";
  adddata41.textContent = "Name:";
  cancelAddUser.textContent = "Cancel";
  adddata52.appendChild(savebtn);
  adddata51.appendChild(cancelAddUser);
  adddata42.appendChild(adddata421);

  adddata32.appendChild(userRadio);
  //   adddata32.appendChild(userlable);
  //   adddata32.appendChild(adminRadio); //2nd td
  //   adddata32.appendChild(adminlable);

  //2nd td
  adddata22.appendChild(adddata221); //2nd td
  adddata12.appendChild(adddata121);
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
  addTable.appendChild(addrow1);
  addTable.appendChild(addrow2);
  addTable.appendChild(addrow3);
  addTable.appendChild(addrow4);
  addTable.appendChild(addrow5);
  addform.appendChild(addTable);

  addform.appendChild(savebtn);
  AdminAddUser.appendChild(addform);

  savebtn.onclick = function (e) {
    e.preventDefault();
    const selectedRole = userRadio.value;
    console.log("after default add project click submit");
    const adduserDataForm = {
      email: adddata121.value,
      password: adddata221.value,
      role: selectedRole,
      name: adddata421.value,
      phoneNumber: "",
      education: [],
      skills: [],
      experience: "",
    };

    if (adddata121.value.trim() == "" || adddata221.value.trim() == "") {
      alert("name,email,password is required");
      return;
    }
    const user = users.find((user) => user.email === adddata121.value);
    if (user) {
      alert("this email already exist");
      return;
    }
    users.unshift(adduserDataForm);
    localStorage.setItem("users", JSON.stringify(users));

    AdminAddUser.style.display = "none";
    adminTable.innerHTML = "";
    usershow();
  };
  // Close Modal
  cancelAddUser.onclick = function () {
    AdminAddUser.style.display = "none";
  };
};

// Search Bar
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("input", SearchSuggestion);
}
function SearchSuggestion() {
  const filter = document.getElementById("searchInput").value.toUpperCase();
  let myTable = document.getElementById("myTable");
  let tr = myTable.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td");

    for (let j = 0; j < td.length; j++) {
      let textValue = td[j].textContent || td[j].innerHTML;

      if (textValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        break; // Break the inner loop if a match is found in any <td>
      } else {
        tr[i].style.display = "none";
      }
    }
  }
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
