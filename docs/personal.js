
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.content-section');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior

        // Remove active class from all sections
        sections.forEach(section => section.classList.remove('active'));

        // Get the target section ID from the clicked link
        const targetId = link.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        // Show the target section
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Close the menu on mobile
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});
