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

/* ================================ */
/*       TYPING EFFECT              */
/* ================================ */

const words=[

"Front-End Developer",

"Web Designer",

"HTML | CSS | JavaScript",

"Responsive Websites"

];

let wordIndex=0;

let charIndex=0;

let currentWord="";

let isDeleting=false;

const typing=document.getElementById("typing-text");

function type(){

currentWord=words[wordIndex];

if(isDeleting){

typing.textContent=currentWord.substring(0,charIndex--);

}else{

typing.textContent=currentWord.substring(0,charIndex++);

}

if(!isDeleting && charIndex===currentWord.length){

isDeleting=true;

setTimeout(type,1200);

return;

}

if(isDeleting && charIndex===0){

isDeleting=false;

wordIndex=(wordIndex+1)%words.length;

}

setTimeout(type,isDeleting?40:80);

}

type();
