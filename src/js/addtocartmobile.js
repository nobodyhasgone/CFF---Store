document.addEventListener('DOMContentLoaded', function () {
    // Variabili Globali
    const DOM = {
        addButton: document.querySelector('.button-size'),
        miniCardContainer: document.getElementById('miniCardContainer__mobile'),
        miniCardList: document.getElementById('miniCardList__mobile'),
        sizeSelect: document.getElementById('size-select'),
        emptyMessage: document.querySelector('.cart-empty-message__mobile'),
        confirmationPopup: document.getElementById('confirmationPopup'),
        confirmRemoveButton: document.getElementById('confirmRemove__mobile'),
        cancelRemoveButton: document.getElementById('cancelRemove__mobile'),
        popupOverlay: document.getElementById('popupOverlay'),
        cartIconBadge: document.getElementById('cartIconBadge__mobile'),
        subtotalAmount: document.getElementById('subtotal-amount__mobile'),
        popupClose: document.getElementById('popupClose'),
        miniCardFooter: document.querySelector('.mini-card-footer__mobile')
    };
    let itemToRemove = null;
    const UNIT_PRICE = 2775;

    // Eventi
    DOM.addButton.addEventListener('click', handleAddToCart);
    document.addEventListener('click', handleRemoveItemPopup);
    DOM.confirmRemoveButton.addEventListener('click', confirmRemoveItem);
    DOM.cancelRemoveButton.addEventListener('click', closePopup);
    DOM.popupClose.addEventListener('click', closePopup);
    DOM.sizeSelect.addEventListener('change', updateSelectedSizeDisplay);
    Array.from(DOM.miniCardList.children).forEach(initializeEditEvents);

    // Inizializza il badge e il subtotale all'avvio
    updateCartBadge();
    updateSubtotal();
    toggleMiniCardFooter();

    // Osserva i cambiamenti allo stato del messaggio vuoto
    const observer = new MutationObserver(toggleMiniCardFooter);
    observer.observe(DOM.emptyMessage, { attributes: true, attributeFilter: ['style', 'class'] });

    function createMiniCard(size, price, quantity) {
        const newMiniCard = document.createElement('li');
        newMiniCard.className = 'mini-card-item';
        newMiniCard.innerHTML = `
            <div class="minicart-container">
                <ol class="minicart-items">
                    <li class="product-item">
                        <div class="product">
                            <span class="product-image-container"></span>
                            <div class="product-item-details">
                                <strong class="product-name">LUMBERJACK JACKET</strong>
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
                                                    ${Array.from({ length: 10 }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('')}
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
        initializeEditEvents(newMiniCard);
        return newMiniCard;
    }

    function addOrUpdateMiniCard(size, price, quantity) {
        const existingCard = Array.from(DOM.miniCardList.children).find(card => card.querySelector('.product-option-list dd').textContent === size);

        if (existingCard) {
            const quantityDisplay = existingCard.querySelector('#quantity-number');
            const unitPriceDisplay = existingCard.querySelector('#unit-price');
            let currentQuantity = parseInt(quantityDisplay.textContent);
            currentQuantity += quantity;
            quantityDisplay.textContent = currentQuantity;
            unitPriceDisplay.textContent = `€${(price * currentQuantity).toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        } else {
            const newCard = createMiniCard(size, price, quantity);
            DOM.miniCardList.appendChild(newCard);
        }

        updateSubtotal();
        updateCartBadge();
        toggleMiniCardFooter();
    }

    function initializeEditEvents(miniCard) {
        const editButton = miniCard.querySelector('.primary__edit');
        const saveButton = miniCard.querySelector('.save-edit');
        const cancelButton = miniCard.querySelector('.cancel-edit');
        const activeOptionList = miniCard.querySelector('.product-option-list--active');
        const disabledOptionList = miniCard.querySelector('.product-option-list--disabled');

        editButton.addEventListener('click', event => {
            event.preventDefault();
            editButton.style.display = 'none';
            disabledOptionList.style.display = 'flex';
            activeOptionList.style.display = 'none';
            miniCard.querySelector('.edit-actions').style.display = 'flex';
        });

        saveButton.addEventListener('click', event => {
            event.preventDefault();
            const quantitySelect = miniCard.querySelector('#quantity-select');
            const selectedQuantity = parseInt(quantitySelect.value);
            const totalPrice = UNIT_PRICE * selectedQuantity;

            miniCard.querySelector('#quantity-number').innerText = selectedQuantity;
            miniCard.querySelector('#unit-price').innerText = `€${totalPrice.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

            activeOptionList.style.display = 'flex';
            disabledOptionList.style.display = 'none';
            editButton.style.display = 'inline-block';
            saveButton.parentElement.style.display = 'none';

            updateCartBadge();
            updateSubtotal();
            toggleMiniCardFooter();
        });

        cancelButton.addEventListener('click', event => {
            event.preventDefault();
            activeOptionList.style.display = 'flex';
            disabledOptionList.style.display = 'none';
            editButton.style.display = 'inline-block';
            cancelButton.parentElement.style.display = 'none';
        });
    }

    function updateMiniCardVisibility() {
        const hasItems = DOM.miniCardList.children.length > 0;
        DOM.miniCardContainer.style.display = hasItems ? 'block' : 'none';
        DOM.emptyMessage.style.display = hasItems ? 'none' : 'block';
    }

    function updateSubtotal() {
        const subtotal = Array.from(DOM.miniCardList.children).reduce((acc, card) => {
            const unitPrice = parseFloat(card.querySelector('#unit-price').textContent.replace('€', '').replace(/\./g, '').replace(',', '.'));
            return acc + unitPrice;
        }, 0);

        DOM.subtotalAmount.textContent = `€${subtotal.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }

    function updateCartBadge() {
        const totalItems = Array.from(DOM.miniCardList.children).reduce((acc, card) => {
            const quantity = parseInt(card.querySelector('#quantity-number').textContent);
            return acc + quantity;
        }, 0);

        DOM.cartIconBadge.textContent = totalItems;
        DOM.cartIconBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    function handleAddToCart(event) {
        event.preventDefault();
        const selectedSize = DOM.sizeSelect.value;
        const quantity = 1;

        if (selectedSize !== 'selectSize') {
            addOrUpdateMiniCard(selectedSize, UNIT_PRICE, quantity);
            updateMiniCardVisibility();
        } else {
            alert('Please select a size before adding to cart.');
        }
    }

    function handleRemoveItemPopup(event) {
        if (event.target.closest('.remove-item')) {
            event.preventDefault();
            itemToRemove = event.target.closest('.mini-card-item');
            if (shouldShowPopup()) {
                DOM.confirmationPopup.style.display = 'block';
                DOM.popupOverlay.style.display = 'block';
            } else {
                itemToRemove.remove();
                updateMiniCardVisibility();
                updateCartBadge();
                updateSubtotal();
                toggleMiniCardFooter();
            }
        }
    }

    function confirmRemoveItem() {
        if (itemToRemove) {
            itemToRemove.remove();
            updateMiniCardVisibility();
            updateCartBadge();
            updateSubtotal();
            toggleMiniCardFooter();
            closePopup();
        }
    }

    function updateSelectedSizeDisplay() {
        const selectedSizeDisplay = document.getElementById('selected-size');
        const selectedSize = DOM.sizeSelect.value;
        if (selectedSize !== 'selectSize') {
            selectedSizeDisplay.textContent = selectedSize;
        }
    }

    function toggleMiniCardFooter() {
        const hasItems = DOM.miniCardList.children.length > 0;
        DOM.miniCardFooter.style.display = hasItems ? 'flex' : 'none';
    }

    function shouldShowPopup() {
        return window.innerWidth > 1024;
    }

    function closePopup() {
        DOM.confirmationPopup.style.display = 'none';
        DOM.popupOverlay.style.display = 'none';
    }
});

