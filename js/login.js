// Dom
var register = document.getElementById("register");
var login = document.getElementById("login");
var slidingBtn = document.getElementById("slidingBtn");
var slidingBtn2 = document.getElementById("slidingBtn2");


// Window On Load Remove Pre Load Class
window.addEventListener("load", function (){
    document.getElementsByTagName("body")[0].classList.remove("preload");
})

// Change Password Visibility
function visiblePassword (id, node){
    // Change Password
    if(document.getElementById(id).type === "text"){
        // If Text Change to Password
        document.getElementById(id).type = "password";
        node.innerHTML = "<i class=\"fas fa-lock\"></i>"
        return 0;
    }
    // If Password Change To Text
    document.getElementById(id).type = "text";
    node.innerHTML = "<i class=\"fas fa-eye\"></i>"
    return 0
}

// Slider
function makeSlide(open, close){
    // Remove Open class from current box
    close.classList.remove("open-box");
    close.classList.add("close-box");
    setTimeout(function (){
        // Add Open to New Box
        open.classList.remove("d-none");
        open.classList.add("open-box");
        close.classList.remove("close-box");
        close.classList.add("d-none");
    }, 400)
}

function slide(){
    // Slide Function
    if(login.classList.contains("open-box")){
        makeSlide(register, login);
    }else{
        makeSlide(login, register);
    }
}

slidingBtn.onclick = slide;
slidingBtn2.onclick = slide;
