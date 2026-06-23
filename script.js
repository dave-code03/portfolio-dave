const themeBtn = document.querySelector(".theme-btn");


themeBtn.addEventListener("click",()=>{

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


menuIcon.onclick = ()=>{

navLinks.classList.toggle("active");

};
