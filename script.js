let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document.getElementById('nextBtn').addEventListener("click", function() {
    moveToNextSlide();
});

document.getElementById('prevBtn').addEventListener("click", function() {
    moveToPrevSlide();
});

const updateSlidePosition = () => {
    for (let slide of slides) {
        slide.classList.remove('active');
        slide.classList.add('hidden');
    }
    slides[slidePosition].classList.add('active');
}

const moveToPrevSlide = () => {
    updateSlidePosition();
    slidePosition === 0 ? slidePosition = totalSlides - 1 : slidePosition--;
}

function moveToNextSlide() {
    updateSlidePosition();
    slidePosition === totalSlides - 1 ? slidePosition = 0 : slidePosition++;
}