document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('image-container');
    const img = document.createElement('img');
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/I-Beam_002.JPG/440px-I-Beam_002.JPG';
    img.alt = 'Steel Beam';
    img.className = 'steel-beam-image';
    imageContainer.appendChild(img);
});
