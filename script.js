const contact = {
  phoneDisplay: "+56 9 9722 5612",
  phoneHref: "+56997225612",
  email: "contacto@plansaludinteligente.cl",
  whatsappMessage:
    "Hola, quiero recibir asesoria sobre Isapres y planes de salud.",
  socials: {
    instagram: "https://www.instagram.com/plansaludinteligente/",
    facebook: "https://www.facebook.com/plansaludinteligente/",
    linkedin: "https://www.linkedin.com/company/plansaludinteligente/",
  },
};

const contactLinks = {
  whatsapp: `https://wa.me/${contact.phoneHref.replace("+", "")}?text=${encodeURIComponent(contact.whatsappMessage)}`,
  phone: `tel:${contact.phoneHref}`,
  email: `mailto:${contact.email}?subject=${encodeURIComponent("Asesoria Plan Salud Inteligente")}`,
};

document.querySelectorAll("[data-contact]").forEach((link) => {
  const channel = link.dataset.contact;
  link.href = contactLinks[channel] || "#contacto";
});

document.querySelectorAll("[data-social]").forEach((link) => {
  const channel = link.dataset.social;
  link.href = contact.socials[channel] || "#contacto";
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

document.querySelectorAll("[data-label='phone'], [data-label='whatsapp']").forEach((label) => {
  label.textContent = contact.phoneDisplay;
});

document.querySelectorAll("[data-label='email']").forEach((label) => {
  label.textContent = contact.email;
});

window.addEventListener("load", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
