let lastScroll = 0;
const navbar = document.getElementById('navbar');
const goHome = document.getElementById('go-home');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const about = document.getElementById('about-me');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Safety check
    if (!about || !navbar) return;

    // Get the halfway point of the #about-me section
    const aboutTop = about.offsetTop;
    const aboutHeight = about.offsetHeight;
    const triggerPoint = aboutTop + (aboutHeight / 2);

    // Don't trigger navbar behavior until past halfway through About Me
    if (currentScroll < triggerPoint) {
        navbar.style.top = '0'; // Always show navbar before trigger point
        return;
    }

    // Scroll down → hide navbar
    if (currentScroll > lastScroll && currentScroll > 50) {
        navbar.style.top = `-${navbar.offsetHeight + 10}px`;
    } else {
        // Scroll up → show navbar
        navbar.style.top = '0';
    }

    lastScroll = currentScroll;
});

// Mobile nav toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


// DYNAMIC PADDING TO PREVENT NAVBAR OVERLAP
window.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    const about = document.getElementById('about-me');

    if (navbar) {
        const navbarHeight = navbar.offsetHeight;

        if (main) {
            main.style.paddingTop = `${navbarHeight + 20}px`; // buffer
        }
    }
});
