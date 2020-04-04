var searchBar = document.getElementById("searchBarHeader");
var userButton = document.getElementById("userLogo");
var likesButton = document.getElementById("userLikes");
var menuLikes = document.getElementById("likesMenu");
var menuProfile = document.getElementById("profileMenu");

searchBar.addEventListener("focus", showSearchBar);
searchBar.addEventListener("blur", quitAnimationSearchBar);
likesButton.addEventListener("click", showLikes);
userButton.addEventListener("click", showMenu);

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
  if (menuProfile.classList.contains("toggle-menu")) {
    menuProfile.classList.remove("toggle-menu");
  }
}

function showMenu(ev) {
  console.log(ev);
  debugger
  menuProfile.classList.toggle("toggle-menu");
  if (menuLikes.classList.contains("toggle-menu")) {
    menuLikes.classList.remove("toggle-menu");
  }
}
