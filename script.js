let prevScroll = window.pageYOffset;
const navbar = document.getElementById("Navbar");

window.onscroll = function () {
  let currentScroll = window.pageYOffset;
  if (prevScroll > currentScroll) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-80px";
  }
  prevScroll = currentScroll;
};

document.addEventListener("mousemove", function (e) {
  if (e.clientY < 50) {
    navbar.style.top = "0";
  }
});
