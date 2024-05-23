document.addEventListener('DOMContentLoaded', function() {
    const productId = localStorage.getItem('selectedProductId');

    if (!productId) {
        window.location.href = 'shop.html';
        return;
    }

    const colorMap = {
        "Black": "#000000",
        "White": "#FFFFFF",
        "Red": "#FF0000",
        "Green": "#00FF00",
        "Blue": "#0000FF",
        "Yellow": "#FFFF00",
        "Sandal/Cream": "#c1b197",
        // Aggiungi altri colori qui se necessario
    };

    fetch('src/data/products.json')
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id == productId);
            if (product) {
                document.getElementById('product-title').innerText = product.name;
                document.getElementById('product-subtitle').innerText = product.description;
                document.getElementById('product-price').innerText = `€ ${product.price.toFixed(2)}`;
                document.getElementById('product-color-value').innerText = product.color;
                
                const colorHex = colorMap[product.color] || product.color; // Usa la mappa dei colori o il colore esadecimale direttamente
                document.querySelector('.product-shape').style.backgroundColor = colorHex;

                const sizeSelect = document.getElementById('size-select');
                for (const size of Object.keys(product.sizes)) {
                    const option = document.createElement('option');
                    option.value = size;
                    option.innerText = size;
                    sizeSelect.appendChild(option);
                }

                document.querySelector('.button-size').addEventListener('click', function(event) {
                    event.preventDefault();
                    const selectedSize = sizeSelect.value;
                    if (selectedSize === 'selectSize') {
                        alert('Please select a size before adding to cart.');
                        return;
                    }
                    product.selectedSize = selectedSize;
                    const cart = JSON.parse(localStorage.getItem('cart')) || [];
                    cart.push(product);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateMiniCart(); // Call the global function
                });
            } else {
                console.error('Product not found.');
            }
        })
        .catch(error => console.error('Error fetching product data:', error));
});
