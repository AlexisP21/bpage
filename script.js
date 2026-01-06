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

//Control de idiomas
const langButtons = document.querySelectorAll(".lang-btn");

langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    setLanguage(lang);
  });
});

const translations = {
  es: {
    services: "Servicios ▼",
    about_us: "Acerca de",
    contact: "Contacto",
    hero_text: "Apoyamos tu crecimiento con experiencia legal y financiera.",
    our_company_title: "¿Quiénes Somos?",
    our_company_text: "BALAN SERVICES COUNTING CIA. inició operaciones en mayo del 2000, ofreciendo servicios contables a empresas y personas naturales conforme a las exigencias del Servicio de Rentas Internas (SRI). Su crecimiento sostenido impulsó la conformación de sociedades y alianzas internacionales, consolidándose como BALAN SERVICES CORPORATION. Actualmente, atendemos a más de 180 clientes, incluyendo empresas nacionales e internacionales de alto prestigio como Andes Petroleum, Banco del Pichincha, Diners Club, y Diario La Prensa, entre muchas otras. Nuestra reputación se basa en la calidad, puntualidad y ética profesional de nuestro equipo humano, altamente capacitado y con experiencia nacional e internacional.",
    carrusel_text: "Tu aliado estratégico en servicios contables",
    footer_company: "Soluciones integrales en contabilidad, finanzas y servicios legales. Comprometidos con tu crecimiento.",
    footer_links_title: "Navegación",
    footer_phone_contact: "Teléfono: +593 99 145 6292",
    footer_location_contact: "Dirección: ​Av. ​República del Salvador 354 y Moscú Edif. ​Piazza Toscana​ Piso ​2. Quito, Ecuador.",
    footer_follow: "Síguenos"
  },

  en: {
    services: "Servicies ▼",
    about_us: "About us",
    contact: "Contact",
    hero_text: "We support your growth with legal and financial expertise.",
    our_company_title: "Our Company",
    our_company_text: "BALAN SERVICES COUNTING CIA. began operations in May 2000, offering accounting services to companies and individuals in accordance with the requirements of the Internal Revenue Service (SRI). Its sustained growth led to the formation of international partnerships and alliances, consolidating its position as BALAN SERVICES CORPORATION. We currently serve more than 180 clients, including prestigious national and international companies such as Andes Petroleum, Banco del Pichincha, Diners Club, and Diario La Prensa, among many others. Our reputation is based on the quality, punctuality, and professional ethics of our highly trained team with both national and international experience.",
    carrusel_text: "Your strategic partner in accounting services",
    footer_company: "Comprehensive solutions in accounting, finance, and legal services. Committed to your growth.",
    footer_links_title: "Navegation",
    footer_phone_contact: "Phone: +593 99 145 6292",
    footer_location_contact: "Location: ​Av. ​República del Salvador 354 y Moscú Edif. ​Piazza Toscana​ Piso ​2. Quito, Ecuador.",
    footer_follow: "Follow Us"
  }
};

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Guardar idioma seleccionado
  localStorage.setItem("lang", lang);

  //Cambia el mensaje de whatsapp
  setWhatsAppMessage();

  // Botón activo
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang");

  if (savedLang) {
    // El usuario ya eligió idioma
    setLanguage(savedLang);
  } else {
    // Detectar idioma del navegador
    const browserLang = getBrowserLanguage();
    setLanguage(browserLang);
  }
});


function getBrowserLanguage() {
  const lang = navigator.language || navigator.userLanguage;
  return lang.startsWith("en") ? "en" : "es";
}


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

//ENVIAR INFORMACIÓN FORMULARIO
const form = document.getElementById("contactForm");
const status = document.getElementById("form-status");
const btnText = document.getElementById("btn-text");
const btnLoader = document.getElementById("btn-loader");
const btnEnviar = form.querySelector(".btn-enviar");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  //Cargando
  status.textContent = "";
  btnEnviar.disabled = true;
  btnText.style.display = "none";
  btnLoader.style.display = "inline-block";

  emailjs.send("service_aaqqdvc", "template_yrz0j7f", {
    name: document.getElementById("name").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  })
    .then(() => {
      status.textContent = "✅ Mensaje enviado correctamente. Te contactaremos pronto.";
      status.className = "form-status success";
      form.reset();
    })
    .catch(() => {
      status.textContent = "❌ Error al enviar el mensaje. Inténtalo nuevamente.";
      status.className = "form-status error";
    })
    .finally(() => {
      btnEnviar.disabled = false;
      btnText.style.display = "inline";
      btnLoader.style.display = "none";
    });
});

//Mensaje de Whatsapp dependiendo del idioma
  function setWhatsAppMessage() {
    const whatsappBtn = document.getElementById("whatsapp-btn");

    if (!whatsappBtn) return;

    // Idioma actual (usa el mismo criterio que ya tienes)
    const lang = localStorage.getItem("lang") || navigator.language.slice(0, 2);

    // Mensajes
    const messages = {
      es: "¡Hola 👋! Estoy muy interesado en sus servicios y me encantaría recibir más información 📄. ¿Podrían ayudarme por favor 😊?",
      en: "Hello 👋! I am very interested in your services and I would love to receive more information 📄. Could you please help me? 😊"
    };

    // Mensaje según idioma (fallback a español)
    const message = messages[lang] || messages.es;

    // Codificar mensaje
    const encodedMessage = encodeURIComponent(message);

    // Construir URL final
    whatsappBtn.href = `https://wa.me/593990713232?text=${encodedMessage}`;
  }

  // Ejecutar al cargar
  document.addEventListener("DOMContentLoaded", setWhatsAppMessage);
