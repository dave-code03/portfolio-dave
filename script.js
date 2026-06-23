const themeBtn = document.querySelector(".theme-btn");


themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

});



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
