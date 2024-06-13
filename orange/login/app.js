let btn = document.getElementById("btn");
let navgateToWelcome = false;
let validemail = document.getElementById("validemail");
let validpassword = document.getElementById("validpassword");
let arrayOfUsers = JSON.parse(window.localStorage.getItem("Users")) || [];

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let userFound = false;

    for (let i = 0; i < arrayOfUsers.length; i++) {
        if (arrayOfUsers[i].email.value === email.value && arrayOfUsers[i].password.value === password.value) {
            userFound = true;
            window.sessionStorage.setItem("name", arrayOfUsers[i].FullName)
            window.sessionStorage.setItem("id", arrayOfUsers[i].id)
            window.location = "./welcome.html";
            break;
        }
    }

    if (!userFound) {
        validemail.textContent = "Incorrect email or password";
        validemail.style.color = "red";
        validemail.style.fontSize = "15px";
        validpassword.textContent = "";
    }
});


