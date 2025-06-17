// ------------------------------
// Powerlife Gym – script.js
// Funcionalidades interactivas
// ------------------------------

document.addEventListener("DOMContentLoaded", () => {
  // 1. Animación de entrada (fade-in)
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.3}s`;
    el.classList.add("opacity-0"); // por si falta en el CSS
    el.classList.add("animate-fadeIn");
  });

  // 2. Scroll suave para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 3. Mostrar alerta si el botón de login es clicado (demo)
  const loginBtn = document.querySelector("a[href='login.html']");
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      console.log("Redireccionando a login...");
    });
  }

  // 4. Control de reproducción del video al salir del foco
  const video = document.querySelector("video");
  if (video) {
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        video.pause();
      } else {
        video.play();
      }
    });
  }
});
