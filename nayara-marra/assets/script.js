function defineImagem() {
  var settings = {
    imagemInicial: function() {
      elemento = document.querySelector("#carrossel a:first-child");
      elemento.classList.add("ativo");
    },
    slide: function() {
      elemento = document.querySelector(".ativo");
      if (elemento.nextElementSibling) {
        elemento.nextElementSibling.classList.add("ativo");
        elemento.classList.remove("ativo");
      } else {
        elemento.classList.remove("ativo");
        settings.imagemInicial();
      }
    },
    proximo: function() {
      clearInterval(intervalo);
      elemento = document.querySelector(".ativo");
      if (elemento.nextElementSibling) {
        elemento.nextElementSibling.classList.add("ativo");
        elemento.classList.remove("ativo");
      } else {
        elemento.classList.remove("ativo");
        settings.imagemInicial();
      }
      intervalo = setInterval(settings.slide, 4000);
    },
    anterior: function() {
      clearInterval(intervalo);
      elemento = document.querySelector(".ativo");
      if (elemento.previousElementSibling) {
        elemento.previousElementSibling.classList.add("ativo");
        elemento.classList.remove("ativo");
      } else {
        elemento.classList.remove("ativo");
        elemento = document.querySelector("#carrossel a:last-child");
        elemento.classList.add("ativo");
      }
    }
  };
  settings.imagemInicial();
  var intervalo = setInterval(settings.slide, 4000);
  document
    .querySelector(".proximo")
    .addEventListener("click", settings.proximo, false);
  document
    .querySelector(".anterior")
    .addEventListener("click", settings.anterior, false);
}
window.addEventListener("load", defineImagem, false);
