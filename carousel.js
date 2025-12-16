document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const dots = document.querySelectorAll('.carousel-indicator');
    let currentIndex = 0;

    function updateSlide(index) {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${slideWidth * index}px)`;
        slides.forEach((slide, i) => slide.setAttribute('aria-hidden', i !== index));
        dots.forEach((dot, i) => dot.classList.toggle('current-slide', i === index));
        currentIndex = index;
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => updateSlide(i));
    });

    setInterval(() => {
        let nextIndex = (currentIndex + 1) % slides.length;
        updateSlide(nextIndex);
    }, 5000);
});
