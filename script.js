const [userLogin, password] = document.querySelectorAll("input");
const btnLogin = document.querySelector(".signIn");
const blkScreen = document.querySelectorAll(".containerGame")

function verify(){
    if(userLogin.value && password.value.length >= 8){

        btnLogin.removeAttribute("disabled");
        btnLogin.classList.add("newColor");

    }else{

        btnLogin.setAttribute("disable", "disabled");
        btnLogin.classList.remove("newColor");

    }
}

userLogin.addEventListener("input", verify);
password.addEventListener("input", verify);
