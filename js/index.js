// DOM

// Light Icon HTML Raw
var lightIcon = "<i class=\"btn color-white fas fa-sun\"></i>";
var darkIcon = "<i class=\"btn color-white fas fa-moon\"></i>";
// Body
var bd = document.getElementById("body");
// Burger Menu
var burger = document.getElementById("bcumb");
var burgerBtn = document.getElementById("bcumbBtn");
var burgerCloseBtn = document.getElementById("bcumbCloseBtn");
// Light Button
var headerLightButton = document.getElementById("themeChanger");
var sidebarLightButton = document.getElementById("themeChanger2");
// Drop Down Button
var dropDownButton = document.getElementById("dropdownMenuButton");
var dropDownMenu = document.getElementById("dropDownMenu");

// Theme Change Functionality

// Change Light Function
function changeButtonLight() {
    headerLightButton.innerHTML = darkIcon;
    sidebarLightButton.innerHTML = darkIcon;
}
// Change Button
function changeButtonDark() {
    headerLightButton.innerHTML = lightIcon;
    sidebarLightButton.innerHTML = lightIcon;
}

// Change Button HTML Function
function themeButtonHtmlChange(name = "dark") {
    if(name === "light"){
        changeButtonLight()
    }else{
        changeButtonDark()
    }
}

// Window On load Change Theme
window.onload = function (){
    var lt = localStorage.getItem("theme");
    if(lt === "dark" || lt === "light"){
        bd.classList.add(lt);
        themeButtonHtmlChange(lt);

    }else{
        bd.classList.add("dark");
        changeButtonDark();
    }
}

// Change Body Theme
function changeTheme(){
    lt = localStorage.getItem("theme");
    if(lt === "dark"){
        localStorage.setItem("theme", "light")
        changeButtonLight();
    }else{
        localStorage.setItem("theme", "dark");
        changeButtonDark();
    }
    bd.classList.toggle("dark");
    bd.classList.toggle("light");
}

// Button Click Change Theme
sidebarLightButton.onclick = function (){
    changeTheme();
}

headerLightButton.onclick = function (){
    changeTheme();
}


// Burger Menu Close Open
function burgerClose(){
    burger.classList.toggle("bcumb-close");
}

// Burger Buttons
burgerBtn.onclick = burgerClose;
burgerCloseBtn.onclick = burgerClose;
dropDownButton.onclick = function (){
    dropDownMenu.classList.toggle("dropdown-menu-open");
}


// All Contents On Click Change Link
var ctb = document.querySelectorAll('.ctb');

// Loop
for(var i=0; i<ctb.length; i++){
    ctb[i].onclick = function(){
        window.location = "./blog.html";
    }
}