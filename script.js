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

document.addEventListener("mousemove", function (e) {
  if (e.clientY < 50) {
    navbar.style.top = "0";
  }
});

const toggle = document.getElementById("menutoggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
  toggle.textContent = nav.classList.contains("show") ? "✖" : "☰";
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
    toggle.textContent = "☰";
  });
});

window.addEventListener("scroll", () => {
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
    toggle.textContent = "☰";
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

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
