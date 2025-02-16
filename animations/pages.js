document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('intro-section').style.display = 'none';
        fetch(this.href)
            .then(response => response.text())
            .then(html => {
                document.querySelector('.features').innerHTML = html;
            })
            .catch(error => console.error('Error loading page:', error));
    });
});