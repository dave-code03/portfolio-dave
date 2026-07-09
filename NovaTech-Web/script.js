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
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

menuToggle.classList.toggle("active");

navLinks.classList.toggle("active");

});
