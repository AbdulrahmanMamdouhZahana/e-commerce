let btnSignIn = document.querySelector(".users_signup a");

btnSignIn.addEventListener("click", toLogin);

function toLogin() { 
    setTimeout(() => {
        window.location = "../regester page/regester.html"
    }, 1500);
}


let email = document.querySelector(".txt_field input[type=email]");
let password = document.querySelector(".txt_field input[type=password]");
let submit = document.querySelector("input[type=submit]");
let wrongMassg = document.querySelector(".wrong_massg");
let form = document.querySelector("form")
form.onsubmit = function () { return false}

submit.addEventListener("click", function () {
    if (localStorage.getItem("email")) {
        if (email.value == localStorage.getItem("email") && password.value == localStorage.getItem("password")) {
            setTimeout(() => {
                window.location = "index.html"

            }, 1200);
        }
        else {
            wrongMassg.style.display = "block"
            setTimeout(() => {
                wrongMassg.style.display = "none"
            }, 2000);
          
        }
        if (email.value !== localStorage.getItem("email") || password.value !== localStorage.getItem("password")) {
            wrongMassg.style.display = "block"
            setTimeout(() => {
                wrongMassg.style.display = "none"
            }, 2000);
        }


    } else { 
        wrongMassg.style.display = "block"
        wrongMassg.innerHTML = "Please SginUp Frist"
        setTimeout(() => {
            wrongMassg.style.display = "none" 
        }, 2000);
    }
 })
