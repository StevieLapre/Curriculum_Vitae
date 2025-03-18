const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const homePage = document.getElementById('home-page');
        homePage.classList.add('animate-out');
        setTimeout(() => {
            window.location.href = this.href;
        }, 500);
    });
});
