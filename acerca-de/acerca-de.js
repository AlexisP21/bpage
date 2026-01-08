// Función para actualizar el logo según la posición del scroll
function actualizarLogo() {
  const header = document.getElementById("main-header");
  const logo = document.getElementById("logo");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 160) {
    header.classList.add("scrolled");
    logo.src = "../static/img/logoBalanClaro-removebg-preview.png";
  } else {
    header.classList.remove("scrolled");
    logo.src = "../static/img/logoBalanOscuro-removebg-preview.png";
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
    home: "Inicio",
    services: "Servicios ▼",
    about_us: "Acerca de",
    contact: "Contacto",
    title: "Nuestra Misión, Visión y Valores",
    mision_title: "Misión",
    mision_text: "Ofrecemos soluciones empresariales ágiles y confiables, respaldadas por un equipo experto, íntegro y comprometido con generar valor a nuestros clientes mediante un servicio responsable y personalizado.",
    vision_title: "Visión",
    vision_text: "Ser la firma contable líder en soluciones integrales, reconocida por anticiparnos a las necesidades de nuestros clientes y guiarlos hacia una mejora constante en calidad, productividad y crecimiento sostenible.",
    value_title: "Valores",
    value_text: "Nuestro trabajo se basa en la honestidad, puntualidad, respeto por el ser humano, eficiencia y ética profesional. Estos principios nos guían para ofrecer un servicio íntegro y confiable.",
    footer_company: "Soluciones integrales en contabilidad, finanzas y servicios legales. Comprometidos con tu crecimiento.",
    footer_links_title: "Navegación",
    footer_phone_contact: "Teléfono: +593 99 145 6292",
    footer_location_contact: "Dirección: ​Av. ​República del Salvador 354 y Moscú Edif. ​Piazza Toscana​ Piso ​2. Quito, Ecuador.",
    footer_follow: "Síguenos",
    footer_copy: "Todos los derechos reservados"
  },

  en: {
    home: "Home",
    services: "Services ▼",
    about_us: "About us",
    contact: "Contact",
    title: "Our Mission, Vision and Values",
    mision_title: "Mission",
    mision_text: "We offer agile and reliable business solutions, backed by an expert team that is committed to generating value for our clients through responsible and personalized service.",
    vision_title: "Vision",
    vision_text: "To be the leading accounting firm in comprehensive solutions, recognized for anticipating our clients' needs and guiding them toward constant improvement in quality, productivity, and sustainable growth.",
    value_title: "Values",
    value_text: "Our work is based on honesty, punctuality, respect for human beings, efficiency, and professional ethics. These principles guide us in offering a comprehensive and reliable service.",
    footer_company: "Comprehensive solutions in accounting, finance, and legal services. Committed to your growth.",
    footer_links_title: "Navegation",
    footer_phone_contact: "Phone: +593 99 145 6292",
    footer_location_contact: "Location: ​Av. ​República del Salvador 354 y Moscú Edif. ​Piazza Toscana​ Piso ​2. Quito, Ecuador.",
    footer_follow: "Follow Us",
    footer_copy: "All rights reserved"
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

