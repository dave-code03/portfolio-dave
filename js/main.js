/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.classList.add("hidden");

        document.body.classList.remove("loading");

    }

});

/* ==========================================
   STICKY HEADER
========================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ==========================================
   BACK TO TOP
========================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 300) {

        backToTop.classList.add("active");

    } else {

        backToTop.classList.remove("active");

    }

});

if (backToTop) {

    backToTop.addEventListener("click", (e) => {

        e.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

