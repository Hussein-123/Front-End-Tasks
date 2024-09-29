var welcomeMessage = document.getElementById("welcomeMessage");
var logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function () {
    window.open("./index.html", "_self");
})
welcomeMessage.innerHTML = `welcome ${localStorage.getItem("userName")}`;