// 메뉴 이동 스크립트
document.querySelectorAll('.menu').forEach(
  (menu) => {
    const key = menu.id;
    if(key === 'cart'){
      menu.addEventListener('click', () => {window.location.href="./cart.html"})
    } else if (key === 'home'){
      menu.addEventListener('click', () => {window.location.href="./index.html"})
    } else if (key === 'new') {
      menu.addEventListener('click', () => {window.location.href = `./index.html?category=new`;});
    } else {
      menu.addEventListener('click', () => {window.location.href = `./index.html?category=${key}`;});
    }
  }
)
