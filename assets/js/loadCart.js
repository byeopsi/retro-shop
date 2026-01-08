let cartData = JSON.parse(localStorage.getItem("cart")) || [];

const renderCart = () => {
  const rows = document.querySelector('.cart-rows');
  const footer = document.querySelector('.cart-footer');

  rows.innerHTML = "";
  footer.innerHTML = "";

  let totalPrice = 0;

  if(cartData.length === 0 || cartData === "[]") {
    const row = document.createElement('div');
    row.classList.add('no-items')
    row.innerHTML = `<span>장바구니가 비었습니다.</span>`;
    rows.append(row);

  } else {
    cartData.forEach((item) => {
      const row = document.createElement('div');
      row.classList.add('cart-row');
      row.setAttribute('data-id', item.id);

      row.innerHTML = `<div class="cell">
        <input type="checkbox">
        </div>
        <div class="cell"><img src="${item.src}"></div>
        <div class="cell">${item.name}</div>
        <div class="cell">${item.price}원</div>
        <div class="cell">${item.quantity}</div>
        <div class="cell">${item.price * item.quantity}원</div>
      `;

      rows.append(row);
      totalPrice += (item.price * item.quantity);
    });
  }

  footer.innerHTML= `<div class="cell">${totalPrice}원</div>`;
};

renderCart();

// 선택된 상품id 배열에 넣기
let selectedItems = new Set();

document.querySelector(".cart-rows").addEventListener("change", (e) => {
  if (e.target.type === "checkbox") {
    const item = e.target.closest('.cart-row');
    const id = item.dataset.id;
    e.target.checked
      ? selectedItems.add(id)
      : selectedItems.delete(id);
  }
});

// 선택삭제
const deleteItem = () => {
  if (selectedItems.size === 0) {
    alert("선택된 상품이 없습니다.");
    return;
  }

  const removeSet = new Set(selectedItems);
  cartData = cartData.filter((item) => !removeSet.has(item.id));
  selectedItems.clear();
  localStorage.setItem("cart", JSON.stringify(cartData));
  renderCart();
};

const deleteAllItem = () => {
  if(confirm("장바구니를 비우시겠습니까?")){
    cartData = "[]";
    localStorage.setItem("cart", cartData);
    selectedItems = [];
    renderCart();
  }
}
