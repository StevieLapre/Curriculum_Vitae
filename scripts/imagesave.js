document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.getElementsByClassName('close')[0];

    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.onclick = function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
        }

        img.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Disable right-click context menu on the entire document
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});