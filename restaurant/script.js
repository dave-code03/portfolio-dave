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

window.scrollTo({
    top:0,
    left:0,
    behavior:"instant"
});

window.addEventListener("load", () => {
   
    initLoader();
    initMenu();
    initBackToTop();
    initActiveLinks();

    history.scrollRestoration = "manual";
    
});

/* =========================================
   LOADER
========================================= */
function initLoader(){

    const loader=document.getElementById("loader");
    const flash=document.getElementById("flash");

    if(!loader) return;

    window.addEventListener("load",()=>{

        setTimeout(()=>{

            flash.classList.add("show");

        },1700);

        setTimeout(()=>{

            loader.style.opacity="0";

        },1800);

        setTimeout(()=>{

            loader.remove();

        },2400);

    });

}

setTimeout(()=>{

    loader.remove();

    document.body.classList.add("loaded");

},2400);

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
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {

            const sectionTop = section.offsetTop;

            if (scrollPosition >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }

        });

      let lastScroll = 0;

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    let current = window.pageYOffset;

    if(current > lastScroll && current > 120){

        navbar.classList.add("hide");

    }else{

        navbar.classList.remove("hide");

    }

    lastScroll = current;

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
