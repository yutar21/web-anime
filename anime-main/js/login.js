let apiUser = "http://localhost:3000/user";

function login() {
  getUser(hanldeLogin);
}

function getUser(callback) {
  fetch(apiUser).then(function (res) {
    return res.json().then(callback);
  });
}
function hanldeLogin(data) {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  data.forEach((data) => {
    if (data.username == username && data.password == password) {
      alert("dang nhap thanh cong");
      window.location.href = "/index.html";
    }
  });
}

function signup() {
  handleCreateForm();
}

function createUser(data) {
  fetch(apiUser, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(function (res) {
    return res.json();
  });
  if (data) {
    alert("Đăng ký thành công");
  }
}
function handleCreateForm() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  let email = document.getElementById("email");
  let user = {
    email : email.value,
    username: username.value,
    password: password.value,
  };
  createUser(user);
}
