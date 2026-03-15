(function (d, w, n) {
  console.log("🦊 Hola soy tu amigo Digital... Gustavo Torres 🦊");

  //Agregando atributos a enlaces externos en artículos de blog
  if (d.querySelector(".post-content")) {
    d.querySelectorAll('.post-content a[href^="http"]').forEach((el) => {
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
  }

  //Para que funcionen los enlaces de regresar en artículos de blog
  if (d.getElementById("temas")) {
    const mq = window.matchMedia("(min-width: 62em)");
    mq.addEventListener("change", mqHandler);

    function mqHandler(e) {
      if (e.matches) {
        d.querySelectorAll('a[href="#temas"').forEach((el) => {
          el.setAttribute("href", "#");
        });
      } else {
        d.querySelectorAll('a[href="#"').forEach((el) => {
          el.setAttribute("href", "#temas");
        });
      }
    }

    mqHandler(mq);
  }

  //Registro de SW sólo en producción
  if (location.host === "http://127.0.0.1:5500") {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./assets/sw.js");
    }
  }
})(document, window, navigator);

