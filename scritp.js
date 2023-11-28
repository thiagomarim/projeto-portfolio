const menuMobile = document.querySelector('.menu-hamburguer');
const menuItems = document.querySelector('.header-menu-items');
const eventos = ['click', 'touchstart'];

function toggleMenu() {
  menuMobile.classList.toggle('ativo');
  menuItems.classList.toggle('ativo');
}

eventos.forEach(evento => menuMobile.addEventListener(evento, toggleMenu));
