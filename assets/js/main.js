//SHOW MENU
const showMenu = (toggleId, navbarId, bodyId) => {
  const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId);

  if (toggle && navbar) {
    toggle.addEventListener("click", () => {
      navbar.classList.toggle("show");
      toggle.classList.toggle("rotate");
      bodypadding.classList.toggle("expander");
    });
  }
};
showMenu("nav-toggle", "navbar", "body");

// Link Active color
const linkColor = document.querySelectorAll(".nav__link");

function colorLink() {
  linkColor.forEach(L => L.classList.remove("active"));
  this.classList.add("active");
}
linkColor.forEach(L => L.addEventListener("click", colorLink));
