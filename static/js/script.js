const carouselImages = document.querySelectorAll('#car-carousel img');
let currentIndex = 0;

function showNextImage() {
    carouselImages[currentIndex].classList.remove('carousel-active');
    currentIndex = (currentIndex + 1) % carouselImages.length;
    carouselImages[currentIndex].classList.add('carousel-active');
}

setInterval(showNextImage, 5000);
