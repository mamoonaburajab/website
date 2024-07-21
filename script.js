// Function to toggle the menu
function toggleMenu() {
  const menu = document.querySelector(".navbar .menu");
  menu.classList.toggle("show");
}

// Function to switch languages and hide the menu
function setLanguage(lang) {
  document.querySelectorAll("[data-en], [data-ar], [data-he]").forEach((el) => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
  // Save the selected language in local storage
  localStorage.setItem("preferredLanguage", lang);
  // Hide the menu after selecting a language
  toggleMenu();
}

// Fetch product data from JSON file
document.addEventListener("DOMContentLoaded", () => {
  // Load the preferred language from local storage
  const preferredLanguage = localStorage.getItem("preferredLanguage") || "en";
  setLanguage(preferredLanguage);

  fetch("products.json")
    .then((response) => response.json())
    .then((products) => {
      const productContainer = document.getElementById("product-container");

      products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";

        productCard.innerHTML = `
                    <img src="${product.imageUrl}" alt="${
          product.titleEn
        }" class="product-image">
                    <div class="product-content">
                        <h2 class="product-title" data-en="${
                          product.titleEn
                        }" data-ar="${product.titleAr}" data-he="${
          product.titleHe
        }">${product.titleEn}</h2>
                        <div class="product-info">
                            <span class="product-price" data-en="₪${
                              product.price
                            }" data-ar="₪${product.price}" data-he="₪${
          product.price
        }">₪${product.price}</span>
                            <a href="product.html?titleEn=${encodeURIComponent(
                              product.titleEn
                            )}&titleAr=${encodeURIComponent(
          product.titleAr
        )}&titleHe=${encodeURIComponent(
          product.titleHe
        )}&descriptionEn=${encodeURIComponent(
          product.descriptionEn
        )}&descriptionAr=${encodeURIComponent(
          product.descriptionAr
        )}&descriptionHe=${encodeURIComponent(
          product.descriptionHe
        )}&imageUrl=${encodeURIComponent(
          product.imageUrl
        )}&price=${encodeURIComponent(
          product.price
        )}" class="order-link" data-en="Details" data-ar="التفاصيل" data-he="פרטים">Details</a>
                        </div>
                    </div>
                `;

        productContainer.appendChild(productCard);
      });
    })
    .catch((error) => console.error("Error loading products:", error));
});
