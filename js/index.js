var bd = document.getElementById("body");

window.onload = function (){
    lt = localStorage.getItem("theme");
    if(lt === "dark" || lt === "light"){
        bd.classList.add(lt);
    }else{
        bd.classList.add("dark");
    }
}
var bcumb = document.getElementById("bcumb");
var bcumbBtn = document.getElementById("bcumbBtn");
var bcumbCloseBtn = document.getElementById("bcumbCloseBtn");

function bcumbClose(){
    bcumb.classList.toggle("bcumb-close");

}
bcumbBtn.onclick = bcumbClose;
bcumbCloseBtn.onclick = bcumbClose;

var ctb = document.querySelectorAll('.ctb');

for(var i=0; i<ctb.length; i++){
    ctb[i].onclick = function(){
        window.location = "./blog.html";
    }
}

var dropDownButton = document.getElementById("dropdownMenuButton");

var dropDownMenu = document.getElementById("dropDownMenu");

dropDownButton.onclick = function (){
    dropDownMenu.classList.toggle("dropdown-menu-open");
}


var lightBtn = document.getElementById("themeChanger");

var lightBtn2 = document.getElementById("themeChanger2");

function changeTheme(){
    lt = localStorage.getItem("theme");
    if(lt === "dark"){
        localStorage.setItem("theme", "light")
    }else{
        localStorage.setItem("theme", "dark")
    }
    bd.classList.toggle("dark");
    bd.classList.toggle("light");
}

lightBtn2.onclick = function (){
    changeTheme();
}

lightBtn.onclick = function (){
    changeTheme();
}