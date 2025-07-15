let lastScroll = 0;
const navbar = document.getElementById('navbar');
const goHome = document.getElementById('go-home');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.top = '0';
        return;
    }

    if (currentScroll > lastScroll && currentScroll > 50) {
        // Scrolling down and past 50px, hide navbar
        navbar.style.top = `-${navbar.offsetHeight + 10}px`;
    } else {
        // Scrolling up, show navbar
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
