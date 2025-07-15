let lastScroll = 0;
const navbar = document.getElementById('navbar');
const goHome = document.getElementById('go-home');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// NAVBAR SHOW/HIDE ON SCROLL
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.top = '0';
        return;
    }

    if (currentScroll > lastScroll && currentScroll > 50) {
        // Scrolling down, hide navbar
        navbar.style.top = `-${navbar.offsetHeight + 10}px`;
    } else {
        // Scrolling up, show navbar
        navbar.style.top = '0';
    }

    lastScroll = currentScroll;
});

// SCROLL TO TOP WHEN CLICKING TITLE
goHome.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navLinks.classList.remove('show'); // Close menu on click
});

// TOGGLE NAV MENU ON MOBILE
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

        if (about) {
            about.style.paddingTop = `${navbarHeight + 20}px`;
        }
    }
});
