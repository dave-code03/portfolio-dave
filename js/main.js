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

/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(

    ".section-heading, .project-card, .skill-card, .process-card, .contact-card, .faq-item, .goal-card, .value-card"

);

const revealOnScroll = () => {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

/* ==========================================
   SCROLL REVEAL
========================================== */

.section-heading,
.project-card,
.skill-card,
.process-card,
.contact-card,
.faq-item,
.goal-card,
.value-card{

    opacity:0;

    transform:translateY(50px);

    transition:.8s ease;

}

.show{

    opacity:1;

    transform:translateY(0);

}
