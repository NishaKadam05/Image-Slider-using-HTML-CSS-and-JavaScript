document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;
    const totalSlides = slide.length;

    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }

        const translateXValue = -currentIndex * 100;
        slides.style.transform = `translateX(${translateXValue}%)`;
    }

    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    // Optional: Auto-slide
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);
});
