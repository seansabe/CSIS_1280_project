// Hide all previews and the window divider

document.getElementById("preview").style.borderLeft = "none";

document.getElementById("country").style.display = "none";
document.getElementById("likes").style.display = "none";
document.getElementById("hobbies").style.display = "none";
document.getElementById("projects").style.display = "none";
document.getElementById("avatar").style.display = "none";


// Defining the click event for each file in the window

function preview(id) {
    document.getElementById("preview").style.borderLeft = "";
    if (id == 1) {
        document.getElementById("country").style.display = "flex";
        document.getElementById("likes").style.display = "none";
        document.getElementById("hobbies").style.display = "none";
        document.getElementById("projects").style.display = "none";
        document.getElementById("avatar").style.display = "none";
    } else if (id == 2) {
        document.getElementById("country").style.display = "none";
        document.getElementById("likes").style.display = "flex";
        document.getElementById("hobbies").style.display = "none";
        document.getElementById("projects").style.display = "none";
        document.getElementById("avatar").style.display = "none";
    } else if (id == 3) {
        document.getElementById("country").style.display = "none";
        document.getElementById("likes").style.display = "none";
        document.getElementById("hobbies").style.display = "flex";
        document.getElementById("projects").style.display = "none";
        document.getElementById("avatar").style.display = "none";
    } else if (id == 4) {
        document.getElementById("country").style.display = "none";
        document.getElementById("likes").style.display = "none";
        document.getElementById("hobbies").style.display = "none";
        document.getElementById("projects").style.display = "flex";
        document.getElementById("avatar").style.display = "none";
    } else {
        document.getElementById("country").style.display = "none";
        document.getElementById("likes").style.display = "none";
        document.getElementById("hobbies").style.display = "none";
        document.getElementById("projects").style.display = "none";
        document.getElementById("avatar").style.display = "flex";
    }
}