document.addEventListener('DOMContentLoaded', function () {
    // Variabili globali
    const addButton = document.querySelector('.button-size');
    const miniCardContainer = document.getElementById('miniCardContainer');
    const miniCardList = document.getElementById('miniCardList');
    const sizeSelect = document.getElementById('size-select');
    const emptyMessage = document.querySelector('.cart-empty-message');
    const confirmationPopup = document.getElementById('confirmationPopup');
    const confirmRemoveButton = document.getElementById('confirmRemove');
    const cancelRemoveButton = document.getElementById('cancelRemove');
    const popupOverlay = document.getElementById('popupOverlay');
    const cartIconBadge = document.getElementById('cartIconBadge');
    const subtotalAmount = document.getElementById('subtotal-amount');
    let itemToRemove = null;

    // Eventi di inizializzazione
    addButton.addEventListener('click', handleAddToCart);
    document.addEventListener('click', handleRemoveItemPopup);
    confirmRemoveButton.addEventListener('click', confirmRemoveItem);
    cancelRemoveButton.addEventListener('click', closePopup);
    document.getElementById('popupClose').addEventListener('click', closePopup);
    sizeSelect.addEventListener('change', updateSelectedSizeDisplay);
    Array.from(miniCardList.children).forEach(initializeEditEvents);

    // Inizializza il badge e il subtotale all'avvio
    updateCartBadge();
    updateSubtotal();
    toggleMiniCardFooter();

    // Osserva i cambiamenti allo stato del messaggio vuoto
    const observer = new MutationObserver(toggleMiniCardFooter);
    observer.observe(emptyMessage, { attributes: true, attributeFilter: ['style', 'class'] });

    // Funzioni
    /**
     * Aggiungi o aggiorna una mini-card nel carrello
     * @param {string} size - La taglia del prodotto
     * @param {number} price - Il prezzo unitario del prodotto
     * @param {number} quantity - La quantità del prodotto da aggiungere
     */
    function addOrUpdateMiniCard(size, price, quantity) {
        let existingCard = Array.from(miniCardList.children).find(card => card.querySelector('.product-option-list dd').textContent === size);

        if (existingCard) {
            // Aggiorna la quantità e il prezzo della mini-card esistente
            const quantityDisplay = existingCard.querySelector('#quantity-number');
            const unitPriceDisplay = existingCard.querySelector('#unit-price');
            let currentQuantity = parseInt(quantityDisplay.textContent);
            currentQuantity += quantity;
            quantityDisplay.textContent = currentQuantity;
            unitPriceDisplay.textContent = `€${(price * currentQuantity).toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        } else {
            // Crea una nuova mini-card
            const newMiniCard = document.createElement('li');
            newMiniCard.className = 'mini-card-item';
            newMiniCard.innerHTML = `
                <div class="minicart-container">
                    <ol class="minicart-items">
                        <li class="product-item">
                            <div class="product">
                                <span class="product-image-container"></span>
                                <div class="product-item-details">
                                    <strong class="product-name"><a href="productpage.html">LUMBERJACK JACKET</a></strong>
                                    <div class="product-item-material">Sandal suede shearling Lumberjack Jacket</div>
                                    <div class="product-item-options">
                                        <dl class="product-option-list">
                                            <dt class="label">Color:</dt>
                                            <dd class="values">Sandal/Cream</dd>
                                        </dl>
                                        <dl class="product-option-list">
                                            <dt class="label">Size:</dt>
                                            <dd class="values">${size}</dd>
                                        </dl>
                                        <dl class="product-option-list product-option-list--active">
                                            <dt class="product-option-list__label">Qty:</dt>
                                            <dd class="product-option-list__values" id="quantity-display">
                                                <span id="quantity-number">${quantity}</span>
                                                <span class="quantity-multiplier">x</span>
                                                <span id="unit-price">€${price.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                            </dd>
                                        </dl>
                                        <dl class="product-option-list product-option-list--disabled" style="display: none;">
                                            <dd class="product-option-list__values">
                                                <span class="quantity-edit">
                                                    <label for="quantity-select" class="product-option-list__label">Qty:</label>
                                                    <select name="quantity" id="quantity-select" class="quantity-select">
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                    </select>
                                                </span>
                                                <span class="quantity-multiplier">x</span>
                                                <span id="unit-price-disabled">€${price.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div class="product-item-actions">
                                    <div class="product-actions">
                                        <div class="secondary">
                                            <a href="#" class="remove-item"><span>Remove</span></a>
                                        </div>
                                        <div class="primary">
                                            <div class="edit-actions" style="display: none;">
                                                <a href="#" class="save-edit">Save</a>
                                                <a href="#" class="cancel-edit">Cancel</a>
                                            </div>
                                            <a href="#"><span class="primary__edit"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            `;
            miniCardList.appendChild(newMiniCard);
            initializeEditEvents(newMiniCard);
        }

        updateSubtotal();
    }

    /**
     * Inizializza gli eventi di modifica sulle nuove mini-card
     * @param {HTMLElement} miniCard - La mini-card da inizializzare
     */
    function initializeEditEvents(miniCard) {
        const editButton = miniCard.querySelector('.primary__edit');
        const saveButton = miniCard.querySelector('.save-edit');
        const cancelButton = miniCard.querySelector('.cancel-edit');
        const activeOptionList = miniCard.querySelector('.product-option-list--active');
        const disabledOptionList = miniCard.querySelector('.product-option-list--disabled');

        editButton.addEventListener('click', function (event) {
            event.preventDefault();
            editButton.style.display = 'none';
            disabledOptionList.style.display = 'flex';
            activeOptionList.style.display = 'none';
            miniCard.querySelector('.edit-actions').style.display = 'flex';
        });

        saveButton.addEventListener('click', function (event) {
            event.preventDefault();
            const quantitySelect = miniCard.querySelector('#quantity-select');
            const selectedQuantity = parseInt(quantitySelect.value);
            const unitPrice = 2775;
            const totalPrice = unitPrice * selectedQuantity;

            miniCard.querySelector('#quantity-number').innerText = selectedQuantity;
            miniCard.querySelector('#unit-price').innerText = `€${totalPrice.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

            activeOptionList.style.display = 'flex';
            disabledOptionList.style.display = 'none';
            editButton.style.display = 'inline-block';
            saveButton.parentElement.style.display = 'none';

            updateCartBadge(); // Aggiorna il badge qui
            updateSubtotal(); // Aggiorna il subtotale
        });

        cancelButton.addEventListener('click', function (event) {
            event.preventDefault();
            activeOptionList.style.display = 'flex';
            disabledOptionList.style.display = 'none';
            editButton.style.display = 'inline-block';
            cancelButton.parentElement.style.display = 'none';
        });
    }

    /**
     * Aggiorna la visibilità del contenitore mini-card
     */
    function updateMiniCardVisibility() {
        if (miniCardList.children.length > 0) {
            miniCardContainer.style.display = 'block';
            emptyMessage.style.display = 'none';
        } else {
            miniCardContainer.style.display = 'none';
            emptyMessage.style.display = 'block';
        }
    }

    /**
     * Aggiorna il subtotale del carrello
     */
    function updateSubtotal() {
        const subtotal = Array.from(miniCardList.children).reduce((acc, card) => {
            const unitPrice = parseFloat(card.querySelector('#unit-price').textContent.replace('€', '').replace(/\./g, '').replace(',', '.'));
            return acc + unitPrice;
        }, 0);

        subtotalAmount.textContent = `€${subtotal.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }

    /**
     * Aggiorna il badge dell'icona Cart
     */
    function updateCartBadge() {
        const totalItems = Array.from(miniCardList.children).reduce((acc, card) => {
            const quantity = parseInt(card.querySelector('#quantity-number').textContent);
            return acc + quantity;
        }, 0);

        cartIconBadge.textContent = totalItems;
        cartIconBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    /**
     * Gestisce l'aggiunta di un prodotto al carrello
     * @param {Event} event - L'evento click del pulsante
     */
    function handleAddToCart(event) {
        event.preventDefault();
        const selectedSize = sizeSelect.value;
        const price = 2775;
        const quantity = 1;

        if (selectedSize !== 'selectSize') {
            addOrUpdateMiniCard(selectedSize, price, quantity);
            updateMiniCardVisibility();
            updateCartBadge(); // Aggiorna il badge qui
        } else {
            alert('Please select a size before adding to cart.');
        }
    }

    /**
     * Mostra il pop-up di conferma per la rimozione di un articolo
     * @param {Event} event - L'evento click dell'elemento rimozione
     */
    function handleRemoveItemPopup(event) {
        if (event.target.closest('.remove-item')) {
            event.preventDefault();
            itemToRemove = event.target.closest('.mini-card-item');
            if (shouldShowPopup()) {
                confirmationPopup.style.display = 'block';
                popupOverlay.style.display = 'block';
            } else {
                itemToRemove.remove();
                updateMiniCardVisibility();
                updateCartBadge();
                updateSubtotal();
            }
        }
    }

    /**
     * Conferma la rimozione di un articolo dal carrello
     */
    function confirmRemoveItem() {
        if (itemToRemove) {
            itemToRemove.remove();
            updateMiniCardVisibility();
            updateCartBadge(); // Aggiorna il badge qui
            updateSubtotal(); // Aggiorna il subtotale
            closePopup();
        }
    }

    /**
     * Aggiorna la taglia selezionata nella mini-card
     */
    function updateSelectedSizeDisplay() {
        const selectedSizeDisplay = document.getElementById('selected-size');
        const selectedSize = sizeSelect.value;
        if (selectedSize !== 'selectSize') {
            selectedSizeDisplay.textContent = selectedSize;
        }
    }

    /**
     * Mostra o nasconde il footer della mini-card in base allo stato del carrello
     */
    function toggleMiniCardFooter() {
        const isEmptyMessageHidden = window.getComputedStyle(emptyMessage).display === 'none';
        const miniCardFooter = document.querySelector('.mini-card-footer');
        miniCardFooter.style.display = isEmptyMessageHidden ? 'flex' : 'none';
    }

    /**
     * Determina se il pop-up deve essere mostrato in base alla larghezza dello schermo
     * @returns {boolean} - `true` se la larghezza dello schermo è superiore a 1024px, `false` altrimenti
     */
    function shouldShowPopup() {
        return window.innerWidth > 1024;
    }

    /**
     * Chiude il pop-up di conferma e nasconde lo sfondo
     */
    function closePopup() {
        confirmationPopup.style.display = 'none';
        popupOverlay.style.display = 'none';
    }
});