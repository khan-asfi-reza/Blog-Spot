var comment = document.getElementById("comment");
var commentBtn = document.getElementById("commentSubmit");
var replies = document.getElementById("replies");

function getComment(text){
    var comment = document.createElement("div");
    comment.classList.add("mt-3", "theme-content-bg", "content-box");
    comment.innerHTML = "<div class=\"mt-3 theme-content-bg content-box\">\n" +
        "                    <div class=\"content-inner\">\n" +
        "                        <div class=\"d-flex align-items-center input-section s-1\">\n" +
        "                            <div class=\"image-container profile-pic-big me-2\">\n" +
        "                                <img src=\"./images/reza.jpg\" alt=\"\">\n" +
        "                            </div>\n" +
        "                            <h6 class=\"text-white\">Khan Asfi Reza</h6>\n" +
        "                        </div>\n" +
        "                        <p class=\"color-text mt-3\">\n" +text+
        "                        </p>\n" +
        "                        <div class=\"mt-3\">\n" +
        "                            <button class=\"btn btn-emo text-danger me-3\">\n" +
        "                                <i class=\"far fa-heart\"></i> 5.5k\n" +
        "                            </button>\n" +
        "\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>";
    return comment;
}

commentBtn.onclick = function (){
    if(comment.value !== ""){
        replies.insertBefore(getComment(comment.value), replies.childNodes[1])
    }
}