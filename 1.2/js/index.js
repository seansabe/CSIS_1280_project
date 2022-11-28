// Minimizing and Maximizing effects

document.getElementById("minimize").addEventListener("click", function () {
    document.getElementById("window").classList.add("minimized");
    document.getElementById("main-menu").classList.add("animate", "slide");
    document.getElementById("content").style.display = "none";
    document.getElementById("main-menu").style.display = "block";
});
document.getElementById("maximize").addEventListener("click", function () {
    document.getElementById("window").classList.remove("minimized");
    document.getElementById("main-menu").classList.remove("animate", "slide");
    setTimeout(() => {
        document.getElementById("content").style.display = "block";
    }, 500);
    document.getElementById("main-menu").style.display = "none";
});

