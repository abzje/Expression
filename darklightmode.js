(function () {
  const root = document.documentElement;

  /*On place un écoute d'événements au click sur tout les éléments toggler*/
  document.addEventListener("DOMContentLoaded", function () {
    const togglers = document.querySelectorAll("[data-theme-toggler]"); 
    togglers.forEach((toggler) => {
      toggler.addEventListener("click", toggleDarkMode);
    });
  });

  /*Modifie l'état de l'attribut data-theme*/
  function toggleDarkMode() {
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", newTheme);
  }
})();

