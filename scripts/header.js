var searchBar = document.getElementById("searchBarHeader");
var likesButton = document.getElementById("userLikes");
var userButton = document.getElementById("userLogo");
var menuLikes = document.getElementById("likesMenu");
var menuProfile = document.getElementById("profileMenu"); //modal
var modalBgProfile = document.getElementById("modalHeader")

// Animación search bar
searchBar.addEventListener("focus", showSearchBar);
searchBar.addEventListener("blur", quitAnimationSearchBar);
// Interacción iconos del menú
likesButton.addEventListener("click", showLikes);
userButton.addEventListener("click", showMenu);
modalBgProfile.addEventListener("click", removeModalAndMenu)
//Animación de la barra de navegación
function showSearchBar(ev) {
  if (!searchBar.classList.contains("nav__search-bar--active ")) {
    searchBar.classList.remove("nav__search-bar--remove");
    searchBar.classList.add("nav__search-bar--active");
  }
}

function quitAnimationSearchBar(ev) {
  searchBar.classList.add("nav__search-bar--remove");
}

//Muestra los menús.. de likes y de las preferencias usuario
function showLikes(ev) {

  menuLikes.classList.toggle("toggle-menu");

  showModal(modalBgProfile)

  if (menuProfile.classList.contains("toggle-menu")) {
    menuProfile.classList.remove("toggle-menu");
    modalBgProfile.classList.add("modal-header")
  }



}

function showMenu(ev) {
  menuProfile.classList.toggle("toggle-menu");

  showModal(modalBgProfile)

  if (menuLikes.classList.contains("toggle-menu")) {
    menuLikes.classList.remove("toggle-menu");
    modalBgProfile.classList.add("modal-header")

  }
}

function showModal(modal) {
  if (!modal.classList.contains("modal-header")) {
    modal.classList.add("modal-header")
  } else {
    modal.classList.remove("modal-header");

  }
}

function removeModalAndMenu(ev) {
  menuLikes.classList.remove("toggle-menu")
  menuProfile.classList.remove("toggle-menu")
  modalBgProfile.classList.remove("modal-header")

}