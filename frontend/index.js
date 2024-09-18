document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('image-container');
    const img = document.createElement('img');
    img.src = 'https://images.thdstatic.com/productImages/85ee3ead-5053-4f94-a991-044fe1a396e6/svn/leaf-green-trafficmaster-needlepunch-carpet-7pd5n620144h-64_1000.jpg';
    img.alt = 'Green Carpet';
    img.className = 'carpet-image';
    imageContainer.appendChild(img);
});
