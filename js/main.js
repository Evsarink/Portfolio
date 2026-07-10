// This file contains the JavaScript code for the EverInk portfolio website.
// It handles interactions, animations, and dynamic content loading.

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Fade-in effect for sections on scroll
    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Contact form submission handling (example)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle form submission logic here
            alert('Thank you for your message!');
            contactForm.reset();
        });
    }
});