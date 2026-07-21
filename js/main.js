"use strict";

/* ==========================================
   ELEMENT REFERENCES
========================================== */

const loader = document.querySelector(".loader");
const backToTop = document.getElementById("backToTop");


/* ==========================================
   FUNCTIONS
========================================== */

function hideLoader() {

    if (!loader) return;

    loader.classList.add("hidden");

}


/* ==========================================
   INITIALIZATION
========================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        hideLoader();

    }, 800);

});


console.log("Dave Dev Portfolio initialized.");
