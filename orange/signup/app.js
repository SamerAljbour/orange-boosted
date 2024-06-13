let emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
let phoneReg = /^077\d{7}$/;

let form = document.getElementById("half");
let email = document.getElementById("inputEmail4");
let invalidMessage = document.getElementById("inputEmail4Valid");
let password = document.getElementById("inputPassword4");
let passwordValid = document.getElementById("inputPassword4Valid");
let confirmPassword = document.getElementById("confirmPassword4");
let confirmPassword4Valid = document.getElementById("confirmPassword4Valid");
let phone = document.getElementById("inputAddress");
let phoneValid = document.getElementById("phoneValid");
let checkbox = document.getElementById("gridCheck1");
let checkVaild = document.getElementById("reqtext1");
let checkbox2 = document.getElementById("gridCheck2");
let checkVaild2 = document.getElementById("reqtext2");
let submitBtn = document.getElementById("btnSubmit");
let FullName = document.getElementById("inputFullName4");
let fullNameValid = document.getElementById("inputFullName4Valid");

let validToSubmit = false, emailFlag = false, fullNameFlag = false, passwordFlag = false, phoneFlag = false, check1Flag = false, check2Flag = false, passwordFlagConfirm = false;
let fullNameReg = /^[A-Za-z]+ [A-Za-z]+$/;
let arrayOfUsers = JSON.parse(window.localStorage.getItem("Users")) || [];
let id = arrayOfUsers.length + 1;

let userObj = {};

// Email validation
email.addEventListener("input", () => {
    if (!emailReg.test(email.value)) {
        invalidMessage.textContent = "Invalid Email";
        invalidMessage.style.color = "red";
        invalidMessage.style.fontSize = "15px";
        emailFlag = false;
    } else {
        invalidMessage.textContent = "";
        emailFlag = true;
    }
    enabelDisableButton();
});

// Password validation
password.addEventListener("input", () => {
    if (!passwordReg.test(password.value)) {
        passwordValid.textContent = "Invalid Password";
        passwordValid.style.color = "red";
        passwordValid.style.fontSize = "15px";
        passwordFlag = false;
    } else {
        passwordValid.textContent = "";
        passwordFlag = true;
    }
    enabelDisableButton();
    isPasswordEqual();
});

// Confirm password validation
confirmPassword.addEventListener("input", () => {
    if (confirmPassword.value !== password.value) {
        confirmPassword4Valid.textContent = "Password does not match";
        confirmPassword4Valid.style.color = "red";
        confirmPassword4Valid.style.fontSize = "15px";
        passwordFlagConfirm = false;
    } else {
        confirmPassword4Valid.textContent = "";
        passwordFlagConfirm = true;
    }
    enabelDisableButton();
});

// Phone validation
phone.addEventListener("input", () => {
    if (!phoneReg.test(phone.value)) {
        phoneValid.textContent = "Invalid Phone Number";
        phoneValid.style.color = "red";
        phoneValid.style.fontSize = "15px";
        phoneFlag = false;
    } else {
        phoneValid.textContent = "";
        phoneFlag = true;
    }
    enabelDisableButton();
});

// Checkbox1 validation
checkbox.addEventListener("change", (e) => {
    if (e.target.checked) {
        checkVaild.textContent = " ";
        check1Flag = true;
    } else {
        checkVaild.textContent = "Required ";
        check1Flag = false;
        submitBtn.disabled = true;
        checkVaild.style.color = "red";
        checkVaild.style.fontSize = "15px";
        checkVaild.style.fontWeight = "0";
    }
    enabelDisableButton();
});

// Checkbox2 validation
checkbox2.addEventListener("change", (e) => {
    if (e.target.checked) {
        checkVaild2.textContent = " ";
        check2Flag = true;
    } else {
        checkVaild2.textContent = "Required ";
        checkVaild2.style.color = "red";
        checkVaild2.style.fontSize = "15px";
        checkVaild2.style.fontWeight = "0";
        check2Flag = false;
    }
    enabelDisableButton();
});

// Full name validation
FullName.addEventListener("blur", () => {
    if (!fullNameReg.test(FullName.value)) {
        fullNameValid.textContent = "Invalid name, the name should be two parts";
        fullNameValid.style.color = "red";
        fullNameValid.style.fontSize = "15px";
        fullNameFlag = false;
    } else {
        fullNameValid.textContent = "";
        fullNameFlag = true;
    }
    enabelDisableButton();
});

function enabelDisableButton() {
    if (emailFlag && passwordFlag && phoneFlag && check1Flag && check2Flag && fullNameFlag && passwordFlagConfirm)
        submitBtn.disabled = false;
    else
        submitBtn.disabled = true;
}

function isPasswordEqual() {
    if (confirmPassword.value !== password.value) {
        confirmPassword4Valid.textContent = "Password does not match";
        confirmPassword4Valid.style.color = "red";
        confirmPassword4Valid.style.fontSize = "15px";
        passwordFlagConfirm = false;
    } else {
        confirmPassword4Valid.textContent = "";
        passwordFlagConfirm = true;
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (emailFlag && passwordFlag && phoneFlag && check1Flag && check2Flag && fullNameFlag && passwordFlagConfirm) {
        userObj = {
            id: id++,
            FullName: FullName.value,
            email: email.value,
            phone: phone.value,
            password: password.value,
        }
        arrayOfUsers.push(userObj);
        window.localStorage.setItem("Users", JSON.stringify(arrayOfUsers));
        alert("Account created");
        window.location = "../login/index.html";
    } else {
        alert("Please fill out all fields correctly.");
    }
});

