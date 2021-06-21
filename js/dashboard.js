// State

// var navbarSearch = false;

// var searchBtn = document.getElementById("searchBarBtn");
// var searchInput = document.getElementById("searchBarInput");

// searchBtn.onclick = function(){
//     searchInput.classList.toggle("input-close")
// }

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