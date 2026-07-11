"use strict";

/* =========================================
   LOADER
========================================= */
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.classList.add("hide");
    }

    revealElements();
});

/* =========================================
   ELEMENTS
========================================= */

const navbar = document.querySelector(".navbar");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a");
const backToTop = document.getElementById("backToTop");
const reveals = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("section");

/* =========================================
   MOBILE MENU
========================================= */

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");
        navMenu.classList.toggle("active");

    });

}

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) navMenu.classList.remove("active");
        if (menuToggle) menuToggle.classList.remove("active");

    });

});

/* =========================================
   BACK TO TOP
========================================= */

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 300) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

/* =========================================
   NAVBAR SCROLL
========================================= */

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* =========================================
   SCROLL REVEAL
========================================= */

function revealElements() {

    const windowHeight = window.innerHeight;
    const revealPoint = 120;

    reveals.forEach(element => {

        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealElements);

/* =========================================
   ACTIVE NAVIGATION
========================================= */

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
