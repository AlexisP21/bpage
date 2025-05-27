// Animaciones al hacer scroll
const secciones = document.querySelectorAll("section");

const mostrarElemento = (entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add("animado");
    }
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(mostrarElemento);
}, {
    threshold: 0.2,
});

secciones.forEach(sec => {
    observer.observe(sec);
});
