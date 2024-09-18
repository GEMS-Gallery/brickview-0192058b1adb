document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('image-container');
    const img = document.createElement('img');
    img.src = 'https://mobileimages.lowes.com/productimages/4d55aa9a-b645-48ec-9a9e-7e6480283eea/02592174.jpg?size=pdhism';
    img.alt = 'Brick';
    img.className = 'brick-image';
    imageContainer.appendChild(img);
});
