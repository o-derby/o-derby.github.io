let lastScroll = 0;
const navbar = document.getElementById('navbar');
const goHome = document.getElementById('go-home');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Hide navbar on scroll down, show on scroll up
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.top = '0';
        return;
    }

    if (currentScroll > lastScroll) {
        // Scrolling down
        navbar.style.top = '-100px';
    } else {
        // Scrolling up
        navbar.style.top = '0';
    }

    lastScroll = currentScroll;
});

// Scroll to top when clicking "Olivia's Portfolio"
goHome.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navLinks.classList.remove('show'); // Close menu on click
});

// Toggle nav menu on small screens
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
