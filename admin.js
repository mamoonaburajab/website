document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-product-form');
    const previewContainer = document.getElementById('preview-container');
    
    document.getElementById('product-image').addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewContainer.innerHTML = `
                    <h2>Image Preview:</h2>
                    <img src="${e.target.result}" alt="Image Preview" style="max-width: 100%; height: auto;">
                `;
            };
            reader.readAsDataURL(file);
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const title = document.getElementById('product-title').value;
        const price = document.getElementById('product-price').value;
        const colors = document.getElementById('product-colors').value;
        const description = document.getElementById('product-description').value;
        
        // Simulate saving data to local storage
        localStorage.setItem('product-title', title);
        localStorage.setItem('product-price', price);
        localStorage.setItem('product-colors', colors);
        localStorage.setItem('product-description', description);

        const imageFile = document.getElementById('product-image').files[0];
        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                localStorage.setItem('product-image', e.target.result);
            };
            reader.readAsDataURL(imageFile);
        }

        alert('Product added successfully!');
        form.reset();
        previewContainer.innerHTML = '';
    });
});
