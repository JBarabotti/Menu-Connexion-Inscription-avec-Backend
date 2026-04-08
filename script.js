const name = document.getElementById("prenom");
const birthname = document.getElementById("nom");
const email = document.getElementById("email");
const password = document.getElementById("password");

name.addEventListener("click", (e) => {
    name.style.background = "linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15))";
    e.stopPropagation();
})

birthname.addEventListener("click", (e) => {
    birthname.style.background = "linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15))";
    e.stopPropagation();
})

email.addEventListener("click", (e) => {
    email.style.background = "linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15))";
    e.stopPropagation();
});

password.addEventListener("click", (e) => {
    password.style.background = "linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15))";
    e.stopPropagation();
});

document.addEventListener("click", () => {
    email.style.background = "";
    password.style.background = "";
});