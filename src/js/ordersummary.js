document.addEventListener('DOMContentLoaded', function () {
    const orderSummaryBar = document.querySelector('.order-summary__bar');
    const orderSummaryItems = document.querySelector('.order-summary__items');
    const orderSummaryToggleIcon = document.querySelector('.order-summary__toggle-icon');
    const orderSummaryCartInfo = document.querySelector('.order-summary__cart-info');
    const orderSummaryWrapper = document.querySelector('.order-summary__items__wrapper');

    if (orderSummaryBar && orderSummaryItems) {
        orderSummaryBar.addEventListener('click', function () {
            orderSummaryItems.classList.toggle('order-summary__items--open');
            // Cambia l'immagine di sfondo a seconda dello stato aperto o chiuso
            if (orderSummaryItems.classList.contains('order-summary__items--open')) {
                orderSummaryToggleIcon.style.backgroundImage = "url('./src/images/icons/chevron-up-solid.svg')";
            } else {
                orderSummaryToggleIcon.style.backgroundImage = "url('./src/images/icons/chevron-down-solid.svg')";
            }
        });
    }

    // Funzione per caricare i dati del carrello dal localStorage e popolare il riepilogo dell'ordine
    function loadOrderSummary() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        orderSummaryWrapper.innerHTML = '';

        if (cart.length === 0) {
            orderSummaryCartInfo.textContent = 'No items in cart';
            return;
        }

        orderSummaryCartInfo.textContent = `${cart.length} item(s) in cart`;

        cart.forEach(item => {
            const quantity = item.quantity || 1; // Imposta una quantità predefinita di 1 se `item.quantity` è undefined
            const totalPrice = (item.price * quantity).toFixed(2); // Calcola il prezzo totale
            const listItem = document.createElement('li');
            listItem.className = 'order-summary__item';
            listItem.innerHTML = `
                <img src="${item.images[0]}" alt="${item.name}" class="order-summary__image">
                <div class="order-summary__details">
                    <span class="order-summary__product-title">${item.name}</span>
                    <div class="order-summary__attributes">
                        <span class="order-summary__product-color">color: ${item.color},</span>
                        <span class="order-summary__product-size">size: ${item.selectedSize}</span>
                    </div>
                    <div class="order-summary__quantity-price">
                        <span class="order-summary__product-quantity">x${quantity}</span>
                        <span class="order-summary__total-price">€ ${totalPrice}</span>
                    </div>
                </div>
            `;
            orderSummaryWrapper.appendChild(listItem);
        });
    }

    // Carica il riepilogo dell'ordine al caricamento della pagina
    loadOrderSummary();
});
