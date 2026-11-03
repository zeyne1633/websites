// Kontaktformular-Verarbeitung
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    if(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Vielen Dank für deine Nachricht!.");
            form.reset();
        });
    }
});
