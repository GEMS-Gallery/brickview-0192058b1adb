document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('image-container');
    const img = document.createElement('img');
    img.src = 'https://t3.ftcdn.net/jpg/01/36/83/78/360_F_136837876_CHgC2LxHviEPGOX2ifuOFBnhDvHX5HV8.jpg';
    img.alt = 'Brick Wall';
    img.className = 'brick-image';
    imageContainer.appendChild(img);
});
