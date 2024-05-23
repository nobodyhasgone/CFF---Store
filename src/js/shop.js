document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('cardsContainer');

    // Carica i dati dal file JSON
    fetch('src/data/products.json')
        .then(response => response.json())
        .then(products => {
            createProductCards(products);
        })
        .catch(error => console.error('Error fetching products:', error));

    function createProductCards(products) {
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'card';

            // Usa la prima immagine come immagine principale
            const mainImage = product.images[0];

            card.innerHTML = `
                <div class="card__image-container">
                    <img src="${mainImage}" class="card__image" alt="${product.name}">
                    <a href="paginaprodotto.html" class="card__btn-link">
                        <button class="card__btn" data-id="${product.id}">Material</button>
                    </a>
                </div>
                <h2 class="card__name">${product.name}</h2>
                <p class="card__description">${product.description}</p>
                <div class="card__bottom">
                    <span class="card__price">€ ${product.price.toFixed(2)}</span>
                    <span class="card__favorite"><img src="src/images/product/hearticon.svg" alt="Add to Favorites"></span>
                </div>
            `;
            container.appendChild(card);
        });

        // Aggiungi event listener ai pulsanti "Material"
        document.querySelectorAll('.card__btn').forEach(button => {
            button.addEventListener('click', function(event) {
                const productId = this.getAttribute('data-id');
                localStorage.setItem('selectedProductId', productId);
                window.location.href = 'testcarosello.html'; // Reindirizza alla pagina di test
            });
        });

        // Aggiungi event listener per il toggle delle icone dei cuori
        container.addEventListener('click', function(event) {
            if (event.target.parentElement.classList.contains('card__favorite')) {
                const img = event.target;
                const isHeartFull = img.src.includes('full-heart.svg');
                img.src = isHeartFull ? 'src/images/product/hearticon.svg' : 'src/images/product/full-heart.svg';
            }
        });
    }
});
