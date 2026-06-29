/* ==========================
   Smooth Scrolling
========================== */

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior:'smooth'
        });

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

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") == "#" + current){

            link.classList.add("active");

        }

    });

});


/* ==========================
   Sticky Header Shadow
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 40){

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.15)";

    }
    else{

        header.style.boxShadow="0 3px 10px rgba(0,0,0,.08)";

    }

});


/* ==========================
   Contact Form
========================== */

const form = document.querySelector("form");

form.addEventListener("submit",function(e){

    e.preventDefault();

    alert("Thank you! Your message has been submitted.");

    form.reset();

});


/* ==========================
   Simple Scroll Animation
========================== */

const cards = document.querySelectorAll(
".about-card,.skill-card,.project-card,.resume-box"
);

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition=".6s";

    observer.observe(card);

});