const iconoMenu = document.querySelector('.icono-menu');
const nav = document.querySelector('.burger');


iconoMenu.addEventListener('click', function() {
  
    nav.classList.toggle("show-menu");
    nav.classList.toggle("menu-animation");
});

