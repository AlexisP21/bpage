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
    threshold: 0.1,
});

secciones.forEach(sec => {
    observer.observe(sec);
});

// Función que redirige al HTML del idioma seleccionado
const dropdown = document.querySelector('.language-dropdown');
const toggleBtn = document.querySelector('.dropdown-toggle');

toggleBtn.addEventListener('click', () => {
  dropdown.classList.toggle('open');
});

// Cierra el menú si se hace clic fuera
document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
  }
});

