/* ==========================
   Smooth Scrolling
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });
});

/* ==========================
   Active Navigation
========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

/* ==========================
   Sticky Header
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "0 3px 10px rgba(0,0,0,.08)";
    }

});

/* ==========================
   Contact Form
========================== */

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("Thank you! Your message has been submitted successfully.");

        form.reset();

    });

}

/* ==========================
   Scroll Animation
========================== */

const cards = document.querySelectorAll(".about-card, .skill-card, .project-card, .resume-box");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="0.6s";

    observer.observe(card);

});

/* ==========================
   Current Year
========================== */

document.getElementById("year").textContent = new Date().getFullYear();