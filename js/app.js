// typed.js
var typed = new Typed("#typed", {
    stringsElement: "#typed-strings",
    backSpeed: 30,
    typeSpeed: 30,
    startDelay: 30,
    loop: true
});

const _ELEMENT_VISIBLE_TRIGGER = 100;

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    reveals.forEach(item => {
        var windowHeight = window.innerHeight;
        var elementTop = item.getBoundingClientRect().top;
        var elementVisible = _ELEMENT_VISIBLE_TRIGGER;

        if (elementTop < windowHeight - elementVisible) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    })
}

window.addEventListener("scroll", reveal)





// window.onscroll = changeNavbarColor;

// function changeNavbarColor() {
//     var navbar = document.querySelector(".navbar");
//     if (window.scrollY >= 100 ) {
//         navbar.classList.add("navbar-color", "navbar-dark")
//         navbar.classList.remove("bg-transparent", "navbar-light")
//     } else {
//         navbar.classList.add("bg-transparent", "navbar-light")
//         navbar.classList.remove("navbar-color", "navbar-dark")
//     }
// }

// function showNavbar() {
//     var navbar = document.querySelector(".navbar");
//     if (window.scrollY >= 100 ) {
//         navbar.style.display = "block";
//     } else {
//         navbar.style.display = "none";
//     }
// }
