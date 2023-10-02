// Minimizing hint after 5 seconds of page load
var minimizeHint = setTimeout(function () {
    document.getElementById("minimize").classList.add("pulse");
}, 5000);

// Minimizing and Maximizing effects

document.getElementById("minimize").addEventListener("click", function () {
    document.getElementById("window").classList.add("minimized");
    document.getElementById("main-menu").classList.add("animate", "slide");
    document.getElementById("content").style.display = "none";
    document.getElementById("main-menu").style.display = "block";
    document.getElementsByTagName("header")[0].classList.remove("border-bottom");
    document.getElementById("minimize").classList.remove("pulse");
    clearTimeout(minimizeHint);
    setTimeout(function () {
        document.getElementById("maximize").classList.add("pulse");
    }, 1000);
});
document.getElementById("maximize").addEventListener("click", function () {
    document.getElementById("window").classList.remove("minimized");
    document.getElementById("main-menu").classList.remove("animate", "slide");
    setTimeout(() => {
        document.getElementById("content").style.display = "block";
        document.getElementsByTagName("header")[0].classList.add("border-bottom");
    }, 500);
    document.getElementById("main-menu").style.display = "none";
    document.getElementById("maximize").classList.remove("pulse");
    setTimeout(function () {
        document.getElementById("minimize").classList.add("pulse");
    }, 1000);
});

