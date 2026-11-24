
// ==========================
// MOBILE NAVIGATION
// ==========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});


// Close mobile menu after clicking a navigation link

const navigationLinks = document.querySelectorAll(".nav-link");

navigationLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


// ==========================
// ACTIVE NAVIGATION
// ==========================

const sections = document.querySelectorAll("main section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navigationLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });

});


// ==========================
// AUTOMATIC COPYRIGHT YEAR
// ==========================

const yearElement = document.getElementById("current-year");

yearElement.textContent = new Date().getFullYear();
