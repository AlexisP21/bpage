// Mostrar mensaje de envío
document.getElementById('formulario-contacto').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('mensaje-enviado').classList.remove('oculto');
    this.reset();
});

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

// Menú hamburguesa toggle
document.getElementById('menu-icon').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('show');
});

// Script para el modal de equipo
document.addEventListener("DOMContentLoaded", function () {
    const personas = document.querySelectorAll(".miembro-equipo");
    const modal = document.getElementById("modal-equipo");
    const modalImg = document.getElementById("modal-img");
    const modalTexto = document.getElementById("modal-texto");
    const modalCerrar = document.querySelector(".modal-cerrar");

    const frases = {
        "persona1.webp": "Líder de proyectos, organizando ideas y resultados.",
        "persona2.jpeg": "Diseñadora UX, haciendo que todo sea visualmente increíble.",
        "persona3.jpg": "Desarrollador web, construyendo soluciones digitales."
    };

    personas.forEach(persona => {
        persona.addEventListener("click", function () {
            const img = this.querySelector("img");
            const src = img.getAttribute("src");
            const nombreArchivo = src.split("/").pop();
            modalImg.setAttribute("src", src);
            modalTexto.textContent = frases[nombreArchivo] || "Miembro del equipo.";
            modal.style.display = "flex";
        });
    });

    modalCerrar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const miembros = document.querySelectorAll(".miembro-equipo");
    miembros.forEach(miembro => {
        miembro.addEventListener("click", function () {
            this.classList.toggle("expandido");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const miembros = document.querySelectorAll(".miembro-equipo");
    const modal = document.getElementById("modal-miembro");
    const modalImg = document.getElementById("modal-imagen");
    const modalFrase = document.getElementById("modal-frase");
    const cerrar = document.querySelector(".cerrar");

    const frases = {
        "persona1.webp": "Líder de proyectos, organizando ideas y resultados.",
        "persona2.jpeg": "Diseñador UX, haciendo que todo sea visualmente increíble.",
        "persona3.jpg": "Desarrollador web, construyendo soluciones digitales."
    };

    miembros.forEach(miembro => {
        miembro.addEventListener("click", function () {
            const img = miembro.querySelector("img");
            if (img) {
                const src = img.getAttribute("src");
                modalImg.setAttribute("src", src);
                const nombre = src.split("/").pop();
                modalFrase.textContent = frases[nombre] || "Miembro del equipo";
                modal.style.display = "block";
            }
        });
    });

    cerrar.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) modal.style.display = "none";
    });
});
