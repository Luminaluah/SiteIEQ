// Produtos simulados
const products = [
  { id: 1, name: "Camisa Neon", category: "roupas", price: 59.90, stock: 10, image: "Produtos/Produto A - camisa.jpeg" },
  { id: 2, name: "Headset Gamer", category: "eletronicos", price: 299.90, stock: 5, image: "Produtos/Produto A - camisa.jpeg" },
  { id: 3, name: "Livro de Programação", category: "livros", price: 89.90, stock: 7, image: "Produtos/Produto A - camisa.jpeg" },
  // Adicione mais produtos se quiser!
];

// Variáveis
let currentPage = 1;
const itemsPerPage = 6;
let filteredProducts = [...products];
let cart = [];

// Elementos
const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search');
const sortSelect = document.getElementById('sort');
const pageInfo = document.getElementById('page-info');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');
const cartItems = document.getElementById('cart-items');
const total = document.getElementById('total');
const cartCount = document.getElementById('cart-count');
const cartIcon = document.getElementById('cart');
const cartClose = document.getElementById('cart-close');
const cartContent = document.getElementById('cart-content');

// Funções
function renderProducts() {
  productList.innerHTML = '';
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageProducts = filteredProducts.slice(start, end);

  pageProducts.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}">
      <h3>${prod.name}</h3>
      <p>R$${prod.price.toFixed(2)}</p>
      <p>Estoque: ${prod.stock}</p>
      <button onclick="addToCart(${prod.id})">Adicionar ao carrinho</button>
    `;
    productList.appendChild(card);
  });

  pageInfo.textContent = `Página ${currentPage} de ${Math.ceil(filteredProducts.length / itemsPerPage)}`;
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (product.stock > 0) {
    product.stock--;
    cart.push(product);
    updateCart();
    renderProducts();
  } else {
    alert('Produto esgotado!');
  }
}

function updateCart() {
  cartItems.innerHTML = '';
  let sum = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - R$${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    sum += item.price;
  });

  total.textContent = `Total: R$${sum.toFixed(2)}`;
  cartCount.textContent = cart.length;
}

function searchProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchTerm));
  currentPage = 1;
  renderProducts();
}

function sortProducts() {
  const sortOrder = sortSelect.value;
  filteredProducts.sort((a, b) => {
    if (sortOrder === 'az') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
  renderProducts();
}

function changePage(direction) {
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  if (direction === 'prev' && currentPage > 1) currentPage--;
  if (direction === 'next' && currentPage < totalPages) currentPage++;
  renderProducts();
}

function filterByCategory(category) {
  if (category === 'todos') {
    filteredProducts = [...products];
  } else {
    filteredProducts = products.filter(p => p.category === category);
  }
  currentPage = 1;
  renderProducts();
}

// Toggle carrinho aberto/fechado
cartIcon.addEventListener('click', () => {
  cartIcon.classList.toggle('open');
  cartContent.style.display = cartIcon.classList.contains('open') ? 'block' : 'none';
});

cartClose.addEventListener('click', () => {
  cartIcon.classList.remove('open');
  cartContent.style.display = 'none';
});

// Eventos
searchInput.addEventListener('input', searchProducts);
sortSelect.addEventListener('change', sortProducts);
prevPageBtn.addEventListener('click', () => changePage('prev'));
nextPageBtn.addEventListener('click', () => changePage('next'));

document.querySelectorAll('.category').forEach(button => {
  button.addEventListener('click', () => {
    filterByCategory(button.dataset.category);
  });
});

// Inicializar
renderProducts();

// Evento para o botão de finalizar compra
document.getElementById('checkout-btn').addEventListener('click', () => {
  window.location.href = 'checkout.html'; // Substitua com a URL do seu checkout real
});
