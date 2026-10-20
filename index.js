function getYear() {
    const year = new Date().getFullYear()
    document.getElementById('current-year').textContent = " " + year
}

getYear()

window.addEventListener('load', function () {
    setTimeout(function () {
        const intro = document.getElementById('intro-screen');
        console.log(intro);
        intro.style.opacity = '0'; // Lässt den Bildschirm sanft ausblenden
        setTimeout(function () {
            intro.style.display = 'none'; // Entfernt ihn komplett
        }, 1000); // Wartet 1 Sekunde für den Ausblend-Effekt
    }, 4000); // 2000 Millisekunden = 2 Sekunden
});
