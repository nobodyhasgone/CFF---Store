// document.addEventListener('DOMContentLoaded', function() {
//     const container = document.getElementById('cardsContainer');

//     // Carica i dati dal file JSON
//     fetch('src/data/products.json')
//         .then(response => response.json())
//         .then(products => {
//             createProductCards(products);
//         })
//         .catch(error => console.error('Error fetching products:', error));

//     function createProductCards(products) {
//         products.forEach(product => {
//             const card = document.createElement('div');
//             card.className = 'card';

//             // Usa la prima immagine come immagine principale
//             const mainImage = product.images[0];

//             card.innerHTML = `
//                 <div class="card__image-container">
//                     <img src="${mainImage}" class="card__image" alt="${product.name}">
//                     <a href="paginaprodotto.html" class="card__btn-link">
//                         <button class="card__btn" data-id="${product.id}">Material</button>
//                     </a>
//                 </div>
//                 <h2 class="card__name">${product.name}</h2>
//                 <p class="card__description">${product.description}</p>
//                 <div class="card__bottom">
//                     <span class="card__price">€ ${product.price.toFixed(2)}</span>
//                     <span class="card__favorite"><img src="src/images/product/hearticon.svg" alt="Add to Favorites"></span>
//                 </div>
//             `;
//             container.appendChild(card);
//         });

//         // Aggiungi event listener ai pulsanti "Material"
//         document.querySelectorAll('.card__btn').forEach(button => {
//             button.addEventListener('click', function(event) {
//                 const productId = this.getAttribute('data-id');
//                 localStorage.setItem('selectedProductId', productId);
//                 window.location.href = 'testcarosello.html'; // Reindirizza alla pagina di test
//             });
//         });

//         // Aggiungi event listener per il toggle delle icone dei cuori
//         container.addEventListener('click', function(event) {
//             if (event.target.parentElement.classList.contains('card__favorite')) {
//                 const img = event.target;
//                 const isHeartFull = img.src.includes('full-heart.svg');
//                 img.src = isHeartFull ? 'src/images/product/hearticon.svg' : 'src/images/product/full-heart.svg';
//             }
//         });
//     }
// });


// File: ordinamento.js

let products = [];

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('cardsContainer');

    // Carica i dati dal file JSON
    fetch('src/data/products.json')
        .then(response => response.json())
        .then(data => {
            products = data;
            displayProducts(products);
        })
        .catch(error => console.error('Error fetching products:', error));
});

function toggleDropdown() {
    var dropdown = document.querySelector('.select-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

window.onclick = function(event) {
    if (!event.target.matches('.select-title span')) {
        var dropdowns = document.getElementsByClassName("select-dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}

function sortProducts(criteria) {
    let sortedProducts;
    switch (criteria) {
        case 'position':
            sortedProducts = products.sort((a, b) => a.id - b.id);
            break;
        case 'name':
            sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'priceAsc':
            sortedProducts = products.sort((a, b) => a.price - b.price);
            break;
        case 'priceDesc':
            sortedProducts = products.sort((a, b) => b.price - a.price);
            break;
        default:
            sortedProducts = products;
    }
    displayProducts(sortedProducts);
    toggleDropdown();
    document.querySelector('.select-trigger').innerHTML = `${criteria.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })} <img src="./src/images/icons/down-arrow.svg" class="arrow" alt="Dropdown arrow">`;
}

function displayProducts(products) {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';
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
