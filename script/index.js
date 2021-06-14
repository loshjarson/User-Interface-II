
let scrollPosition = 0
const header = document.querySelector(".header");
document.addEventListener("scroll", event => {
    console.log(event.path[1])
    if (event.path[1].scrollY < scrollPosition) {
        header.style.opacity = "1"
        scrollPosition = event.path[1].scrollY
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    } else {
        header.style.opacity = "0"
        scrollPosition = event.path[1].scrollY
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
})

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}