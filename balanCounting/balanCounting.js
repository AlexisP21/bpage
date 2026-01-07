// Función para actualizar el logo según la posición del scroll
function actualizarLogo() {
  const header = document.getElementById("main-header");
  const logo = document.getElementById("logo");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 160) {
    header.classList.add("scrolled");
    logo.src = "../static/img/balanCounting/2-removebg-preview.png";
  } else {
    header.classList.remove("scrolled");
    logo.src = "../static/img/balanCounting/3-removebg-preview.png";
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
    hero_text: "Consultores Financieros, Contabilidad Outsourcing & TAX",
    title_info_contability: "¿Por qué elegir nuestros servicios contables?",
    middle_text_contability: "En BALAN SERVICES COUNTING, ofrecemos soluciones contables personalizadas como:",
    info_option_1: "Contabilidad – Outsourcing en nuestras oficinas o fuera de las mismas",
    info_option_2: "Actualización Contabilidades atrasadas",
    info_option_3: "Declaración de Impuestos I.V.A., ICE, Impuesto a la Renta",
    info_option_4: "Elaboración de Anexos ( ATS, REOC, RDEP, Gastos Personales, etc.)",
    info_option_5: "Asesoría en declaraciones patrimoniales",
    info_option_6: "Consultoría e Implementación de Normas Internacionales de Información Financiera (NIIF`s)",
    info_option_7: "Asesoría de Negocios con utilización de herramientas Financieras y Tributarias",
    info_option_8: "Estructuras Financieras Societarias",
    info_option_9: "Peritajes Financieros",
    info_option_10: "Flujos de Efectivo",
    title_benefits: "Páginas en las que trabajamos como contribuyentes",
    benefits_title_1: "Servicio de Rentas Internas",
    benefits_title_2: "Instituto Ecuatoriano de Seguridad Social",
    benefits_title_3: "Ministerio de Relaciones Laborales",
    benefits_title_4: "Municipio de Quito",
    benefits_title_5: "Superintendencia de Compañias",
    benefits_title_6: "Superintendencia de Bancos",
    benefits_text_1: "Llevamos tus cuentas al día con exactitud y claridad.",
    benefits_text_3: "Llevamos tus cuentas al día con exactitud y claridad.",
    benefits_text_2: "Llevamos tus cuentas al día con exactitud y claridad.",
    benefits_text_4: "Llevamos tus cuentas al día con exactitud y claridad.",
    benefits_text_5: "Llevamos tus cuentas al día con exactitud y claridad.",
    benefits_text_6: "Llevamos tus cuentas al día con exactitud y claridad.",
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
    hero_text: "Financial Consultants, Accounting Outsourcing & TAX",
    title_info_contability: "Why choose our accounting services?",
    middle_text_contability: "At BALAN SERVICES COUNTING, we offer customized accounting solutions such as:",
    info_option_1: "Accounting – Outsourcing at our offices or offsite",
    info_option_2: "Update on outstanding accounts",
    info_option_3: "VAT, ICE, Income Tax Returns",
    info_option_4: "Preparation of Annexes (ATS, REOC, RDEP, Personal Expenses, etc.)",
    info_option_5: "Advice on asset declarations",
    info_option_6: "Consulting and Implementation of International Financial Reporting Standards (IFRS)",
    info_option_7: "Business consulting using financial and tax tools",
    info_option_8: "Corporate Financial Structures",
    info_option_9: "Financial Expert Reports",
    info_option_10: "Cash Flows",
    title_benefits: "Pages we work on as contributors",
    benefits_title_1: "Internal Revenue Service",
    benefits_title_2: "Ecuadorian Social Security Institute",
    benefits_title_3: "Ministry of Labor Relations",
    benefits_title_4: "Municipality of Quito",
    benefits_title_5: "Superintendency of Companies",
    benefits_title_6: "Superintendency of Banks",
    benefits_text_1: "We keep your accounts up to date with accuracy and clarity.",
    benefits_text_2: "We keep your accounts up to date with accuracy and clarity.",
    benefits_text_3: "We keep your accounts up to date with accuracy and clarity.",
    benefits_text_4: "We keep your accounts up to date with accuracy and clarity.",
    benefits_text_5: "We keep your accounts up to date with accuracy and clarity.",
    benefits_text_6: "We keep your accounts up to date with accuracy and clarity.",
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
