//MENU
let menu = document.querySelector("#menu");
let toggleIicon = document.querySelector("#toggle-icon");
let closeMenu = document.querySelector('#close');

toggleIicon.addEventListener("click", function() {
  menu.classList.toggle("menu-on");
});

closeMenu.addEventListener('click', function(){
  menu.classList.toggle("menu-on");
});


