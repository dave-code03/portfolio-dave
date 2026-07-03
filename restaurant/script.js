const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector("nav ul");

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

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});
