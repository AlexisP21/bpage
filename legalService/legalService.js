// Función para actualizar el logo según la posición del scroll
function actualizarLogo() {
  const header = document.getElementById("main-header");
  const logo = document.getElementById("logo");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 160) {
    header.classList.add("scrolled");
    logo.src = "../static/img/legalService/2-removebg-preview.png";
  } else {
    header.classList.remove("scrolled");
    logo.src = "../static/img/legalService/1-removebg-preview.png";
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
    hero_text: "Defendemos tus derechos con ética, experiencia y compromiso.",
    title_lawyer_info: "Servicios Jurídicos",
    text_lawyer_info: "Brindamos asesoría legal en las principales áreas del Derecho: civil, laboral, comercial y más. Nos enfocamos en ofrecer soluciones prácticas y a la medida de nuestros clientes.",
    services_1: "Tributario",
    services_2: "Gestión fiscal internacional",
    services_3: "Derecho Mercantil Y Societario",
    services_4: "Derecho Procesal",
    services_5: "Derecho Inmobiliario Y Registral",
    services_6: "Arbitraje",
    services_7: "Derecho De Familia Y Sucesiones",
    services_8: "Derecho Administrativo",
    services_9: "Derecho Laboral Y De Seguridad Social",
    services_10: "Derecho Penal",
    services_11: "Derecho Civil",
    text_dossier: "Para más información revise el siguiente PDF:",
    dossier_buttom: "Dossier Completo",
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
    hero_text: "We defend your rights with ethics, experience, and commitment.",
    title_lawyer_info: "Legal Services",
    text_lawyer_info: "We provide legal advice in the main areas of law: civil, labor, commercial, and more. We focus on offering practical solutions tailored to our client's needs.",
    services_1: "Tributary",
    services_2: "International Tax Management",
    services_3: "Commercial and Corporate Law",
    services_4: "Procedural Law",
    services_5: "Real Estate and Registry Law",
    services_6: "Arbitration",
    services_7: "Family Law and Inheritance",
    services_8: "Administrative Law",
    services_9: "Labor Law and Social Security Law",
    services_10: "Criminal Law",
    services_11: "Civil Law",
    text_dossier: "For more information, check out this PDF:",
    dossier_buttom: "Complete Dossier",
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
  setWhatsAppMessage(lang);
  setDossierLink(lang);

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
function setWhatsAppMessage(lang) {
  const whatsappBtn = document.getElementById("whatsapp-btn");

  if (!whatsappBtn) return;

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

//Dossier dependiendo del idioma
function setDossierLink(lang) {
  const dossierBtn = document.getElementById("dossierBtn");
  if (!dossierBtn) return;

  const dossiers = {
    es: "../static/document/Dossier Corporativo Legal.pdf",
    en: "../static/document/Dossier Corporativo Legal Inglés.pdf"
  };

  dossierBtn.href = dossiers[lang] || dossiers.es;
}

// Ejecutar al cargar


