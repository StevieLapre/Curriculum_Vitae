document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const img = document.getElementById('profileImage');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.getElementsByClassName('close')[0];

    img.onclick = function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
    }

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
    
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
    });
});