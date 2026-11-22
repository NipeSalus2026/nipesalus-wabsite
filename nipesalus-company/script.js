// Namba rasmi ya WhatsApp ya NipeSalus (Tanzania: 255 + namba bila sifuri ya mwanzo).
const WHATSAPP_NUMBER = "255755188687";

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const opened = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(opened));
  menuToggle.setAttribute("aria-label", opened ? "Funga menyu" : "Fungua menyu");
});

document.querySelectorAll(".nav-link, .nav-cta").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const sections = document.querySelectorAll("main section[id]");
const pageLinks = document.querySelectorAll(".nav-link");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      pageLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach((section) => observer.observe(section));

document.getElementById("year").textContent = new Date().getFullYear();

const whatsappLink = document.getElementById("whatsapp-link");
const generalMessage = "Habari NipeSalus Company Limited. Naomba maelezo kuhusu Fresh Mushroom, Dried Mushroom na Mushroom Powder.";
whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(generalMessage)}`;

document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const topic = document.getElementById("topic").value;
  const message = document.getElementById("message").value.trim();
  const text = `Habari NipeSalus Company Limited!\\n\\nJina: ${name}\\nSimu: ${phone}\\nBidhaa/Mada: ${topic}\\nUjumbe: ${message}`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
