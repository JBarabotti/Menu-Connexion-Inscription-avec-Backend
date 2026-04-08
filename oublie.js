const email = document.getElementById("email");

email.addEventListener("click", (e) => {
    email.style.background = "linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15))";
    e.stopPropagation();
});

document.addEventListener("click", () => {
    email.style.background = "";
});