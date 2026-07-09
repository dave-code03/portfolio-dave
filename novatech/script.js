/* ================================================= */
/*                 PAGE LOADER                       */
/* ================================================= */

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

},500);

});

/* ================================================= */
/*                 MOBILE MENU                       */
/* ================================================= */

const menuIcon = document.querySelector(".menu-icon");

const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

/* ================================================= */
/*            CLOSE MENU AFTER CLICK                 */
/* ================================================= */

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});

/* ================================================= */
/*               STICKY NAVBAR                       */
/* ================================================= */

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});

/* ================================================= */
/*                TYPING EFFECT                      */
/* ================================================= */

const words = [

"Front-End Developer",

"HTML | CSS | JavaScript",

"Responsive Web Designer",

"Freelancer"

];

let wordIndex = 0;

let letterIndex = 0;

let deleting = false;

const typing = document.getElementById("typing-text");

function typingEffect(){

if(!typing) return;

const current = words[wordIndex];

if(!deleting){

typing.textContent = current.substring(0, letterIndex);

letterIndex++;

if(letterIndex > current.length){

deleting = true;

setTimeout(typingEffect,1200);

return;

}

}else{

typing.textContent = current.substring(0, letterIndex);

letterIndex--;

if(letterIndex < 0){

deleting = false;

letterIndex = 0;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(typingEffect,deleting ? 50 : 90);

}

typingEffect();

/* ================================================= */
/*              LIGHT / DARK MODE                    */
/* ================================================= */

const themeBtn = document.querySelector(".theme-btn");

const body = document.body;

if(localStorage.getItem("theme") === "light"){

body.classList.add("light");

if(themeBtn){

themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

}

}

if(themeBtn){

themeBtn.addEventListener("click",()=>{

body.classList.toggle("light");

if(body.classList.contains("light")){

themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

localStorage.setItem("theme","light");

}else{

themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

localStorage.setItem("theme","dark");

}

});

}

/* ================================================= */
/*              BACK TO TOP BUTTON                   */
/* ================================================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

if(window.scrollY > 300){

backToTop.style.display = "flex";

}else{

backToTop.style.display = "none";

}

});

backToTop.addEventListener("click", () => {

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ================================================= */
/*            ACTIVE NAVIGATION LINK                 */
/* ================================================= */

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 120;

const sectionHeight = section.clientHeight;

if(window.scrollY >= sectionTop){

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

/* ================================================= */
/*            REVEAL ON SCROLL                       */
/* ================================================= */

const revealElements = document.querySelectorAll(

".section,.service-card,.project-card,.tech-card,.why-card,.testimonial-card,.timeline-item"

);

function revealOnScroll(){

const trigger = window.innerHeight * 0.85;

revealElements.forEach(el=>{

const top = el.getBoundingClientRect().top;

if(top < trigger){

el.classList.add("show");

}

});

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

/* ================================================= */
/*          CONTACT FORM VALIDATION                  */
/* ================================================= */

const contactForm = document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

const inputs = contactForm.querySelectorAll("input, textarea");

let valid = true;

inputs.forEach(input=>{

if(input.value.trim()===""){

input.style.border="2px solid red";

valid=false;

}else{

input.style.border="2px solid #00ff88";

}

});

if(valid){

alert("✅ Thank you! Your message has been sent successfully.");

contactForm.reset();

inputs.forEach(input=>{

input.style.border="none";

});

}

});

}

/* ================================================= */
/*              PROJECT MODAL                        */
/* ================================================= */

const modal = document.getElementById("projectModal");

const closeModal = document.querySelector(".close-modal");

const projectButtons = document.querySelectorAll(".project-btn");

projectButtons.forEach(button=>{

button.addEventListener("click",(e)=>{

if(button.getAttribute("href")==="#"){

e.preventDefault();

if(modal){

modal.style.display="flex";

}

}

});

});

if(closeModal){

closeModal.addEventListener("click",()=>{

modal.style.display="none";

});

}

window.addEventListener("click",(e)=>{

if(e.target===modal){

modal.style.display="none";

}

});

/* ================================================= */
/*            BUTTON RIPPLE EFFECT                   */
/* ================================================= */

const buttons=document.querySelectorAll(

".btn-primary,.btn-secondary,.btn-cv,.project-btn,.hire-btn"

);

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});

/* ================================================= */
/*             IMAGE HOVER EFFECT                    */
/* ================================================= */

const images=document.querySelectorAll("img");

images.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.04)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

/* ================================================= */
/*            CONSOLE MESSAGE                        */
/* ================================================= */

console.log(

"🚀 NovaTech Website Developed by Dave Occeant"

);

/* ========================================= */
/*        REVEAL ANIMATION                   */
/* ========================================= */

.section,
.service-card,
.project-card,
.tech-card,
.why-card,
.testimonial-card,
.timeline-item{

opacity:0;

transform:translateY(50px);

transition:.8s ease;

}

.show{

opacity:1;

transform:translateY(0);

}

/* Active menu */

.nav-links a.active{

color:var(--primary);

font-weight:700;

}
