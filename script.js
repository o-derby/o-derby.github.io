let lastScroll = 0;
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Navbar hide/show on scroll
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (!navbar) return;

    // Scroll down → hide navbar
    if (currentScroll > lastScroll && currentScroll > 200) {
        navbar.style.top = `-${navbar.offsetHeight + 10}px`;
    } else {
        // Scroll up → show navbar
        navbar.style.top = '0';
    }

    lastScroll = currentScroll;
});

// Mobile nav toggle
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// Close mobile nav when clicking a link
if (navLinks) {
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });
}

// Toggle profile photo
function toggleImage() {
    const imageElement = document.getElementById('myPhoto');
    if (imageElement) {
        if (imageElement.src.includes("images/your-photo.jpeg")) {
            imageElement.src = "cover/c-me.png";
            imageElement.alt = "Olivia's photo 2";
        } else {
            imageElement.src = "images/your-photo.jpeg";
            imageElement.alt = "Olivia's photo";
        }
    }
}
