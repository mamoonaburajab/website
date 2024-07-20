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
    const params = new URLSearchParams(window.location.search);
    const title = params.get("title");
    const description = params.get("description");
    const imageUrl = params.get("imageUrl");
    const price = params.get("price");
    const colors = JSON.parse(params.get("colors") || "[]"); // Parse JSON array from string

    document.getElementById("product-title").textContent = title;
    document.getElementById("product-image").src = imageUrl;
    document.getElementById("product-description").textContent = description;
    document.getElementById("product-price").textContent = `Price: ${price}`;
    
    // Convert the colors array to a comma-separated string
    document.getElementById("product-colors").textContent = `Colors: ${colors.join(", ")}`;
    
    document.getElementById("whatsapp-link").href = `https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER&text=I'm interested in ${title}`;
});
