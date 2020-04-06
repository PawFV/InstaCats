const searchBar = document.getElementById("searchBarHeader");
const likesButton = document.getElementById("userLikes");
const userButton = document.getElementById("userLogo");
const menuLikes = document.getElementById("likesMenu");
const menuProfile = document.getElementById("profileMenu"); //modal
const modalBgProfile = document.getElementById("modalHeader");
const iconResponsive = document.getElementById("responsiveIcon")
const menuResponsive = document.getElementById("responsiveMenu")

// Animación search bar
searchBar.addEventListener("focus", showSearchBar);
searchBar.addEventListener("blur", quitAnimationSearchBar);
// Interacción iconos del menú
likesButton.addEventListener("click", showLikes);
userButton.addEventListener("click", showMenu);
modalBgProfile.addEventListener("click", removeModalAndMenu)
iconResponsive.addEventListener("click", showResponsiveMenu)

//Animación de la barra de navegación
function showSearchBar(ev) {
  if (!searchBar.classList.contains("nav__search-bar--active ")) {
    searchBar.classList.remove("nav__search-bar--remove");
    searchBar.classList.add("nav__search-bar--active");
  }
}

function quitAnimationSearchBar(ev) {
  searchBar.classList.add("nav__search-bar--remove");
  searchBar.classList.remove("nav__search-bar--active");

}

//Muestra los menús de likes, de las preferencias usuario y versiones móviles
function showLikes(ev) {

  menuLikes.classList.toggle("nav__toggle-menu");

  showModal(modalBgProfile)

  if (menuProfile.classList.contains("nav__toggle-menu")) {
    menuProfile.classList.remove("nav__toggle-menu");
    modalBgProfile.classList.add("modal-header")
  }
}

function showMenu(ev) {
  menuProfile.classList.toggle("nav__toggle-menu");


  showModal(modalBgProfile)

  if (menuLikes.classList.contains("nav__toggle-menu")) {
    menuLikes.classList.remove("nav__toggle-menu");
    modalBgProfile.classList.add("modal-header")

  }
}

function showResponsiveMenu(ev) {

  menuResponsive.classList.toggle("nav__toggle-menu-responsive");

  showModal(modalBgProfile)




}


// Modal que acompaña a los menús
function showModal(modal) {
  if (!modal.classList.contains("modal-header")) {
    modal.classList.add("modal-header")
  } else {
    modal.classList.remove("modal-header");

  }
}

function removeModalAndMenu(ev) {
  menuLikes.classList.remove("nav__toggle-menu")
  menuProfile.classList.remove("nav__toggle-menu")
  menuResponsive.classList.remove("nav__toggle-menu-responsive");
  modalBgProfile.classList.remove("modal-header")

}