const ELEMENT_VISIBLE_TRIGGER = 100;

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    reveals.forEach(item => {
        var windowHeight = window.innerHeight;
        var elementTop = item.getBoundingClientRect().top;
        var elementVisible = ELEMENT_VISIBLE_TRIGGER;

        if (elementTop < windowHeight - elementVisible) {
            item.classList.add("current");
        } else {
            item.classList.remove("current");
        }
    })
}

window.addEventListener("scroll", reveal)

/* custom dropdown for each project container */
var arrow = document.querySelectorAll("span.btn i");
arrow.forEach(item => {
    item.onclick = function() {
        var details = this.parentNode.parentNode.nextSibling.nextSibling; //access div.details element
        details.classList.toggle("active");
        this.classList.toggle("active")
    }
})

// projects filters
var projects = document.querySelectorAll(".project-container");
var filters = document.querySelectorAll(".projects .nav-link");

// initialization
projects.forEach(project => {
    (project.getAttribute("data-value") == "academic") ? project.classList.add("active") : project.classList.remove("active");
})

filters.forEach(item => {
    item.onclick = function() {
        // change active nav-link for each click
        filters.forEach(item => item.classList.remove("active"));
        this.classList.add("active");

        if (this.getAttribute("data-value") != "all") {
            for (var project of projects) {
                (project.getAttribute("data-value") == item.getAttribute("data-value")) ? project.classList.add("active") : project.classList.remove("active");
            }
        } else {
            projects.forEach(project => project.classList.add("active"));
        }
    }
})

// typed.js
var typed = new Typed("#typed", {
    stringsElement: "#typed-strings",
    backSpeed: 30,
    typeSpeed: 30,
    startDelay: 30,
    loop: true
});





// function showNavbar() {
//     var navbar = document.querySelector(".navbar");
//     if (window.scrollY >= 200 ) {
//         navbar.classList.add("navbar-color");
//         navbar.classList.remove("transparent-bg");
//     } else {
//         navbar.classList.add("transparent-bg");
//         navbar.classList.remove("navbar-color");
//     }
// }

// window.addEventListener("scroll", showNavbar)








// function showNavbar() {
//     var navbar = document.querySelector(".navbar");
//     if (window.scrollY >= 100 ) {
//         navbar.style.display = "block";
//     } else {
//         navbar.style.display = "none";
//     }
// }
