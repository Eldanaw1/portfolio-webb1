// Bildspel funktionalitet
const slides = [
    {src: "images/care-work.webp", caption: "Vård och omvårdnad"},
    {src: "images/customer-service.webp", caption: "Kundservice och försäljning"},
    {src: "images/education.webp", caption: "Utbildning och kompetensutveckling"},
    {src: "images/skills.webp", caption: "Personliga och praktiska färdigheter"}
];

let currentSlide = 0;
const slideImg = document.getElementById('slide');
const slideCaption = document.getElementById('slide-caption');

function updateSlide() {
    slideImg.src = slides[currentSlide].src;
    slideCaption.textContent = slides[currentSlide].caption;
}

// Nästa bild
document.getElementById('next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
});

// Föregående bild
document.getElementById('prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
});

// Automatiskt bildbyte (valfritt)
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
}, 5000);

// Mobilmeny toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Stäng mobilmeny när man klickar på länk
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll för navigationslänkar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
