// === NAVBAR SCROLL BEHAVIOR ===
let prevScroll = window.pageYOffset;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;
  if (prevScroll > currentScroll) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-80px";
  }
  prevScroll = currentScroll;
});

// === NAVBAR MUNCUL SAAT KURSOR KE ATAS ===
document.addEventListener("mousemove", function (e) {
  if (e.clientY < 50) {
    navbar.style.top = "0";
  }
});

// === HAMBURGER MENU ===
const toggle = document.getElementById("menutoggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
  toggle.textContent = nav.classList.contains("show") ? "✖" : "☰";
});

// Tutup menu otomatis saat link diklik
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
    toggle.textContent = "☰";
  });
});

// Tutup menu kalau discroll
window.addEventListener("scroll", () => {
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
    toggle.textContent = "☰";
  }
});

// === SMOOTH SCROLL KE BAGIAN DALAM HALAMAN ===
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// === ANIMASI MUNCUL SAAT SCROLL (elemen umum) ===
function animateOnScroll() {
  const elements = document.querySelectorAll(
    ".Card, .Profile, .Aboutme, .Project, .penjelasan-HTML, .web, .poy-container, .Contact"
  );

  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < triggerBottom) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

// === ANIMASI UNTUK KESAN & PESAN (exp-card) ===
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".exp-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));
});

// === ANIMASI UNTUK TABEL JADWAL ===
document.addEventListener("DOMContentLoaded", () => {
  const tableWrapper = document.querySelector(".table-wrapper");

  if (!tableWrapper) return;

  const tableObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  tableObserver.observe(tableWrapper);
});

// === DROPDOWN EXPAND UNTUK MOBILE ===
const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    e.preventDefault();
    dropdown.classList.toggle("active");
  }
});
