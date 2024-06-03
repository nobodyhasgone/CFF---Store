document.addEventListener('DOMContentLoaded', function() {
    const confirmOverlay = document.querySelector('.confirm-overlay');
    const confirmPopup = document.querySelector('.confirm-popup');
    const confirmYesButton = document.querySelector('.btn_confirm-popup--ok');
    const confirmNoButton = document.querySelector('.btn_confirm-popup--cancel');
    let productIdToRemove = null;
    let productSizeToRemove = null;

    // Funzione per aggiornare il mini carrello
    window.updateMiniCart = function() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        console.log("Contenuto del carrello:", cart);
        const cartPanelItems = document.querySelector('.cart-panel__items');
        const cartIconBadge = document.getElementById('cart-icon-badge');
        const emptyMessage = document.querySelector('.cart-panel__empty-message');
        const subtotalAmount = document.querySelector('.cart-panel__subtotal-amount');
        const subtotalPanel = document.querySelector('.cart-panel__subtotal');
        
        if (!cartPanelItems || !cartIconBadge || !emptyMessage || !subtotalAmount || !subtotalPanel) {
            console.error("Uno degli elementi del carrello non è stato trovato nel DOM");
            return;
        }
        
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

    // Assicurati che gli elementi siano presenti prima di aggiungere i listener
    const cartPanelItems = document.querySelector('.cart-panel__items');
    if (cartPanelItems) {
        cartPanelItems.addEventListener('click', function(event) {
            if (event.target.classList.contains('cart-panel__item-remove')) {
                productIdToRemove = event.target.getAttribute('data-id');
                productSizeToRemove = event.target.getAttribute('data-size');
                confirmPopup.classList.add('confirm-popup--active');
                confirmOverlay.classList.add('confirm-overlay--active');
            }
        });
    } else {
        console.error("L'elemento '.cart-panel__items' non è stato trovato nel DOM");
    }

    if (confirmNoButton) {
        confirmNoButton.addEventListener('click', function() {
            confirmPopup.classList.remove('confirm-popup--active');
            confirmOverlay.classList.remove('confirm-overlay--active');
            productIdToRemove = null;
            productSizeToRemove = null;
        });
    } else {
        console.error("L'elemento '.btn_confirm-popup--cancel' non è stato trovato nel DOM");
    }

    if (confirmYesButton) {
        confirmYesButton.addEventListener('click', function() {
            if (productIdToRemove && productSizeToRemove) {
                removeFromCart(productIdToRemove, productSizeToRemove);
                productIdToRemove = null;
                productSizeToRemove = null;
            }
            confirmPopup.classList.remove('confirm-popup--active');
            confirmOverlay.classList.remove('confirm-overlay--active');
        });
    } else {
        console.error("L'elemento '.btn_confirm-popup--ok' non è stato trovato nel DOM");
    }

    // Aggiorna il mini carrello al caricamento del documento
    console.log("Pagina caricata. Aggiornamento del mini carrello.");
    updateMiniCart();
});

document.addEventListener('DOMContentLoaded', function() {
    const closeIcon = document.querySelector('.confirm-popup__close-icon');
    const confirmPopup = document.querySelector('.confirm-popup');
    const confirmOverlay = document.querySelector('.confirm-overlay');

    if (closeIcon && confirmPopup && confirmOverlay) {
        closeIcon.addEventListener('click', function() {
            confirmPopup.classList.remove('confirm-popup--active');
            confirmOverlay.classList.remove('confirm-overlay--active');
        });
    } else {
        console.error("Uno degli elementi conferma non è stato trovato nel DOM");
    }
});
