// DOM
var contentWriter = document.getElementById("contentWriter")
var submitBtn = document.getElementById("publishBtn");
var contentSection = document.getElementById("contentSection");
var DEFAULT_TEXT = "What do you want to write?"

// Change Content Writer State
contentWriter.onfocus = function (){
    if (contentWriter.innerText === DEFAULT_TEXT){
        contentWriter.innerText = ""
    }
}

contentWriter.onblur = function (){
     if (contentWriter.innerText === ""){
         contentWriter.innerText = DEFAULT_TEXT
     }
}

// Create New Content
function getContent(text){
    var rootNode = document.createElement(
        "article",
    )
    rootNode.classList.add("content-box", "ctb", "mt-4", "theme-content-bg");
    rootNode.innerHTML = "<div class=\"content-inner\">\n" +
    "                    <div class=\"d-flex justify-content-between align-items-md-center\">\n" +
    "                        <div class=\"d-flex flex-column flex-md-row align-items-md-center\">\n" +
    "                            <div class=\"profile-pic image-container me-2\">\n" +
    "                                <img src=\"./images/reza.jpg\" alt=\"\">\n" +
    "                            </div>\n" +
    "                            <h6 class=\"color-white m-0 me-1 mt-tab-1\">Khan Asfi Reza</h6>\n" +
    "                            <small class=\"color-text m-0 mt-tab-1\">@khanasfireza | 1min</small>\n" +
    "                        </div>\n" +
    "                        <button class=\"btn color-white btn-more\">\n" +
    "                            <i class=\"fas fa-ellipsis-v\"></i>\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                    <p class=\"mt-3 color-white\">\n" + text +
    "                    </p>\n" +
    "                    <div class=\"mt-3\">\n" +
    "                        <button class=\"btn btn-emo text-danger me-3\">\n" +
    "                            <i class=\"far fa-heart\"></i> 1\n" +
    "                        </button>\n" +
    "                        <button class=\"btn btn-emo theme-color me-3\">\n" +
    "                            <i class=\"fas fa-share\"></i> 1\n" +
    "                        </button>\n" +
    "                        <button class=\"btn btn-emo text-success me-3\">\n" +
    "                            <i class=\"fas fa-comment-dots\"></i> 1\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n"
    return rootNode
}

// Create Content
submitBtn.onclick = function (){
    if(contentWriter.innerText !== DEFAULT_TEXT) {
        contentSection.insertBefore(getContent(contentWriter.innerText), contentSection.childNodes[2]);
        contentWriter.innerText = DEFAULT_TEXT;
    }
}

