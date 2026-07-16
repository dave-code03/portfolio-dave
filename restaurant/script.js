"use strict";

/* =========================================
   START APP
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    initLoader();
    initMenu();
    initBackToTop();
    initActiveLinks();
    initScrollReveal();

});

/* =========================================
   LOADER
========================================= */

function initLoader() {

    const loader = document.getElementById("loader");

    if (!loader) 
            loader.style.visibility = "hidden";

        }, 4300);

        setTimeout(() => {

            loader.remove();

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "auto"
            });

        }, 5000);

    });

}

/* =========================================
   MOBILE MENU
========================================= */

function initMenu() {

    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav ul");
    const icon = document.querySelector(".menu-toggle i");

    if (!toggle || !menu || !icon) return;

    toggle.addEventListener("click", () => {

        menu.classList.toggle("active");

        if (menu.classList.contains("active")) {

            icon.classList.replace("fa-bars", "fa-xmark");

        } else {

            icon.classList.replace("fa-xmark", "fa-bars");

        }

    });

    document.querySelectorAll("nav ul a").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");

            icon.classList.replace("fa-xmark", "fa-bars");

        });

    });

}

/* =========================================
   BACK TO TOP
========================================= */

function initBackToTop() {

    const button = document.getElementById("backToTop");

    if (!button) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 350) {

            button.classList.add("show");

        } else {

            button.classList.remove("show");

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

/* =========================================
   ACTIVE NAV
========================================= */



const navbar = document.querySelector(".navbar");

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    if(currentScroll <= 50){

        navbar.classList.remove("hide");

    }else if(currentScroll > lastScroll){

        navbar.classList.add("hide");

    }else{

        navbar.classList.remove("hide");

    }

    lastScroll = currentScroll;

});

/* =========================================
   SCROLL REVEAL
========================================= */

function initScrollReveal() {

    const hidden = document.querySelectorAll(".hidden");

    if (!hidden.length) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    });

    hidden.forEach(item => observer.observe(item));

}
