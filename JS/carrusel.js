document.addEventListener("DOMContentLoaded", () => {
  const carruselLista = document.querySelector(".carrusel-lista");
  const carruselItems = document.querySelectorAll(".carrusel-item");
  const btnAnterior = document.querySelector(".anterior");
  const btnSiguiente = document.querySelector(".despues");

  let index = 0;
  const totalItems = carruselItems.length;

  const scrollToIndex = (i) => {
    carruselLista.scrollTo({
      left: carruselItems[i].offsetLeft,
      behavior: "smooth"
    });
  };

  btnSiguiente.addEventListener("click", () => {
    index = (index + 1) % totalItems;
    scrollToIndex(index);
  });

  btnAnterior.addEventListener("click", () => {
    index = (index - 1 + totalItems) % totalItems;
    scrollToIndex(index);
  });

  // Auto-slide
  const autoSlide = setInterval(() => {
    index = (index + 1) % totalItems;
    scrollToIndex(index);
  }, 5000); // cada 5 segundos

  // (Opcional) Detener auto-slide si el usuario toca o pasa el mouse
  carruselLista.addEventListener("touchstart", () => clearInterval(autoSlide));
  carruselLista.addEventListener("mouseenter", () => clearInterval(autoSlide));
});