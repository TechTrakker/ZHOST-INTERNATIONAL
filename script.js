document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});
// Toggles endz
// Images Array
const images = [
    'img-js22.jpg',
    'img-js23.jpg',
    'img-js24.jpg',
    'img-js25.jpg',
    'img-js5.jpg',
    'img-js6.jpg',
    'img-js7.jpg',
    'img-js8.jpg',
    'img-js9.jpg',
    'img-js10.jpg',
    'img-js11.jpg',
    'img-js12.jpg',
    'img-js13.jpg',
    'img-js14.jpg',
    'img-js15.jpg',
    'img-js16.jpg',
    'img-js17.jpg',
    'img-js18.jpg',
    'img-js19.jpg',
    'img-js20.jpg',
    'img-js21.jpg',
    'img-js1.jpg',
    'img-js2.jpg',
    'img-js3.jpg',
    'img-js4.jpg',
    'img-js26.jpg',
    'img-js27.jpg',
    'img-js28.jpg',
    'img-js29.jpg',
    'img-js30.jpg',
    'img-js31.jpg',
];

let currentImageIndex = 0;

function rotateImages() {
    const imgElement = document.getElementById('rotatingImage');


    imgElement.src = images[currentImageIndex];


    currentImageIndex = (currentImageIndex + 1) % images.length;


    setTimeout(rotateImages, 2000);
}

window.onload = function () {
    rotateImages();
};
// next js For Carousel**********************************************************************
let currentIndex = 0;
const products = document.querySelectorAll('.product');
const totalProducts = products.length;

function showSlide(index) {
    if (index >= totalProducts) {
        currentIndex = 0;
    }
    if (index < 0) {
        currentIndex = totalProducts - 1;
    }
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * (100 / totalProducts)}%)`;
}

function moveSlide(n) {
    currentIndex += n;
    showSlide(currentIndex);
}

// Auto-move slider every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);

// FAQ JavaScript*******************************************************************************************

function toggleFaq(faq) {
    const parent = faq.parentElement;
    const isActive = parent.classList.contains('active');
    
    document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
  
    if (!isActive) {
      parent.classList.add('active');
    }
  }
  