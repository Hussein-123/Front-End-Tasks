var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var signBtn = document.getElementById("signBtn");
var state = document.getElementById("state");
var inputs = document.querySelectorAll("input");
var regex = {
    nameRegex: /[a-zA-Z]{3,}/,
    emailRegex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    passwordRegex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/
}
var usersList = [];

if (localStorage.getItem("usersList") != null) {
    usersList = JSON.parse(localStorage.getItem("usersList"));
}

// Add User Function
function addUser() {
    var userInfo = {
        userName: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    }
    usersList.push(userInfo);
    localStorage.setItem("usersList", JSON.stringify(usersList));
    resetAllInputs();
}

// Check function
function checkUsers() {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].email == emailInput.value) {
            var test = true;
        }
    }
    if (test) {
        state.innerHTML = "email already exists";
        state.classList.add("text-danger");
        state.classList.remove("text-success");
    }
    else {
        state.innerHTML = "Success";
        state.classList.add("text-success");
        state.classList.remove("text-danger");
        addUser();
    }
}

// Validation Function
function isValidation(regex, input) {
    if (regex.test(input.value)) {
        input.nextElementSibling.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        input.nextElementSibling.classList.replace("d-none", "d-block");
        return false;
    }
}
inputs[0].addEventListener("blur", function () {
    isValidation(regex.nameRegex, nameInput)
});
inputs[1].addEventListener("blur", function () {
    isValidation(regex.emailRegex, emailInput)
});
inputs[2].addEventListener("blur", function () {
    isValidation(regex.passwordRegex, passwordInput)
});

// Reser Function
function resetAllInputs() {
    nameInput.value = null;
    emailInput.value = null;
    passwordInput.value = null;
}

signBtn.addEventListener("click", function () {
    if (isValidation(regex.nameRegex, nameInput, userNameError) &
        isValidation(regex.emailRegex, emailInput, emailError) &
        isValidation(regex.passwordRegex, passwordInput, passwordError)) {
        checkUsers();
    }
})