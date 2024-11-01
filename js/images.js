document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
        if (!img.style.width && !img.style.height) {
            img.style.width = '100%';
            img.style.height = 'auto';
        }
    });
});