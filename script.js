const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
        navLink.classList.remove('active');
    });
});
const menuIcon = document.getElementById('menuIcon');
const navLink = document.getElementById('navLinks');

menuIcon.addEventListener('click', () => {
  navLink.classList.toggle('active');
});
