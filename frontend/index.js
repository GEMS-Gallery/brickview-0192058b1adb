document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('image-container');
    const img = document.createElement('img');
    img.src = 'https://images.thdstatic.com/productImages/d9c8f1b5-9764-4b5e-a9d3-7303f0383fa3/svn/bricks-red0126mco-64_1000.jpg';
    img.alt = 'Brick';
    img.className = 'brick-image';
    imageContainer.appendChild(img);
});
