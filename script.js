// Function to toggle the menu
function toggleMenu() {
  const menu = document.querySelector(".navbar .menu");
  menu.classList.toggle("show");
}

// Function to switch languages
function setLanguage(lang) {
  document.querySelectorAll("[data-en], [data-ar], [data-he]").forEach((el) => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

// Fetch product data from JSON file
document.addEventListener("DOMContentLoaded", () => {
  fetch("products.json")
    .then((response) => response.json())
    .then((products) => {
      const productContainer = document.getElementById("product-container");

      products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";

        productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${
          product.title
        }" class="product-image">
            <div class="product-content">
              <h2 class="product-title" data-en="${product.title}" data-ar="${
          product.title
        }" data-he="${product.title}">${product.title}</h2>
              <div class="product-info">
                <span class="product-price" data-en=" ${
                  product.price
                } " data-ar=" ${product.price} " data-he=" ${product.price}">${
          product.price
        }</span>
                <a href="product.html?title=${encodeURIComponent(
                  product.title
                )}&description=${encodeURIComponent(
          product.description
        )}&imageUrl=${encodeURIComponent(
          product.imageUrl
        )}&price=${encodeURIComponent(
          product.price
        )}" class="order-link" data-en="Details" data-ar="التفاصيل" data-he="">Details</a>
              </div>
            </div>
          `;

        productContainer.appendChild(productCard);
      });
    })
    .catch((error) => console.error("Error loading products:", error));
});
