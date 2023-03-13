const toggleMenu = document.querySelector(".fa-bars");
const navbarMenu = document.querySelector(".navbar-menu");
const contact = document.querySelector(".contact");
const navbarIcons = document.querySelector(".navbar-links");

toggleMenu.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-links");
  navbarIcons.classList.remove("show-icons");
});

contact.addEventListener("click", () => {
  navbarIcons.classList.toggle("show-icons");
});
