/* ========================================= */
/*            THEME TOGGLE                   */
/* ========================================= */

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        themeBtn.textContent = "🌙";

    }else{

        themeBtn.textContent = "☀️";

    }

});

/* ========================================= */
/*          NAVBAR ON SCROLL                 */
/* ========================================= */

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        nav.classList.add("scrolled");

    }else{

        nav.classList.remove("scrolled");

    }

});

/* ========================================= */
/*          MOBILE MENU                      */
/* ========================================= */

const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/* ========================================= */
/*      CLOSE MENU AFTER CLICK               */
/* ========================================= */

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});

/* ========================================= */
/*         ACTIVE LINK ON SCROLL             */
/* ========================================= */

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    links.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});
