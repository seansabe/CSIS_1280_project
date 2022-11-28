// Hide all previews and the window divider

document.getElementById("preview").style.borderLeft = "none";

document.getElementById("country").style.display = "none";
document.getElementById("likes").style.display = "none";
document.getElementById("hobbies").style.display = "none";
document.getElementById("projects").style.display = "none";
document.getElementById("avatar").style.display = "none";
document.getElementsByClassName("preview-image")[0].style.display = "none";
document.getElementsByClassName("preview-image")[1].style.display = "none";
document.getElementsByClassName("preview-image")[2].style.display = "none";
document.getElementsByClassName("description")[0].style.display = "none";


// Defining the click event for each file in the window

function preview(id) {
    document.getElementById("preview").style.borderLeft = "";
    // Country
    if (id == 1) {
        document.getElementById("country").style.display = "flex";
        document.getElementById("likes").style.display = "none";
        document.getElementById("hobbies").style.display = "none";
        document.getElementById("projects").style.display = "none";
        document.getElementById("avatar").style.display = "none";
        document.getElementsByClassName("preview-image")[0].style.display = "none";
        document.getElementsByClassName("preview-image")[1].style.display = "none";
        document.getElementsByClassName("preview-image")[2].style.display = "none";
        document.getElementsByClassName("description")[0].style.display = "none";

    }
    // Likes
    else if (id == 2) {
        document.getElementById("country").style.display = "none";
        document.getElementById("likes").style.display = "flex";
        document.getElementById("hobbies").style.display = "none";
        document.getElementById("projects").style.display = "none";
        document.getElementById("avatar").style.display = "none";
        document.getElementsByClassName("preview-image")[0].style.display = "none";
        document.getElementsByClassName("preview-image")[1].style.display = "none";
        document.getElementsByClassName("preview-image")[2].style.display = "none";
        document.getElementsByClassName("description")[0].style.display = "none";

    }
    // Hobbies
    else if (id == 3) {
        document.getElementById("country").style.display = "none";
        document.getElementById("likes").style.display = "none";
        document.getElementById("hobbies").style.display = "flex";
        document.getElementById("projects").style.display = "none";
        document.getElementById("avatar").style.display = "none";
        document.getElementsByClassName("preview-image")[0].style.display = "none";
        document.getElementsByClassName("preview-image")[1].style.display = "none";
        document.getElementsByClassName("preview-image")[2].style.display = "none";
        document.getElementsByClassName("description")[0].style.display = "none";

    }
    // Projects
    else if (id == 4) {
        document.getElementById("country").style.display = "none";
        document.getElementById("likes").style.display = "none";
        document.getElementById("hobbies").style.display = "none";
        document.getElementById("projects").style.display = "flex";
        document.getElementById("avatar").style.display = "none";
        document.getElementsByClassName("preview-image")[0].style.display = "none";
        document.getElementsByClassName("preview-image")[1].style.display = "none";
        document.getElementsByClassName("preview-image")[2].style.display = "none";
        document.getElementsByClassName("description")[0].style.display = "none";

    }
    // Avatar
    else {
        document.getElementById("country").style.display = "none";
        document.getElementById("likes").style.display = "none";
        document.getElementById("hobbies").style.display = "none";
        document.getElementById("projects").style.display = "none";
        document.getElementById("avatar").style.display = "flex";
        document.getElementsByClassName("preview-image")[0].style.display = "none";
        document.getElementsByClassName("preview-image")[1].style.display = "none";
        document.getElementsByClassName("preview-image")[2].style.display = "none";
        document.getElementsByClassName("description")[0].style.display = "none";
    }
}

// Preview the subfile using mouseover event

// Preview of likes
document.getElementsByClassName("subfile")[0].addEventListener("mouseover", function () {
    document.getElementsByClassName("preview-image")[0].style.display = "flex";
    document.getElementsByClassName("preview-image")[0].src = "../img/cats.gif";
});

document.getElementsByClassName("subfile")[1].addEventListener("mouseover", function () {
    document.getElementsByClassName("preview-image")[0].style.display = "flex";
    document.getElementsByClassName("preview-image")[0].src = "../img/arsenal.jpg";
});

document.getElementsByClassName("subfile")[2].addEventListener("mouseover", function () {
    document.getElementsByClassName("preview-image")[0].style.display = "flex";
    document.getElementsByClassName("preview-image")[0].src = "../img/castlevania.gif";
});

document.getElementsByClassName("subfile")[3].addEventListener("mouseover", function () {
    document.getElementsByClassName("preview-image")[0].style.display = "flex";
    document.getElementsByClassName("preview-image")[0].src = "../img/friends.jpeg";
});

// Preview of hobbies
document.getElementsByClassName("subfile")[4].addEventListener("mouseover", function () {
    document.getElementsByClassName("preview-image")[1].style.display = "flex";
    document.getElementsByClassName("preview-image")[1].src = "../img/cult.gif";
});

document.getElementsByClassName("subfile")[5].addEventListener("mouseover", function () {
    document.getElementsByClassName("preview-image")[1].style.display = "flex";
    document.getElementsByClassName("preview-image")[1].src = "../img/bike.jpg";
});

document.getElementsByClassName("subfile")[6].addEventListener("mouseover", function () {
    document.getElementsByClassName("preview-image")[1].style.display = "flex";
    document.getElementsByClassName("preview-image")[1].src = "../img/table-tennis.jpg";
});

// Preview for Projects
var description = {
    web: "- Blogs <br> - Business websites <br> - E-commerce sites <br> - Dashboards",
    mobile: "Designed and implemented the UI for several mobile apps. <br> - Kids activity tracking app <br> - Warehousing app",
    cv: "Built a wrinkle detection prototype for leather footwear using image processing and Machine Learning.",
    videogames: "- AR Solar System viewer <br> - Energy source simulator <br> - Runner game <br> - Impossible Tic Tac Toe <br> - Block coding videogames"
}

document.getElementsByClassName("subfile")[7].addEventListener("mouseover", function () {
    document.getElementsByClassName("preview-image")[2].style.display = "flex";
    document.getElementsByClassName("preview-image")[2].src = "";
    document.getElementsByClassName("description")[0].style.display = "block";
    document.getElementsByClassName("description")[0].innerHTML = description.web;
});

document.getElementsByClassName("subfile")[8].addEventListener("mouseover", function () {
    document.getElementsByClassName("preview-image")[2].style.display = "flex";
    document.getElementsByClassName("preview-image")[2].src = "";
    document.getElementsByClassName("description")[0].style.display = "block";
    document.getElementsByClassName("description")[0].innerHTML = description.mobile;
});

document.getElementsByClassName("subfile")[9].addEventListener("mouseover", function () {
    document.getElementsByClassName("preview-image")[2].style.display = "flex";
    document.getElementsByClassName("preview-image")[2].src = "";
    document.getElementsByClassName("description")[0].style.display = "block";
    document.getElementsByClassName("description")[0].innerHTML = description.cv;
});

document.getElementsByClassName("subfile")[10].addEventListener("mouseover", function () {
    document.getElementsByClassName("preview-image")[2].style.display = "flex";
    document.getElementsByClassName("preview-image")[2].src = "";
    document.getElementsByClassName("description")[0].style.display = "block";
    document.getElementsByClassName("description")[0].innerHTML = description.videogames;
});