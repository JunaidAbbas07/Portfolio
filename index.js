const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'UI/UX Designer', 'Web Designer', 'Web Development'],
    typeSpeed: 150,
    backDelay: 100,
    backSpeed: 100,
    loop: true
});

ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.text-box p,.text-box h1,.text-box h3', { origin: 'top' });
ScrollReveal().reveal('.row', { origin: 'bottom' });
ScrollReveal().reveal('.social', { origin: 'right' });