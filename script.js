const toggleButton = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
});

let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const offset = -currentSlide * 100;

    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

// Scroll suave ao clicar no menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
