const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "bhavanijigidarla@gmail.com" && password === "bhavani"||username==="jigidarlab@gmail.com"&&password==="bha123") {
        alert("successfully logged");
        open("///C:/Users/Bhavani/Desktop/html/loginpagenew.html");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})