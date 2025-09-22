document.addEventListener('DOMContentLoaded', function () {

    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    const navbar = document.getElementById('navbar');
    window.onscroll = function () {
        if (window.scrollY > 50) {
            navbar.classList.add('glass-effect', 'shadow-lg');
        } else {
            navbar.classList.remove('glass-effect', 'shadow-lg');
        }
    };
});