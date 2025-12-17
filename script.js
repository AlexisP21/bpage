// Función para actualizar el logo según la posición del scroll
function actualizarLogo() {
  const header = document.getElementById("main-header");
  const logo = document.getElementById("logo");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 160) {
    header.classList.add("scrolled");
    logo.src = "./static/img/logoBalanClaro-removebg-preview.png";
  } else {
    header.classList.remove("scrolled");
    logo.src = "./static/img/logoBalanOscuro-removebg-preview.png";
  }
}

// Ejecutar al hacer scroll
window.addEventListener("scroll", actualizarLogo);

// Ejecutar también al cargar la página
window.addEventListener("DOMContentLoaded", actualizarLogo);

// Animación al hacer scroll
window.addEventListener('scroll', () => {
  const areas = document.querySelectorAll('.area');
  const triggerBottom = window.innerHeight * 0.85;

  areas.forEach(area => {
    const areaTop = area.getBoundingClientRect().top;
    if (areaTop < triggerBottom) {
      area.classList.add('visible');
    }
  });
});

// --- Menú hamburguesa ---
const hamburger = document.getElementById('hamburger');
const menuMobile = document.getElementById('menuMobile');

hamburger.addEventListener('click', () => {
  menuMobile.classList.toggle('active');
});




// ----- Popup Minimizar -----
const popup = document.getElementById("popup-container");
const minimizedBtn = document.getElementById("minimized-btn");
const closePopup = document.getElementById("closeBtn");

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
  minimizedBtn.style.display = "flex";
});

minimizedBtn.addEventListener("click", () => {
  popup.style.display = "flex";
  minimizedBtn.style.display = "none";
});

// ----- RELOJ 24 HORAS -----
function startCountdown(duration, displayMain, displayMini) {
  let timer = duration;

  setInterval(() => {
    let hours = String(Math.floor(timer / 3600)).padStart(2, "0");
    let minutes = String(Math.floor((timer % 3600) / 60)).padStart(2, "0");
    let seconds = String(timer % 60).padStart(2, "0");

    displayMain.textContent = `${hours}:${minutes}:${seconds}`;
    displayMini.textContent = `${hours}:${minutes}:${seconds}`;

    if (--timer < 0) timer = 0;
  }, 1000);
}

window.onload = () => {
  const countdownMain = document.getElementById("countdown");
  const countdownMini = document.getElementById("mini-countdown");

  const duration = 24 * 60 * 60; // 24 horas en segundos

  startCountdown(duration, countdownMain, countdownMini);
};



