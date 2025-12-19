import { products } from "./products.js";

let filteredProducts = [...products];

const productsGrid = document.querySelector(".products-grid");

// ----- DISPLAY PRODUCTS ON THE PAGE -----

const displayProducts = () => {
  if (filteredProducts.length < 1) {
    productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #646464; font-family: Inter, sans-serif;">
        Sorry, no products matched your search.
      </p>`;
    return;
  }

  // Generate HTML for each product
  productsGrid.innerHTML = filteredProducts
    .map((product) => {
      const { id, name, category, price, image } = product;
      return `
        <article class="product-card" data-id="${id}">
          <img src="${image}" alt="${name}" class="product-img" />
          <div class="product-info">
            <h4 class="product-name">${name}</h4>
            <p class="product-price">$${price}</p>
          </div>
        </article>
      `;
    })
    .join("");
};

displayProducts();

// ----- FILTERING SYSTEM (Buttons) -----

// Select all filter buttons
const filterButtons = document.querySelectorAll(".filter-btn");

// Add click event to each button
filterButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Get the category from the button's data-category attribute
    const category = e.target.dataset.category;

    // Filter the products based on category
    if (category === "all") {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return product.category === category;
      });
    }

    // Display the filtered products
    displayProducts();

    // Update active button styling
    filterButtons.forEach((button) => button.classList.remove("active"));
    e.target.classList.add("active");
  });
});

// ----- SEARCH FUNCTIONALITY -----

// Select the search input
const searchInput = document.querySelector(".search-input");

// Add event listener for typing in search box
searchInput.addEventListener("keyup", () => {
  const searchValue = searchInput.value.toLowerCase();

  // Filter products based on search input
  filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchValue);
  });

  // Display the filtered products
  displayProducts();

  // Reset all filter buttons to inactive (remove active class)
  filterButtons.forEach((button) => button.classList.remove("active"));
});
