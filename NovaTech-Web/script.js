/* =========================================
   BACK TO TOP BUTTON
========================================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* =========================================
   NAVBAR SCROLL
========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 80){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});

/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

menuToggle.classList.toggle("active");

navLinks.classList.toggle("active");

});

/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* =========================================
   SCROLL REVEAL
========================================= */

const reveals = document.querySelectorAll(".reveal");

function revealElements(){

reveals.forEach(element=>{

const windowHeight = window.innerHeight;

const revealTop = element.getBoundingClientRect().top;

const revealPoint = 120;

if(revealTop < windowHeight - revealPoint){

element.classList.add("active");

}

});

}

window.addEventListener("scroll", revealElements);

revealElements();
