// Super Discount .99 & Huntington Drive Commercial Strip Hub
// El Sereno, CA 90032

const PRODUCTS = [
  // Super Discount .99 Items
  {
    id: 'sd-001',
    name: 'Fabuloso Lavender Multi-Cleaner (33.8 oz)',
    store: 'Super Discount .99',
    category: 'superdiscount',
    price: 1.99,
    icon: '🧴',
    desc: 'Deep cleaning floor and surface wash. The Eastside household staple.'
  },
  {
    id: 'sd-002',
    name: 'Traditional Star Fiesta Piñata (Handmade)',
    store: 'Super Discount .99',
    category: 'superdiscount',
    price: 9.99,
    icon: '🪅',
    desc: 'Authentic handcrafted 5-point star piñata for weekend family celebrations.'
  },
  {
    id: 'sd-003',
    name: 'Braided 6ft USB-C Fast Charging Cable',
    store: 'Super Discount .99',
    category: 'superdiscount',
    price: 3.99,
    icon: '🔌',
    desc: 'Heavy-duty nylon braided cable with 60W Power Delivery support.'
  },
  {
    id: 'sd-004',
    name: 'Ariel Concentrated Powder Detergent (2.2 lb)',
    store: 'Super Discount .99',
    category: 'superdiscount',
    price: 4.99,
    icon: '🧼',
    desc: 'Original formula high-efficiency laundry powder.'
  },
  {
    id: 'sd-005',
    name: 'Assorted Mexican Party Candy Bag (80 count)',
    store: 'Super Discount .99',
    category: 'superdiscount',
    price: 5.99,
    icon: '🍬',
    desc: 'Lucas, Vero Mango, Pulparindo, and De La Rosa marzapán mix.'
  },
  {
    id: 'sd-006',
    name: 'Everyday Utility Knife & 5 Replacement Blades',
    store: 'Super Discount .99',
    category: 'superdiscount',
    price: 0.99,
    icon: '🔪',
    desc: 'Retractable heavy-duty box cutter for shop and home.'
  },

  // El Sereno Meat Market Items
  {
    id: 'mm-001',
    name: 'Ranchera Asada Prepared & Marinated (1 lb)',
    store: 'El Sereno Meat Market',
    category: 'carniceria',
    price: 8.99,
    icon: '🥩',
    desc: 'Signature citrus and guajillo marinade on tender thin-cut beef flap.'
  },
  {
    id: 'mm-002',
    name: 'Fresh Housemade Chorizo Rojo (1 lb)',
    store: 'El Sereno Meat Market',
    category: 'carniceria',
    price: 4.49,
    icon: '🥓',
    desc: 'Traditional recipe pork sausage spiced with toasted chiles and garlic.'
  },
  {
    id: 'mm-003',
    name: 'Queso Fresco Tradicional (16 oz)',
    store: 'El Sereno Meat Market',
    category: 'carniceria',
    price: 3.99,
    icon: '🧀',
    desc: 'Artisanal crumbling cheese made fresh for beans, enchiladas, and tacos.'
  },

  // Huntington Panadería Items
  {
    id: 'pan-001',
    name: 'Freshly Baked Conchas (Pack of 4)',
    store: 'Huntington Panadería',
    category: 'panaderia',
    price: 3.99,
    icon: '🥖',
    desc: 'Vanilla and chocolate topped sweet bread baked fresh every 4 hours.'
  },
  {
    id: 'pan-002',
    name: 'Puerquitos de Piloncillo (Pack of 3)',
    store: 'Huntington Panadería',
    category: 'panaderia',
    price: 2.99,
    icon: '🥐',
    desc: 'Traditional molasses and cinnamon spiced gingerbread cookies.'
  },

  // El Sereno Hardware & Key Shop Items
  {
    id: 'hw-001',
    name: 'Single Brass Key Duplication (KW1 / SC1)',
    store: 'El Sereno Hardware',
    category: 'hardware',
    price: 1.99,
    icon: '🔑',
    desc: 'Precision duplicated house key while you wait in under 90 seconds.'
  },
  {
    id: 'hw-002',
    name: '2-Gang Metallic Handy Box & Cover (EMT)',
    store: 'El Sereno Hardware',
    category: 'hardware',
    price: 2.49,
    icon: '🧰',
    desc: 'Steel utility electrical junction box with 1/2" side knockouts.'
  }
];

let cart = [];
let currentCategory = 'all';

