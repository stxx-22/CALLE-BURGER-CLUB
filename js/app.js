// ==========================================
// CALLE BURGER CLUB
// STREET FOOD EXPERIENCE
// ==========================================

// CAMBIA ESTE NUMERO POR EL WHATSAPP REAL DEL NEGOCIO
const WHATSAPP_NUMBER = "57300000000";

// ==========================================
// PRODUCTOS
// ==========================================

const products = [
  {
    id: 1,
    name: "La Calle Burger",
    description: "Doble carne, cheddar, tocineta, vegetales y salsa de la casa.",
    price: 28000,
    category: "hamburguesas",
    tag: "Más vendida",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 2,
    name: "Doble Pecado",
    description: "Doble carne artesanal, doble queso y salsa especial.",
    price: 35000,
    category: "hamburguesas",
    tag: "Brutal",
    image: "img/doble-pecado.jpg"
  },
  {
    id: 3,
    name: "Smash Bacon",
    description: "Carne smash, cheddar fundido, bacon crocante y pepinillos.",
    price: 32000,
    category: "hamburguesas",
    tag: "Favorita",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 4,
    name: "Salchipapa Callejera",
    description: "Papas crocantes, salchicha, queso rallado y salsas.",
    price: 22000,
    category: "salchipapas",
    tag: "Clásica",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 5,
    name: "Salchipapa Explosiva",
    description: "Papas, salchicha, pollo, tocineta, queso y salsas.",
    price: 32000,
    category: "salchipapas",
    tag: "Recomendada",
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 6,
    name: "Salchipapa Familiar",
    description: "Una montaña de papas, carnes, queso y salsas para compartir.",
    price: 48000,
    category: "salchipapas",
    tag: "Para compartir",
    image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 7,
    name: "Perro Callejero",
    description: "Salchicha, papitas trituradas, queso y salsas.",
    price: 18000,
    category: "perros",
    tag: "Clásico",
    image: "img/perro-callejero.jpg"
  },
  {
    id: 8,
    name: "Perro Americano",
    description: "Salchicha, cheddar, tocineta y cebolla crocante.",
    price: 25000,
    category: "perros",
    tag: "Especial",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 9,
    name: "Mazorcada Calle",
    description: "Maíz dulce, pollo, queso, papitas y salsas.",
    price: 26000,
    category: "mazorcadas",
    tag: "Favorita",
    image: "img/mazorcada.jpg"
  },
  {
    id: 10,
    name: "Mazorcada Mixta",
    description: "Maíz, pollo, carne, tocineta, queso y salsas especiales.",
    price: 34000,
    category: "mazorcadas",
    tag: "La poderosa",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 11,
    name: "Malteada de Oreo",
    description: "Malteada cremosa con galleta Oreo y crema.",
    price: 16000,
    category: "bebidas",
    tag: "Dulce antojo",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 12,
    name: "Limonada Natural",
    description: "Limón natural, hielo y el toque refrescante perfecto.",
    price: 10000,
    category: "bebidas",
    tag: "",
    image: "img/limonada.jpg"
  }
];

// ==========================================
// ELEMENTOS
// ==========================================

const productGrid = document.getElementById("productGrid");
const filterButtons = document.querySelectorAll(".category-btn");

// ==========================================
// FORMATO DE PRECIO
// ==========================================

function formatPrice(price) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(price);
}

// ==========================================
// WHATSAPP
// ==========================================

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

// ==========================================
// NOTIFICACIONES
// ==========================================

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

// ==========================================
// MOSTRAR PRODUCTOS
// ==========================================

function renderProducts(category = "todos") {
  if (!productGrid) return;

  const filteredProducts = category === "todos"
    ? products
    : products.filter(product => product.category === category);

  productGrid.innerHTML = filteredProducts.map((product, index) => `
    <article class="menu-card">
      <div class="menu-card-image">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/800x600/202020/f9df25?text=CALLE+BURGER';"
        >

        ${product.tag
          ? `<span class="menu-card-tag">${product.tag}</span>`
          : ""
        }

        <span class="menu-card-number">
          ${String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div class="menu-card-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>

        <div class="menu-card-bottom">
          <span class="menu-card-price">
            ${formatPrice(product.price)}
          </span>

          <button
            class="menu-add"
            type="button"
            data-product-id="${product.id}"
          >
            PEDIR
            <i data-lucide="shopping-bag"></i>
          </button>
        </div>
      </div>
    </article>
  `).join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ==========================================
// FILTROS
// ==========================================

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.category);
  });
});

// ==========================================
// PEDIR PRODUCTO
// ==========================================

if (productGrid) {
  productGrid.addEventListener("click", event => {
    const button = event.target.closest(".menu-add");
    if (!button) return;

    const product = products.find(item =>
      item.id === Number(button.dataset.productId)
    );
    if (!product) return;

    const message = `
¡Hola! 🔥 Quiero pedir información sobre este producto:

🍔 ${product.name}
💰 ${formatPrice(product.price)}

¿Está disponible?
    `.trim();

    openWhatsApp(message);
  });
}

// ==========================================
// BOTONES DE WHATSAPP
// ==========================================

document.querySelectorAll(".whatsapp-link").forEach(link => {
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "¡Hola! Quiero conocer el menú y las promociones de CALLE Burger Club."
  )}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

// ==========================================
// MENÚ MÓVIL
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.innerHTML = isOpen
      ? '<i data-lucide="x"></i>'
      : '<i data-lucide="menu"></i>';

    if (window.lucide) {
      window.lucide.createIcons();
    }
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.innerHTML = '<i data-lucide="menu"></i>';

      if (window.lucide) {
        window.lucide.createIcons();
      }
    });
  });
}

// ==========================================
// AÑO AUTOMÁTICO
// ==========================================

const yearElement = document.getElementById("currentYear");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ==========================================
// INICIAR APLICACIÓN
// ==========================================

renderProducts();

if (window.lucide) {
  window.lucide.createIcons();
}

console.log("🔥 CALLE BURGER CLUB funcionando correctamente.");
console.log("🔥 VERSION CON IMAGENES LOCALES");
