"use strict";

/* =========================================
   INITIALIZE APP
========================================= */
document.addEventListener("DOMContentLoaded", init);

function init() {

    initLoader();
    initMenu();
    initBackToTop();
    initActiveLinks();

}

window.addEventListener("load", () => {
    initLoader();
    initMenu();
    initBackToTop();
    initActiveLinks();

    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
});

/* =========================================
   LOADER
========================================= */

function initLoader() {

    const loader = document.getElementById("loader");

    if (!loader) return;

    loader.style.opacity = "0";
loader.style.visibility = "hidden";

    setTimeout(() => {
        loader.style.display = "none";
    }, 600);

   setTimeout(() => {

    loader.remove();

},600);
   
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

       document.querySelectorAll("nav ul li a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        icon.classList.replace("fa-xmark","fa-bars");

    });

});
       
        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {

            icon.classList.replace("fa-bars", "fa-xmark");

        } else {

            icon.classList.replace("fa-xmark", "fa-bars");

        }

    });

}


/* =========================================
   BACK TO TOP
========================================= */

function initBackToTop() {

    const backToTop = document.getElementById("backToTop");

    if (!backToTop) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click", () => {

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

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
    
    if (!sections.length || !navLinks.length) return;

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

           const scrollPosition = window.scrollY + 200;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");
               
            if(scrollPosition >= sectionTop){
               
           }

       });

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

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

hiddenElements.forEach(el=>observer.observe(el));
