
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


document.addEventListener("click", function (e) {
    const nav = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");

    if (
        nav.classList.contains("active") &&
        !nav.contains(e.target) &&
        !hamburger.contains(e.target)
    ) {
        nav.classList.remove("active");
    }
});
