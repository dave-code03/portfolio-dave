const themeBtn = document.querySelector(".theme-btn");


themeBtn.addEventListener("click",()=>{

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



const nav = document.querySelector("nav");


window.addEventListener("scroll",()=>{


if(window.scrollY > 50){

nav.classList.add("scrolled");

}

else{

nav.classList.remove("scrolled");

}


});
