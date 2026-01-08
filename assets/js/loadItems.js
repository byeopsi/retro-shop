fetch("./items.html")
.then((res) => res.text())
.then((html) => {
  document.querySelector('.row').innerHTML = html;
  initItems();
});

const initItems = () => {
  // 상품 상세페이지 이동 스크립트
  const showItem = (e) => {
    window.location.href="./product.html";
  }
  const items = document.querySelectorAll('.desc');
  items.forEach((item) => item.addEventListener('click', showItem));
}

document.addEventListener('click', (e) => {
  if(e.target.classList.contains('cart')){
    const item = e.target.closest('.item');

    const itemData =
    {
      id: item.dataset.id,
      name: item.dataset.name,
      price: item.dataset.price,
      quantity: 1,
      src: item.dataset.src
    }

    let cartData = JSON.parse(localStorage.getItem("cart")) || [];
    cartData.push(itemData);
    localStorage.setItem("cart", JSON.stringify(cartData));
    alert("상품이 장바구니에 추가되었습니다.");
  }
})
