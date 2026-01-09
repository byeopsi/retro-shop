const products = [
  {
    id: 'item-1',
    category: 'cloth',
    name: 'shirts',
    price: 14000,
    src: './assets/img/2.jpg'
  },
  {
    id: 'item-2',
    category: 'cloth',
    name: 'jacket',
    price: 23000,
    src: './assets/img/1.jpg'
  },
  {
    id: 'item-3',
    category: 'socks',
    name: 'socks',
    price: 8000,
    src: './assets/img/3.jpg'
  },
  {
    id: 'item-4',
    category: 'shoes',
    name: 'shoes',
    price: 32000,
    src: './assets/img/4.jpg'
  },
]

const productsDiv = document.querySelector('.products');
products.map(
  (product) => {
    const row = document.createElement('div');
    row.classList.add('item');
    row.id = product.id;
    row.innerHTML = `
      <img class="desc" src="${product.src}" />
      <h3 class="desc">${product.name}</h3>
      <h4 class="desc">${product.price}원</h4>
      <div>
        <span class="desc">❤️</span>
        <span class="cart">🛒</span>
      </div>
    `;
    productsDiv.append(row);
  }
)

document.addEventListener('click', (e) => {
  let item = e.target.closest('.item');
  let itemId = item.id;
  let product = products.find((product) => product.id === itemId);
  let itemData = product ? {
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1,
    src: product.src
  } : null;

  // 장바구니에 추가
  if(e.target.classList.contains('cart')){
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cartData.find(
      (item) => item.id === itemData.id
    )

    if(existingItem) existingItem.quantity += 1;
    else cartData.push(itemData);

    localStorage.setItem("cart", JSON.stringify(cartData));
    alert("상품이 장바구니에 추가되었습니다.");
  }
  // 상품 상세페이지 이동
  else {
    sessionStorage.setItem('selectedProduct', JSON.stringify(itemData)); // 세션 스토리지 활용
    window.location.href="./product.html";
  }
})
