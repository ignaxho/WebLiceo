// Interacciones de la barra de navegación
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".topnav");

  if (navbar) {
    // Ejemplo: Cambiar estilo al hacer scroll
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }
});
