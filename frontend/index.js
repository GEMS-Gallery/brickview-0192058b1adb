document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('image-container');
    const img = document.createElement('img');
    img.src = 'https://www.coremarkmetals.com/files/image/large/STEEL_BEAM_JUNIOR_OMS.jpg';
    img.alt = 'Steel Beam';
    img.className = 'steel-beam-image';
    imageContainer.appendChild(img);
});
