const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },600);

    }

});




const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector("nav ul");

const backToTop = document.getElementById("backToTop");

const icon = document.querySelector(".menu-toggle i");

menuToggle.addEventListener("click",()=>{

navMenu.classList.toggle("active");

if(navMenu.classList.contains("active")){

icon.classList.remove("fa-bars");

icon.classList.add("fa-xmark");

}else{

icon.classList.remove("fa-xmark");

icon.classList.add("fa-bars");

}

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
   ACTIVE NAVIGATION
========================================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 150;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});

.hidden{

opacity:0;

transform:translateY(60px);

transition:all .8s ease;

}

.show{

opacity:1;

transform:translateY(0);

}

window.addEventListener("load", () => {

    history.replaceState(null, null, " ");

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
    });
