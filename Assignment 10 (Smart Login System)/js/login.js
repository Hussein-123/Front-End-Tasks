var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var loginBtn = document.getElementById("loginBtn");
var state = document.getElementById("state");
var usersList = [];

if (localStorage.getItem("usersList") != null) {
    usersList = JSON.parse(localStorage.getItem("usersList"));
}

// Check Function
function checkInputsEmpty() {
    if (emailInput.value == "" || passwordInput.value == "") {
        return true;
    }
    else {
        return false;
    }
}

// check Email and Password
function checkEmailAndPassword() {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].email == emailInput.value && usersList[i].password == passwordInput.value) {
            localStorage.setItem("userName", usersList[i].userName);
            return true;
        }
    }
}

// Login function
function login() {
    if (checkInputsEmpty() == true) {
        state.innerHTML = "All Inputs Is Required !!"
        state.classList.add("text-danger");
    }
    else {
        if (checkEmailAndPassword() == true) {
            window.open("./home.html", "_self");
        }
        else {
            state.innerHTML = "Email or Password are incorrect ??"
            state.classList.add("text-danger");
        }
    }
}

loginBtn.addEventListener("click", function () {
    login();
})