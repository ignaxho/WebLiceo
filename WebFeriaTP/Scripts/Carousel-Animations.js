// Configuración específica del carrusel
document.addEventListener("DOMContentLoaded", function () {
  const myCarousel = document.getElementById("miCarrusel");

  if (myCarousel) {
    // Inicialización con opciones específicas
    const carousel = new bootstrap.Carousel(myCarousel, {
      interval: 4000,
      wrap: true,
      pause: "hover",
    });

    // Eventos del carrusel
    myCarousel.addEventListener("slide.bs.carousel", function (event) {
      console.log("Slide cambiando a: ", event.to);
    });
  }
});
