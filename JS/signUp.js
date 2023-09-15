import users from "../db/user.json" assert { type: "json" };
const redirct = localStorage.getItem("user");
const redirctadmin = localStorage.getItem("admin");
if (redirct) {
  const url = "http://127.0.0.1:5500/HTML/index.html";
  const url2 = "http://127.0.0.1:5500/HTML/userProfile.html";
  const url3 = "http://127.0.0.1:5500/HTML/userProjects.html";
  window.location.href = url || url2 || url3;
} else if (redirctadmin) {
  const url = "http://127.0.0.1:5500/HTML/adminUsers.html";
  const url2 = "http://127.0.0.1:5500/HTML/adminProject.html";
  window.location.href = url || url2;
}

function handleSignup(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const user = {
    name,
    email,
    password,
    role: "user",
  };
  if (name.trim() == "" || email.trim() == "" || password.trim() == "") {
    alert("name,email,password is required");
    return;
  }
  const userss = users.find((user) => user.email === email);
  if (userss) {
    alert("this email already exist");
    return;
  }
  users.push(user);
  // localStorage.setItem("users", JSON.stringify(users));
  console.log(users);
  alert("Signup successful");
  //input fields empty k liyeh
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  console.log(users);
  const url = "http://127.0.0.1:5500/HTML/login.html";
  window.location.href = url;
}

const signupForm = document.getElementById("signupform");
signupForm.addEventListener("submit", handleSignup);
