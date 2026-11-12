// function getYear() {
//     const year = new Date().getFullYear()
//     document.getElementById('current-year').textContent = " " + year
// }

// getYear()

// window.addEventListener('load', function () {
//     setTimeout(function () {
//         const intro = document.getElementById('intro-screen');
//         console.log(intro);
//         intro.style.opacity = '0'; // Lässt den Bildschirm sanft ausblenden
//         setTimeout(function () {
//             intro.style.display = 'none'; // Entfernt ihn komplett
//         }, 1000); // Wartet 1 Sekunde für den Ausblend-Effekt
//     }, 4000); // 2000 Millisekunden = 2 Sekunden
// });

let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides[currentSlide].classList.add("active");
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Erste Box anzeigen
showSlide(currentSlide);