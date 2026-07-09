/* ========================================= */
/*              LOADER                        */
/* ========================================= */

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

}, 800);

});

/* ========================================= */
/*          DARK / LIGHT MODE                 */
/* ========================================= */

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("light");

const icon = themeBtn.querySelector("i");

if(document.body.classList.contains("light")){

icon.className = "fa-solid fa-sun";

}else{

icon.className = "fa-solid fa-moon";

}

});

/* ========================================= */
/*          MOBILE MENU                       */
/* ========================================= */

const menuBtn = document.querySelector(".menu-icon");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});

/* ========================================= */
/*           NAVBAR SCROLL                    */
/* ========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY > 80){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});

/* ========================================= */
/*            TYPING EFFECT                   */
/* ========================================= */

const words=[

"Front-End Developer",

"HTML | CSS | JavaScript",

"Responsive Web Designer",

"Freelancer"

];

let wordIndex=0;

let letterIndex=0;

let deleting=false;

const typing=document.getElementById("typing-text");

function typingEffect(){

const current=words[wordIndex];

if(!deleting){

typing.textContent=current.substring(0,letterIndex++);

if(letterIndex>current.length){

deleting=true;

setTimeout(typingEffect,1200);

return;

}

}else{

typing.textContent=current.substring(0,letterIndex--);

if(letterIndex < 0){
  
letterIndex = 0;

deleting=false;

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

}

}

setTimeout(typingEffect,deleting?45:90);

}

typingEffect();

/* ========================================= */
/*            BACK TO TOP                     */
/* ========================================= */

const topBtn=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ========================================= */
/*          ACTIVE NAVIGATION                */
/* ========================================= */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 150;
const sectionHeight = section.offsetHeight;

if(window.scrollY >= sectionTop &&
window.scrollY < sectionTop + sectionHeight){

current = section.getAttribute("id");

}

});

navItems.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});

/* ========================================= */
/*          SCROLL REVEAL                    */
/* ========================================= */

const revealElements = document.querySelectorAll(

".section,.service-card,.project-card,.testimonial-card,.tech-card,.why-card,.stat-box"

);

function revealOnScroll(){

revealElements.forEach(element=>{

const windowHeight = window.innerHeight;

const revealTop = element.getBoundingClientRect().top;

const revealPoint = 120;

if(revealTop < windowHeight - revealPoint){

element.classList.add("show");

}

});

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ========================================= */
/*        ANIMATED COUNTERS                  */
/* ========================================= */

const counters = document.querySelectorAll(".stat-box h3");

let counterStarted = false;

function startCounters(){

if(counterStarted) return;

const statsSection = document.querySelector(".hero-stats");

const top = statsSection.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

counterStarted = true;

counters.forEach(counter=>{

const text = counter.innerText;

const target = parseInt(text);

let current = 0;

const speed = target / 50;

const update = ()=>{

current += speed;

if(current < target){

counter.innerText = Math.floor(current) + "+";

requestAnimationFrame(update);

}else{

counter.innerText = text;

}

};

update();

});

}

}

window.addEventListener("scroll", startCounters);

startCounters();

/* ========================================= */
/*           PROJECT MODAL                   */
/* ========================================= */

const modal = document.getElementById("projectModal");

const projectButtons = document.querySelectorAll(".project-btn");

const closeModal = document.querySelector(".close-modal");

projectButtons.forEach(button=>{

button.addEventListener("click",(e)=>{

if(button.getAttribute("href")==="#"){

e.preventDefault();

modal.style.display="flex";

}

});

});

closeModal.addEventListener("click",()=>{

modal.style.display="none";

});

window.addEventListener("click",(e)=>{

if(e.target===modal){

modal.style.display="none";

}

});

/* ========================================= */
/*        CONTACT FORM DEMO                  */
/* ========================================= */

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert(

"✅ Thank you for your message! I'll get back to you soon."

);

contactForm.reset();

});

/* ========================================= */
/*           CURRENT YEAR                    */
/* ========================================= */

const yearElement = document.querySelector(".copyright");

if(yearElement){

yearElement.innerHTML =

`© ${new Date().getFullYear()} Dave Occeant. All Rights Reserved.`;

}