function renderProducts() {
  const grid = document.getElementById('product-grid');
  const searchVal = document.getElementById('search-input').value.toLowerCase();
  const sortVal = document.getElementById('sort-select').value;

  let filtered = PRODUCTS.filter(p => {
    const matchesCat = currentCategory === 'all' || p.category === currentCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchVal) || p.desc.toLowerCase().includes(searchVal) || p.store.toLowerCase().includes(searchVal);
    return matchesCat && matchesSearch;
  });

  if (sortVal === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortVal === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #94a3b8;">
      <h3>No items found matching "${searchVal}"</h3>
      <p style="margin-top: 0.5rem;">Try searching for "Fabuloso", "Asada", "Conchas", or "Cable"</p>
    </div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card">
      <div class="card-img-placeholder">
        <span>${p.icon}</span>
        <span class="card-store-badge">${p.store}</span>
      </div>
      <div class="card-body">
        <h4 class="card-title">${p.name}</h4>
        <p class="card-desc">${p.desc}</p>
        <div class="card-footer">
          <span class="card-price">$${p.price.toFixed(2)}</span>
          <button class="add-btn" onclick="addToCart('${p.id}')">+ Add to Cart</button>
        </div>
      </div>
    </div>
  `).join('');
}

window.filterCategory = function(cat) {
  currentCategory = cat;
  document.querySelectorAll('.pill-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  const titles = {
    'all': 'All Huntington Drive Locations',
    'superdiscount': 'Super Discount .99 Specials',
    'carniceria': 'El Sereno Meat Market (Carnicería)',
    'panaderia': 'Huntington Panadería & Cafe',
    'hardware': 'El Sereno Hardware & Key Shop'
  };
  document.getElementById('current-filter-title').innerText = titles[cat] || 'Commercial Inventory';
  renderProducts();
};

window.sortProducts = function() {
  renderProducts();
};

window.addToCart = function(id) {
  const prod = PRODUCTS.find(p => p.id === id);
  if (!prod) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...prod, qty: 1 });
  }

  updateCartUI();
  toggleCart(true);
};

window.removeFromCart = function(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartUI();
};

window.updateQty = function(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    window.removeFromCart(id);
  } else {
    updateCartUI();
  }
};

function updateCartUI() {
  const countEl = document.getElementById('cart-count');
  const navTotalEl = document.getElementById('cart-nav-total');
  const itemsEl = document.getElementById('cart-items');
  const subtotalEl = document.getElementById('cart-subtotal');
  const taxEl = document.getElementById('cart-tax');
  const grandEl = document.getElementById('cart-grand-total');

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const tax = subtotal * 0.095; // 9.5% LA county rate
  const grandTotal = subtotal + tax;

  countEl.innerText = totalQty;
  navTotalEl.innerText = `$${grandTotal.toFixed(2)}`;
  subtotalEl.innerText = `$${subtotal.toFixed(2)}`;
  taxEl.innerText = `$${tax.toFixed(2)}`;
  grandEl.innerText = `$${grandTotal.toFixed(2)}`;

  if (cart.length === 0) {
    itemsEl.innerHTML = `<div style="text-align: center; color: #64748b; margin-top: 3rem;">
      <p style="font-size: 2rem;">🛒</p>
      <p style="margin-top: 0.5rem;">Your cart is empty.</p>
      <p style="font-size: 0.8rem;">Add some daily essentials from Huntington Dr!</p>
    </div>`;
  } else {
    itemsEl.innerHTML = cart.map(item => `
      <div class="cart-item-row">
        <div>
          <strong style="font-size: 0.9rem; color: #fff;">${item.name}</strong>
          <div style="font-size: 0.75rem; color: #f97316;">$${item.price.toFixed(2)} each &bull; ${item.store}</div>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <button style="background: #334155; color: #fff; border: none; width: 24px; height: 24px; border-radius: 4px; cursor: pointer;" onclick="updateQty('${item.id}', -1)">-</button>
          <span style="font-weight: bold; font-size: 0.9rem;">${item.qty}</span>
          <button style="background: #334155; color: #fff; border: none; width: 24px; height: 24px; border-radius: 4px; cursor: pointer;" onclick="updateQty('${item.id}', 1)">+</button>
          <button style="background: transparent; color: #ef4444; border: none; font-size: 1.1rem; cursor: pointer; margin-left: 0.4rem;" onclick="removeFromCart('${item.id}')">&times;</button>
        </div>
      </div>
    `).join('');
  }
}

window.toggleCart = function(forceOpen) {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('overlay');
  if (forceOpen === true) {
    drawer.classList.add('open');
    overlay.classList.add('open');
  } else {
    drawer.classList.toggle('open');
    overlay.classList.toggle('open');
  }
};

window.openInstagramModal = function() {
  document.getElementById('ig-modal').classList.add('open');
};

window.closeInstagramModal = function() {
  document.getElementById('ig-modal').classList.remove('open');
};

window.checkout = function() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  const total = document.getElementById('cart-grand-total').innerText;
  alert(`Order confirmed for Local Pickup on Huntington Dr! Total: ${total}. Thank you for supporting El Sereno small businesses!`);
  cart = [];
  updateCartUI();
  toggleCart(false);
};

// Event Listeners
document.getElementById('search-input').addEventListener('input', renderProducts);

// Initial Render
renderProducts();
updateCartUI();
