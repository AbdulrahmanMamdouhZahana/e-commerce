let btnSignIn = document.querySelector(".users_signup a");


btnSignIn.addEventListener("click", toLogin);

function toLogin() { 
    setTimeout(() => {
        window.location = "../login page/login.html"
    }, 1500);
}


let userName = document.querySelector(".txt_field input[type=text]");
let email = document.querySelector(".txt_field input[type=email]");
let password = document.querySelector(".txt_field input[type=password]");
let submit = document.querySelector("input[type=submit]");
let form = document.querySelector("form")
form.onsubmit = function () { return false}

submit.addEventListener("click", function () { 
    if (userName.value !== "" || email.value !== "" || password.value !== "") { 
        localStorage.setItem("username", userName.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
        setTimeout(() => {
            window.location = "../login page/login.html"

        }, 1200);
    }
})

