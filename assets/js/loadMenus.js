// 메뉴 이동 스크립트
const menus = document.querySelectorAll('.menu:not(.cart)');
menus.forEach((menu) => menu.addEventListener('click', () => window.location.href="./index.html"));
const cartMenu = document.querySelector('.cart');
cartMenu.addEventListener('click', () => {window.location.href="./cart.html"});
