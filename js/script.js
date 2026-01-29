
const menuItems = [
  { name: "Combo Burger + Drink", price: "₹599", category: "combo", veg: "nonveg", img: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
  { name: "Cheese Pizza", price: "₹499", category: "pizza", veg: "veg", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591" },
  { name: "Cheese Pizza", price: "₹499", category: "pizza", veg: "veg", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591" },
  { name: "Pepperoni Pizza", price: "₹549", category: "pizza", veg: "nonveg", img: "https://unsplash.com/photos/pizza-with-cheese-and-tomato-_P76trHTWDE" },
  { name: "Veg Loaded Pizza", price: "₹479", category: "pizza", veg: "veg", img: "https://images.unsplash.com/photo-1601924582975-7e670e52f6c6" },
  { name: "BBQ Chicken Pizza", price: "₹599", category: "pizza", veg: "nonveg", img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65" },
  { name: "Paneer Tikka Pizza", price: "₹529", category: "pizza", veg: "veg", img: "https://images.unsplash.com/photo-1605475128023-7a3c7c07c3b4" },
  { name: "French Fries", price: "₹150", category: "starter", veg: "veg", img: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85" },
  { name: "Chicken Wings", price: "₹250", category: "starter", veg: "nonveg", img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092" },
  { name: "Makhani Burger", price: "₹200", category: "starter", veg: "veg", img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add" },
  { name: "Classic Burger", price: "₹350", category: "burger", veg: "nonveg", img: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
  { name: "Iced Coffee", price: "₹200", category: "drinks", veg: "veg", img: "https://images.unsplash.com/photo-1511920170033-f8396924c348" },
  { name: "Berry Smoothie", price: "₹200", category: "drinks", veg: "veg", img: "https://images.unsplash.com/photo-1497534446932-c925b458314e" },
  { name: "Chocolate Brownie", price: "₹180", category: "dessert", veg: "veg", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c" }
];

let currentCategory = "all";
let currentVeg = "all";

const grid = document.getElementById("menuGrid");

function render(items) {
  grid.innerHTML = items.map(item => `
    <div class="menu-card">
      <img src="${item.img}" alt="${item.name}">
      <div class="menu-info">
        <h4>${item.name}</h4>
        <div class="price">${item.price}</div>
      </div>
    </div>
  `).join("");
}

function applyFilters() {
  let filtered = [...menuItems];

  if (currentCategory !== "all") {
    filtered = filtered.filter(i => i.category === currentCategory);
  }

  if (currentVeg !== "all") {
    filtered = filtered.filter(i => i.veg === currentVeg);
  }

  render(filtered);
}

function resetActive() {
  document.querySelectorAll(
    ".dropdown-content button, .veg-nonveg button, .all-main-btn"
  ).forEach(btn => btn.classList.remove("active"));
}

function showAll() {
  currentCategory = "all";
  currentVeg = "all";

  resetActive();
  document.querySelector(".all-main-btn")?.classList.add("active");

  applyFilters();   
  closeDropdown();
}

function filterItems(category) {
  currentCategory = category;

  resetActive();

  document.querySelector(
    `.dropdown-content button[onclick="filterItems('${category}')"]`
  )?.classList.add("active");

  applyFilters();
  closeDropdown();
}

function filterVeg(type) {
  currentVeg = type;

  resetActive();

  document.querySelector(
    `.veg-nonveg button[onclick="filterVeg('${type}')"]`
  )?.classList.add("active");

  applyFilters();
}
function toggleDropdown() {
  const dropdown = document.getElementById("dropdown");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
}

function closeDropdown() {
  const dropdown = document.getElementById("dropdown");
  if (dropdown) dropdown.style.display = "none";
}

document.addEventListener("click", e => {
  const box = document.querySelector(".dropdown");
  if (box && !box.contains(e.target)) closeDropdown();
});

showAll();

/* HERO SECTION */
function toggleDropdown() {
  const dropdown = document.getElementById("dropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

let currentSlide = 0;

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".hero-nav.right");
const prevBtn = document.querySelector(".hero-nav.left");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
  currentSlide = index;
}

nextBtn.addEventListener("click", () => {
  showSlide((currentSlide + 1) % slides.length);
});

prevBtn.addEventListener("click", () => {
  showSlide((currentSlide - 1 + slides.length) % slides.length);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index));
});


