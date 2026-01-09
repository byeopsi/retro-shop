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

const sortByDefault = (products) => [...products];
const sortByReverse = (products) => [...products].reverse();

// 상품 렌더링
const productsDiv = document.querySelector('.products');
const renderItems = (products) => {
  if(!productsDiv) return;
  productsDiv.innerHTML = "";

    products.forEach(
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
}

// 쿼리스트링에서 category 파라미터 읽기
function getCategoryFromQuery() {
  const params = new URLSearchParams(window.location.search);
  return params.get('category');
}

const category = getCategoryFromQuery();
let filteredProducts = products;
if (category) {
  if (category === 'new') {
    filteredProducts = [...products].reverse();
  } else {
    filteredProducts = products.filter(p => p.category === category);
  }
}
renderItems(filteredProducts);

let currentCategory = "home";
// 카테고리 필터링
document.addEventListener('click', (e) => {
  const menu = e.target.closest('.menu');
  if (!menu) return;

  const category = menu.id;

  if (category === 'home') {
    filteredProducts = sortByDefault(products);
  } else if (category === 'new') {
    filteredProducts = sortByReverse(products);
  } else {
    filteredProducts = products.filter(p => p.category === category);
  }

  renderItems(filteredProducts);
})

document.addEventListener('click', (e) => {
  // 카트에 담기
  const cartBtn = e.target.closest('.cart');
  if(cartBtn){
    const item = cartBtn.closest('.item');
    if (!item) return;

    const itemId = item.id;
    const product = products.find((p) => p.id === itemId);
    if(!product) return;

    let cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cartData.find((item) => item.id === product.id)

    if (existingItem) { existingItem.quantity += 1; }
    else {
      cartData.push({
        ...product,
        quantity: 1
      });
    }

    localStorage.setItem("cart", JSON.stringify(cartData));
    alert("상품이 장바구니에 추가되었습니다.");
    return;
  }

  // 상품 상세페이지 이동
  const item = e.target.closest('.item');
  if(!item) return;
  const itemId = item.id;
  let product = products.find(p => p.id === itemId);
  product = {...product, quantity: 1};
  if (!product) return;

  sessionStorage.setItem('selectedProduct', JSON.stringify(product)); // 세션 스토리지 활용
  window.location.href="./product.html";
})
