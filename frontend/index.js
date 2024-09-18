document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('image-container');
    const img = document.createElement('img');
    img.src = 'https://m.media-amazon.com/images/I/61x4+ia7+NL.jpg';
    img.alt = 'Brick';
    img.className = 'brick-image';
    imageContainer.appendChild(img);
});
