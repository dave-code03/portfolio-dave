/* ==========================================
   PORTFOLIO MAIN JAVASCRIPT
========================================== */
"use strict";

/* ==========================================
   ELEMENT REFERENCES
========================================== */

const loader = document.querySelector(".loader");

const backToTop = document.getElementById("backToTop");

console.log("Dave Dev Portfolio initialized.");

/* ==========================================
   FUNCTIONS
========================================== */

function hideLoader() {

    if (!loader) return;

    loader.classList.add("hidden");

}

/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.classList.add("loader-hidden");

});
