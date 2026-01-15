let cartData = [
  {
    id: 1,
    name: "shirt",
    price: 12000,
    quantity: 2,
    src: "./assets/img/2.jpg"
  },
  {
    id: 2,
    name: "jacket",
    price: 15000,
    quantity: 1,
    src: "./assets/img/1.jpg"
  },
]

localStorage.setItem("cart", JSON.stringify(cartData));

const renderCart = () => {
  const rows = document.querySelector('.cart-rows');
  const footer = document.querySelector(".cart-footer");

  rows.innerHTML = "";
  footer.innerHTML = "";

  let totalPrice = 0;

  cartData.forEach((item) => {
    const row = document.createElement('div');
    row.classList.add('cart-row');

    row.innerHTML = `
  <div class="cell">
    <input type="checkbox" data-id="${item.id}">
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

  footer.innerHTML= `<div class="cell">${totalPrice}원</div>`;
};

renderCart();

// 선택된 상품id 배열에 넣기
let selectedItems = new Set();

document.querySelector(".cart-rows").addEventListener("change", (e) => {
  if (e.target.type === "checkbox") {
    const id = Number(e.target.dataset.id);
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

  cartData = cartData.filter(
    item => !selectedItems.has(item.id)
  );

  selectedItems.clear();
  localStorage.setItem("cart", JSON.stringify(cartData));
  renderCart();
};

