window.updateMiniCart = function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartPanelItems = document.querySelector('.cart-panel__items');
    const cartIconBadge = document.getElementById('cart-icon-badge');
    const emptyMessage = document.querySelector('.cart-panel__empty-message');
    const subtotalAmount = document.querySelector('.cart-panel__subtotal-amount');
    const subtotalPanel = document.querySelector('.cart-panel__subtotal');
    cartPanelItems.innerHTML = '';

    let subtotal = 0;

    cart.forEach(item => {
        if (item) {
            const cartItem = document.createElement('li');
            cartItem.className = 'mini-card-item';
            cartItem.innerHTML = `
                <div class="cart-panel__item-content">
                    <div class="cart-panel__item-image">
                        <img src="${item.images[0]}" alt="${item.name}">
                    </div>
                    <div class="cart-panel__item-details">
                        <h4 class="cart-panel__item-name"><a href="shop.html">${item.name}</a></h4>
                        <p class="cart-panel__item-description">${item.description}</p>
                        <p class="cart-panel__item-color">COLOR: <span>${item.color}</span></p>
                        <p class="cart-panel__item-size">SIZE: <span>${item.selectedSize}</span></p>
                        <p class="cart-panel__item-qty">QTY: <span>${item.quantity || 1}</span> x <span>€ ${item.price.toFixed(2)}</span></p>
                    </div>
                </div>
                <div class="cart-panel__item-actions">
                    <span class="cart-panel__item-remove" data-id="${item.id}" data-size="${item.selectedSize}">Remove</span>
                    <span class="cart-panel__item-edit"></span>
                    <div class="cart-panel__item-edit-actions">
                        <button class="cart-panel__item-cancel">Cancel</button>
                        <button class="cart-panel__item-save">Save</button>
                    </div>
                </div>
            `;
            cartPanelItems.appendChild(cartItem);

            subtotal += (item.price * (item.quantity || 1));

            // Aggiungi select per quantità
            const qtyElement = cartItem.querySelector('.cart-panel__item-qty span:first-child');
            const qtySelect = document.createElement('select');
            qtySelect.className = 'cart-panel__item-qty-select';
            for (let i = 1; i <= 10; i++) {
                const option = document.createElement('option');
                option.value = i;
                option.text = i;
                if (i == (item.quantity || 1)) {
                    option.selected = true;
                }
                qtySelect.appendChild(option);
            }
            qtyElement.parentNode.insertBefore(qtySelect, qtyElement.nextSibling);

            // Gestisci eventi per edit, cancel e save
            const editButton = cartItem.querySelector('.cart-panel__item-edit');
            const cancelButton = cartItem.querySelector('.cart-panel__item-cancel');
            const saveButton = cartItem.querySelector('.cart-panel__item-save');
            const editActions = cartItem.querySelector('.cart-panel__item-edit-actions');

            editButton.addEventListener('click', function() {
                qtySelect.style.display = 'inline-block';
                qtyElement.style.display = 'none';
                editButton.style.display = 'none';
                editActions.style.display = 'flex';
            });

            cancelButton.addEventListener('click', function() {
                qtySelect.value = item.quantity || 1; // Resetta la select al valore originale
                qtySelect.style.display = 'none';
                qtyElement.style.display = 'inline';
                editButton.style.display = 'inline-block';
                editActions.style.display = 'none';
            });

            saveButton.addEventListener('click', function() {
                const newQty = parseInt(qtySelect.value);
                item.quantity = newQty;
                localStorage.setItem('cart', JSON.stringify(cart));
                updateMiniCart();
            });
        }
    });

    subtotalAmount.textContent = `€ ${subtotal.toFixed(2)}`;

    // Aggiorna il badge del carrello
    const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    if (totalItems > 0) {
        cartIconBadge.textContent = totalItems;
        cartIconBadge.style.display = 'flex';
        emptyMessage.style.display = 'none'; // Nasconde il messaggio di carrello vuoto
        subtotalPanel.style.display = 'block'; // Mostra il subtotal
    } else {
        cartIconBadge.style.display = 'none';
        emptyMessage.style.display = 'block'; // Mostra il messaggio di carrello vuoto
        subtotalPanel.style.display = 'none'; // Nasconde il subtotal
    }
};

// Rimuove un elemento dal carrello e aggiorna il mini carrello
function removeFromCart(productId, productSize) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id != productId || item.selectedSize != productSize);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateMiniCart();
}

document.querySelector('.cart-panel__items').addEventListener('click', function(event) {
    if (event.target.classList.contains('cart-panel__item-remove')) {
        const productId = event.target.getAttribute('data-id');
        const productSize = event.target.getAttribute('data-size');
        removeFromCart(productId, productSize);
    }
});

// Aggiungi evento al caricamento del documento
document.addEventListener('DOMContentLoaded', function() {
    updateMiniCart();
});
