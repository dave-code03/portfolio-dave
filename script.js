const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("light");

});


function setTheme(){

let hour = new Date().getHours();


if(hour >= 7 && hour < 19){

document.body.classList.add("light");

}

else{

document.body.classList.remove("light");

}

}


setTheme();



button.addEventListener("click",()=>{

document.body.classList.toggle("light");

});



const nav = document.querySelector("nav");


window.addEventListener("scroll",()=>{


if(window.scrollY > 50){

nav.classList.add("scrolled");

}

else{

nav.classList.remove("scrolled");

}


});


const menuIcon = document.querySelector(".menu-icon");

const navLinks = document.querySelector(".nav-links");


menuIcon.onclick = () => {

navLinks.classList.toggle("active");

};


const navLinks = document.querySelector("nav ul");


menuIcon.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});
