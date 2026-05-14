const elements = document.querySelectorAll(".service-card, .gallery-item, .about, .contact-box");

elements.forEach(element => {
    element.classList.add("reveal");
});

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            element.classList.add("active");
        }
    });
}

revealOnScroll();