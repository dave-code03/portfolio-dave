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

    if (!loader) return;

    window.addEventListener("load", () => {

        setTimeout(() => {

            document.body.classList.add("loaded");

            loader.style.opacity = "0";
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

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    const icon = document.querySelector(".menu-toggle i");

    if (!menuToggle || !navMenu || !icon) return;

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

    document.querySelectorAll("nav ul li a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}
/* =========================================
   BACK TO TOP
========================================= */

function initBackToTop() {

    const backToTop = document.getElementById("backToTop");

    if (!backToTop) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 350) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click", (e) => {

        e.preventDefault();

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}
/* =========================================
   ACTIVE NAVIGATION
========================================= */

function initActiveLinks() {

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav ul li a");

    if (!sections.length || !navLinks.length) return;

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 140;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                current = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

}
/* =========================================
   SCROLL REVEAL
========================================= */

function initScrollReveal() {

    const hiddenElements = document.querySelectorAll(".hidden");

    if (!hiddenElements.length) return;

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    hiddenElements.forEach(element => {

        observer.observe(element);

    });

}
