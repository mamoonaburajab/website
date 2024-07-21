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

// Fetch product data from URL parameters
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const titleEn = params.get("titleEn");
  const titleAr = params.get("titleAr");
  const titleHe = params.get("titleHe");
  const descriptionEn = params.get("descriptionEn");
  const descriptionAr = params.get("descriptionAr");
  const descriptionHe = params.get("descriptionHe");
  const imageUrl = params.get("imageUrl");
  const price = params.get("price");

  document.getElementById("product-title").setAttribute("data-en", titleEn);
  document.getElementById("product-title").setAttribute("data-ar", titleAr);
  document.getElementById("product-title").setAttribute("data-he", titleHe);

  document
    .getElementById("product-description")
    .setAttribute("data-en", descriptionEn);
  document
    .getElementById("product-description")
    .setAttribute("data-ar", descriptionAr);
  document
    .getElementById("product-description")
    .setAttribute("data-he", descriptionHe);

  document.getElementById("product-image").src = imageUrl;
  document.getElementById("product-price").textContent = `Price: ₪${price}`;

  document.getElementById(
    "whatsapp-link"
  ).href = `https://wa.me/message/FQLGFIUWY5WGA1`;

  // Load the preferred language from local storage
  const preferredLanguage = localStorage.getItem("preferredLanguage") || "en";
  setLanguage(preferredLanguage);
});
