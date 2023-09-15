import users from "../db/user.json" assert { type: "json" };
// functions
//var users = JSON.parse(localStorage.getItem("users")) || [];
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
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById("loginemail").value;
  const password = document.getElementById("loginpassword").value;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (email == "" || password == "") {
    alert("Email and password Required");
  } else {
    if (user) {
      if (user.role === "admin") {
        alert(" ADMIN LOGIN SUCCESSFUL");
        localStorage.setItem("admin", JSON.stringify(user.email));
        console.log(user);

        const url = "http://127.0.0.1:5500/HTML/adminUsers.html";
        window.location.href = url;
      } else {
        alert("USER LOGIN SUCCESSFUL");
        console.log(user);
        localStorage.setItem("user", JSON.stringify(user.email));
        const url = "http://127.0.0.1:5500/HTML/index.html";
        window.location.href = url;
      }
    } else {
      alert("invalid email or password");
    }
  }
}

const loginForm = document.getElementById("login");
loginForm.addEventListener("submit", handleLogin);
