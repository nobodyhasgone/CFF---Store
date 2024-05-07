// /* Aggiunge le mini-card nel carrello*/
// document.addEventListener('DOMContentLoaded', function() {
//     const addButton = document.querySelector('.button-size');
//     const miniCardContainer = document.querySelector('.mini-card-container');
//     const sizeSelect = document.getElementById('size-select');
//     const emptyMessage = document.querySelector('.cart-empty-message'); // Seleziona il messaggio del carrello vuoto

//     addButton.addEventListener('click', function(event) {
//         event.preventDefault();
//         const selectedSize = sizeSelect.value;
//         if (selectedSize !== "selectSize") {
//             miniCardContainer.style.display = 'block'; // Mostra il container del mini-card
//             emptyMessage.style.display = 'none'; // Nasconde il messaggio "carrello vuoto"
//         } else {
//             alert("Please select a size before adding to cart.");
//         }
//     });
// });

// /* Seleziona la taglia e falla comparire nel mini-cart*/
// document.addEventListener('DOMContentLoaded', function() {
//     const sizeSelect = document.getElementById('size-select');
//     const selectedSizeDisplay = document.getElementById('selected-size');
//     const addButton = document.querySelector('.button-size');
//     const miniCardContainer = document.querySelector('.mini-card-container');
//     const cartEmptyMessage = document.querySelector('.cart-empty-message');

//     // Funzione per aggiornare la taglia selezionata
//     sizeSelect.addEventListener('change', function() {
//         const selectedSize = sizeSelect.value;
//         if (selectedSize !== "selectSize") {
//             selectedSizeDisplay.textContent = selectedSize;
//         }
//     });

//     // Funzione per aggiungere l'articolo al carrello
//     addButton.addEventListener('click', function(event) {
//         event.preventDefault();
//         const selectedSize = sizeSelect.value;
//         if (selectedSize !== "selectSize") {
//             miniCardContainer.style.display = 'block'; // Mostra il container
//             cartEmptyMessage.style.display = 'none'; // Nasconde il messaggio di carrello vuoto
//         } else {
//             alert("Please select a size before adding to cart.");
//         }
//     });
// });

// /* Pop-up prima del Remove e Remove Items */
// document.addEventListener('DOMContentLoaded', function() {
//     const addButton = document.querySelector('.button-size');
//     const miniCardContainer = document.querySelector('.mini-card-container');
//     const sizeSelect = document.getElementById('size-select');
//     const cartEmptyMessage = document.querySelector('.cart-empty-message');
//     const confirmationPopup = document.getElementById('confirmationPopup');
//     const confirmRemoveButton = document.getElementById('confirmRemove');
//     const cancelRemoveButton = document.getElementById('cancelRemove');
//     let itemToRemove = null;

//     // Funzione per aggiungere l'articolo al carrello
//     addButton.addEventListener('click', function(event) {
//         event.preventDefault();
//         const selectedSize = sizeSelect.value;
//         if (selectedSize !== "selectSize") {
//             miniCardContainer.style.display = 'block'; // Mostra il container
//             cartEmptyMessage.style.display = 'none'; // Nasconde il messaggio di carrello vuoto
//         } else {
//             alert("Please select a size before adding to cart.");
//         }
//     });

//     // Funzione per aprire il pop-up di conferma
//     document.addEventListener('click', function(event) {
//         if (event.target.closest('.remove-item')) {
//             event.preventDefault();
//             itemToRemove = miniCardContainer;
//             confirmationPopup.style.display = 'block';
//         }
//     });

//     // Funzione per confermare la rimozione dell'articolo
//     confirmRemoveButton.addEventListener('click', function() {
//         if (itemToRemove) {
//             itemToRemove.style.display = 'none';
//             cartEmptyMessage.style.display = 'block'; // Mostra il messaggio di carrello vuoto
//             confirmationPopup.style.display = 'none';
//         }
//     });

//     // Funzione per annullare la rimozione
//     cancelRemoveButton.addEventListener('click', function() {
//         confirmationPopup.style.display = 'none';
//     });

//     // Funzione per aggiornare la taglia selezionata
//     sizeSelect.addEventListener('change', function() {
//         const selectedSizeDisplay = document.getElementById('selected-size');
//         const selectedSize = sizeSelect.value;
//         if (selectedSize !== "selectSize") {
//             selectedSizeDisplay.textContent = selectedSize;
//         }
//     });
// });

// /* Background-overlay pop-up e gestione X di chiusura pop-up */
// document.addEventListener('DOMContentLoaded', function() {
//     const addButton = document.querySelector('.button-size');
//     const miniCardContainer = document.querySelector('.mini-card-container');
//     const sizeSelect = document.getElementById('size-select');
//     const cartEmptyMessage = document.querySelector('.cart-empty-message');
//     const confirmationPopup = document.getElementById('confirmationPopup');
//     const confirmRemoveButton = document.getElementById('confirmRemove');
//     const cancelRemoveButton = document.getElementById('cancelRemove');
//     const popupOverlay = document.getElementById('popupOverlay');
//     const popupCloseButton = document.getElementById('popupClose');
//     let itemToRemove = null;

//     // Funzione per aggiungere l'articolo al carrello
//     addButton.addEventListener('click', function(event) {
//         event.preventDefault();
//         const selectedSize = sizeSelect.value;
//         if (selectedSize !== "selectSize") {
//             miniCardContainer.style.display = 'block'; // Mostra il container
//             cartEmptyMessage.style.display = 'none'; // Nasconde il messaggio di carrello vuoto
//         } else {
//             alert("Please select a size before adding to cart.");
//         }
//     });

//     // Funzione per aprire il pop-up di conferma
//     document.addEventListener('click', function(event) {
//         if (event.target.closest('.remove-item')) {
//             event.preventDefault();
//             itemToRemove = miniCardContainer;
//             confirmationPopup.style.display = 'block';
//             popupOverlay.style.display = 'block';
//         }
//     });

//     // Funzione per confermare la rimozione dell'articolo
//     confirmRemoveButton.addEventListener('click', function() {
//         if (itemToRemove) {
//             itemToRemove.style.display = 'none';
//             cartEmptyMessage.style.display = 'block'; // Mostra il messaggio di carrello vuoto
//             confirmationPopup.style.display = 'none';
//             popupOverlay.style.display = 'none';
//         }
//     });

//     // Funzione per annullare la rimozione e chiudere il pop-up
//     cancelRemoveButton.addEventListener('click', function() {
//         confirmationPopup.style.display = 'none';
//         popupOverlay.style.display = 'none';
//     });

//     // Funzione per chiudere il pop-up tramite la X di chiusura
//     popupCloseButton.addEventListener('click', function() {
//         confirmationPopup.style.display = 'none';
//         popupOverlay.style.display = 'none';
//     });

//     // Funzione per aggiornare la taglia selezionata
//     sizeSelect.addEventListener('change', function() {
//         const selectedSizeDisplay = document.getElementById('selected-size');
//         const selectedSize = sizeSelect.value;
//         if (selectedSize !== "selectSize") {
//             selectedSizeDisplay.textContent = selectedSize;
//         }
//     });
// });

// /* Click sulla matita (edit) e comparsa di save e cancel */
// document.addEventListener('DOMContentLoaded', function() {
//     // Seleziona tutte le icone di modifica
//     const editButtons = document.querySelectorAll('.primary__edit');

//     // Evento per mostrare i pulsanti "Save" e "Cancel"
//     editButtons.forEach(editButton => {
//         editButton.addEventListener('click', function(event) {
//             event.preventDefault();
//             const primaryContainer = this.parentElement; // .primary
//             const productActions = primaryContainer.parentElement; // .product-actions
//             const editActions = productActions.querySelector('.edit-actions'); // .edit-actions

//             console.log('Primary container:', primaryContainer);
//             console.log('Edit actions:', editActions);

//             this.style.display = 'none'; // Nasconde l'icona "Edit"
//             editActions.style.display = 'flex'; // Mostra i pulsanti "Save" e "Cancel"
//         });
//     });
// });

// /* Aggiunge select di quantità, save e cancel */
// document.addEventListener('DOMContentLoaded', function() {
//     const editButton = document.querySelector('.primary__edit');
//     const saveButton = document.querySelector('.save-edit');
//     const cancelButton = document.querySelector('.cancel-edit');
//     const activeOptionList = document.querySelector('.product-option-list--active');
//     const disabledOptionList = document.querySelector('.product-option-list--disabled');

//     // Evento per mostrare l'opzione di modifica quantità
//     editButton.addEventListener('click', function(event) {
//         event.preventDefault();
//         console.log("Primary container:", this);
//         const editActions = this.nextElementSibling;

//         activeOptionList.style.display = 'none';
//         disabledOptionList.style.display = 'flex';
//         this.style.display = 'none';
//         editActions.style.display = 'flex';
//     });

//     // Evento per salvare le modifiche
//     saveButton.addEventListener('click', function(event) {
//         event.preventDefault();
//         const quantitySelect = document.querySelector('#quantity-select');
//         const selectedQuantity = quantitySelect.value;
//         const unitPrice = 2775;
//         const totalPrice = unitPrice * selectedQuantity;

//         document.querySelector('#quantity-number').innerText = selectedQuantity;
//         document.querySelector('#unit-price').innerText = `€${totalPrice.toLocaleString()}`;

//         activeOptionList.style.display = 'flex';
//         disabledOptionList.style.display = 'none';
//         editButton.style.display = 'inline-block';
//         this.parentElement.style.display = 'none';
//     });

//     // Evento per annullare le modifiche
//     cancelButton.addEventListener('click', function(event) {
//         event.preventDefault();
//         activeOptionList.style.display = 'flex';
//         disabledOptionList.style.display = 'none';
//         editButton.style.display = 'inline-block';
//         this.parentElement.style.display = 'none';
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const addButton = document.querySelector('.button-size');
//     const miniCardContainer = document.getElementById('miniCardContainer');
//     const miniCardList = document.getElementById('miniCardList');
//     const sizeSelect = document.getElementById('size-select');
//     const emptyMessage = document.querySelector('.cart-empty-message');
//     const confirmationPopup = document.getElementById('confirmationPopup');
//     const confirmRemoveButton = document.getElementById('confirmRemove');
//     const cancelRemoveButton = document.getElementById('cancelRemove');
//     let itemToRemove = null;

//     // Funzione per aggiungere o aggiornare una mini-card
//     function addOrUpdateMiniCard(size, price, quantity) {
//         let existingCard = Array.from(miniCardList.children).find(card => {
//             return card.querySelector('.product-option-list dd').textContent === size;
//         });

//         if (existingCard) {
//             // Aggiorna la quantità e il prezzo della mini-card esistente
//             const quantityDisplay = existingCard.querySelector('#quantity-number');
//             const unitPriceDisplay = existingCard.querySelector('#unit-price');
//             let currentQuantity = parseInt(quantityDisplay.textContent);
//             currentQuantity += quantity;
//             quantityDisplay.textContent = currentQuantity;
//             unitPriceDisplay.textContent = `€${(price * currentQuantity).toLocaleString()}`;
//         } else {
//             // Crea una nuova mini-card
//             const newMiniCard = document.createElement('li');
//             newMiniCard.className = 'mini-card-item';
//             newMiniCard.innerHTML = `
//                 <div class="minicart-container">
//                     <ol class="minicart-items">
//                         <li class="product-item">
//                             <div class="product">
//                                 <span class="product-image-container"></span>
//                                 <div class="product-item-details">
//                                     <strong class="product-name">LUMBERJACK JACKET</strong>
//                                     <div class="product-item-material">Sandal suede shearling Lumberjack Jacket</div>
//                                     <div class="product-item-options">
//                                         <dl class="product-option-list">
//                                             <dt class="label">Color:</dt>
//                                             <dd class="values">Sandal/Cream</dd>
//                                         </dl>
//                                         <dl class="product-option-list">
//                                             <dt class="label">Size:</dt>
//                                             <dd class="values">${size}</dd>
//                                         </dl>
//                                         <dl class="product-option-list product-option-list--active">
//                                             <dt class="product-option-list__label">Qty:</dt>
//                                             <dd class="product-option-list__values" id="quantity-display">
//                                                 <span id="quantity-number">${quantity}</span>
//                                                 <span class="quantity-multiplier">x</span>
//                                                 <span id="unit-price">€${price.toLocaleString()}</span>
//                                             </dd>
//                                         </dl>
//                                         <dl class="product-option-list product-option-list--disabled" style="display: none;">
//                                             <dd class="product-option-list__values">
//                                                 <span class="quantity-edit">
//                                                     <label for="quantity-select" class="product-option-list__label">Qty:</label>
//                                                     <select name="quantity" id="quantity-select" class="quantity-select">
//                                                         <option value="1">1</option>
//                                                         <option value="2">2</option>
//                                                         <option value="3">3</option>
//                                                         <option value="4">4</option>
//                                                         <option value="5">5</option>
//                                                         <option value="6">6</option>
//                                                         <option value="7">7</option>
//                                                         <option value="8">8</option>
//                                                         <option value="9">9</option>
//                                                         <option value="10">10</option>
//                                                     </select>
//                                                 </span>
//                                                 <span class="quantity-multiplier">x</span>
//                                                 <span id="unit-price-disabled">€${price.toLocaleString()}</span>
//                                             </dd>
//                                         </dl>
//                                     </div>
//                                 </div>
//                                 <div class="product-item-actions">
//                                     <div class="product-actions">
//                                         <div class="secondary">
//                                             <a href="#" class="remove-item"><span>Remove</span></a>
//                                         </div>
//                                         <div class="primary">
//                                             <div class="edit-actions" style="display: none;">
//                                                 <a href="#" class="save-edit">Save</a>
//                                                 <a href="#" class="cancel-edit">Cancel</a>
//                                             </div>
//                                             <a href="#"><span class="primary__edit"></span></a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </li>
//                     </ol>
//                 </div>
//             `;
//             miniCardList.appendChild(newMiniCard);
//             initializeEditEvents(newMiniCard);
//         }
//     }

//     // Funzione per aggiornare la visibilità del mini-card container
//     function updateMiniCardVisibility() {
//         if (miniCardList.children.length > 0) {
//             miniCardContainer.style.display = 'block';
//             emptyMessage.style.display = 'none';
//         } else {
//             miniCardContainer.style.display = 'none';
//             emptyMessage.style.display = 'block';
//         }
//     }

//     // Aggiungi evento al pulsante "Add to Cart"
//     addButton.addEventListener('click', function (event) {
//         event.preventDefault();
//         const selectedSize = sizeSelect.value;
//         const price = 2775;
//         const quantity = 1;

//         if (selectedSize !== 'selectSize') {
//             addOrUpdateMiniCard(selectedSize, price, quantity);
//             updateMiniCardVisibility();
//         } else {
//             alert('Please select a size before adding to cart.');
//         }
//     });

//     // Pop-up per confermare la rimozione dell'articolo
//     document.addEventListener('click', function (event) {
//         if (event.target.closest('.remove-item')) {
//             event.preventDefault();
//             itemToRemove = event.target.closest('.mini-card-item');
//             confirmationPopup.style.display = 'block';
//         }
//     });

//     confirmRemoveButton.addEventListener('click', function () {
//         if (itemToRemove) {
//             itemToRemove.remove();
//             updateMiniCardVisibility();
//             confirmationPopup.style.display = 'none';
//         }
//     });

//     cancelRemoveButton.addEventListener('click', function () {
//         confirmationPopup.style.display = 'none';
//     });

//     // Funzione per chiudere il pop-up tramite la X di chiusura
//     document.getElementById('popupClose').addEventListener('click', function () {
//         confirmationPopup.style.display = 'none';
//     });

//     // Aggiorna la taglia selezionata nella mini-card
//     sizeSelect.addEventListener('change', function () {
//         const selectedSizeDisplay = document.getElementById('selected-size');
//         const selectedSize = sizeSelect.value;
//         if (selectedSize !== 'selectSize') {
//             selectedSizeDisplay.textContent = selectedSize;
//         }
//     });

//     // Inizializza eventi di modifica sulle nuove mini-card
//     function initializeEditEvents(miniCard) {
//         const editButton = miniCard.querySelector('.primary__edit');
//         const saveButton = miniCard.querySelector('.save-edit');
//         const cancelButton = miniCard.querySelector('.cancel-edit');
//         const activeOptionList = miniCard.querySelector('.product-option-list--active');
//         const disabledOptionList = miniCard.querySelector('.product-option-list--disabled');

//         editButton.addEventListener('click', function (event) {
//             event.preventDefault();
//             editButton.style.display = 'none';
//             disabledOptionList.style.display = 'flex';
//             activeOptionList.style.display = 'none';
//             miniCard.querySelector('.edit-actions').style.display = 'flex';
//         });

//         saveButton.addEventListener('click', function (event) {
//             event.preventDefault();
//             const quantitySelect = miniCard.querySelector('#quantity-select');
//             const selectedQuantity = parseInt(quantitySelect.value);
//             const unitPrice = 2775;
//             const totalPrice = unitPrice * selectedQuantity;

//             miniCard.querySelector('#quantity-number').innerText = selectedQuantity;
//             miniCard.querySelector('#unit-price').innerText = `€${totalPrice.toLocaleString()}`;

//             activeOptionList.style.display = 'flex';
//             disabledOptionList.style.display = 'none';
//             editButton.style.display = 'inline-block';
//             saveButton.parentElement.style.display = 'none';
//         });

//         cancelButton.addEventListener('click', function (event) {
//             event.preventDefault();
//             activeOptionList.style.display = 'flex';
//             disabledOptionList.style.display = 'none';
//             editButton.style.display = 'inline-block';
//             cancelButton.parentElement.style.display = 'none';
//         });
//     }

//     // Inizializza gli eventi di modifica per le mini-card esistenti
//     Array.from(miniCardList.children).forEach(initializeEditEvents);
// });


// document.addEventListener('DOMContentLoaded', function () {
//     const addButton = document.querySelector('.button-size');
//     const miniCardContainer = document.getElementById('miniCardContainer');
//     const miniCardList = document.getElementById('miniCardList');
//     const sizeSelect = document.getElementById('size-select');
//     const emptyMessage = document.querySelector('.cart-empty-message');
//     const confirmationPopup = document.getElementById('confirmationPopup');
//     const confirmRemoveButton = document.getElementById('confirmRemove');
//     const cancelRemoveButton = document.getElementById('cancelRemove');
//     const cartIconBadge = document.getElementById('cartIconBadge');
//     let itemToRemove = null;

//     // Funzione per aggiungere o aggiornare una mini-card
//     function addOrUpdateMiniCard(size, price, quantity) {
//         let existingCard = Array.from(miniCardList.children).find(card => {
//             return card.querySelector('.product-option-list dd').textContent === size;
//         });

//         if (existingCard) {
//             // Aggiorna la quantità e il prezzo della mini-card esistente
//             const quantityDisplay = existingCard.querySelector('#quantity-number');
//             const unitPriceDisplay = existingCard.querySelector('#unit-price');
//             let currentQuantity = parseInt(quantityDisplay.textContent);
//             currentQuantity += quantity;
//             quantityDisplay.textContent = currentQuantity;
//             unitPriceDisplay.textContent = `€${(price * currentQuantity).toLocaleString()}`;
//         } else {
//             // Crea una nuova mini-card
//             const newMiniCard = document.createElement('li');
//             newMiniCard.className = 'mini-card-item';
//             newMiniCard.innerHTML = `
//                 <div class="minicart-container">
//                     <ol class="minicart-items">
//                         <li class="product-item">
//                             <div class="product">
//                                 <span class="product-image-container"></span>
//                                 <div class="product-item-details">
//                                     <strong class="product-name">LUMBERJACK JACKET</strong>
//                                     <div class="product-item-material">Sandal suede shearling Lumberjack Jacket</div>
//                                     <div class="product-item-options">
//                                         <dl class="product-option-list">
//                                             <dt class="label">Color:</dt>
//                                             <dd class="values">Sandal/Cream</dd>
//                                         </dl>
//                                         <dl class="product-option-list">
//                                             <dt class="label">Size:</dt>
//                                             <dd class="values">${size}</dd>
//                                         </dl>
//                                         <dl class="product-option-list product-option-list--active">
//                                             <dt class="product-option-list__label">Qty:</dt>
//                                             <dd class="product-option-list__values" id="quantity-display">
//                                                 <span id="quantity-number">${quantity}</span>
//                                                 <span class="quantity-multiplier">x</span>
//                                                 <span id="unit-price">€${price.toLocaleString()}</span>
//                                             </dd>
//                                         </dl>
//                                         <dl class="product-option-list product-option-list--disabled" style="display: none;">
//                                             <dd class="product-option-list__values">
//                                                 <span class="quantity-edit">
//                                                     <label for="quantity-select" class="product-option-list__label">Qty:</label>
//                                                     <select name="quantity" id="quantity-select" class="quantity-select">
//                                                         <option value="1">1</option>
//                                                         <option value="2">2</option>
//                                                         <option value="3">3</option>
//                                                         <option value="4">4</option>
//                                                         <option value="5">5</option>
//                                                         <option value="6">6</option>
//                                                         <option value="7">7</option>
//                                                         <option value="8">8</option>
//                                                         <option value="9">9</option>
//                                                         <option value="10">10</option>
//                                                     </select>
//                                                 </span>
//                                                 <span class="quantity-multiplier">x</span>
//                                                 <span id="unit-price-disabled">€${price.toLocaleString()}</span>
//                                             </dd>
//                                         </dl>
//                                     </div>
//                                 </div>
//                                 <div class="product-item-actions">
//                                     <div class="product-actions">
//                                         <div class="secondary">
//                                             <a href="#" class="remove-item"><span>Remove</span></a>
//                                         </div>
//                                         <div class="primary">
//                                             <div class="edit-actions" style="display: none;">
//                                                 <a href="#" class="save-edit">Save</a>
//                                                 <a href="#" class="cancel-edit">Cancel</a>
//                                             </div>
//                                             <a href="#"><span class="primary__edit"></span></a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </li>
//                     </ol>
//                 </div>
//             `;
//             miniCardList.appendChild(newMiniCard);
//             initializeEditEvents(newMiniCard);
//         }
//     }

//     // Funzione per aggiornare la visibilità del mini-card container
//     function updateMiniCardVisibility() {
//         if (miniCardList.children.length > 0) {
//             miniCardContainer.style.display = 'block';
//             emptyMessage.style.display = 'none';
//         } else {
//             miniCardContainer.style.display = 'none';
//             emptyMessage.style.display = 'block';
//         }
//     }

//     // Aggiungi evento al pulsante "Add to Cart"
//     addButton.addEventListener('click', function (event) {
//         event.preventDefault();
//         const selectedSize = sizeSelect.value;
//         const price = 2775;
//         const quantity = 1;

//         if (selectedSize !== 'selectSize') {
//             addOrUpdateMiniCard(selectedSize, price, quantity);
//             updateMiniCardVisibility();
//             updateCartBadge(); // Aggiorna il badge qui
//         } else {
//             alert('Please select a size before adding to cart.');
//         }
//     });

//     // Pop-up per confermare la rimozione dell'articolo
//     document.addEventListener('click', function (event) {
//         if (event.target.closest('.remove-item')) {
//             event.preventDefault();
//             itemToRemove = event.target.closest('.mini-card-item');
//             confirmationPopup.style.display = 'block';
//         }
//     });

//     confirmRemoveButton.addEventListener('click', function () {
//         if (itemToRemove) {
//             itemToRemove.remove();
//             updateMiniCardVisibility();
//             updateCartBadge(); // Aggiorna il badge qui
//             confirmationPopup.style.display = 'none';
//         }
//     });

//     cancelRemoveButton.addEventListener('click', function () {
//         confirmationPopup.style.display = 'none';
//     });

//     // Funzione per chiudere il pop-up tramite la X di chiusura
//     document.getElementById('popupClose').addEventListener('click', function () {
//         confirmationPopup.style.display = 'none';
//     });

//     // Aggiorna la taglia selezionata nella mini-card
//     sizeSelect.addEventListener('change', function () {
//         const selectedSizeDisplay = document.getElementById('selected-size');
//         const selectedSize = sizeSelect.value;
//         if (selectedSize !== 'selectSize') {
//             selectedSizeDisplay.textContent = selectedSize;
//         }
//     });

//     // Inizializza eventi di modifica sulle nuove mini-card
//     function initializeEditEvents(miniCard) {
//         const editButton = miniCard.querySelector('.primary__edit');
//         const saveButton = miniCard.querySelector('.save-edit');
//         const cancelButton = miniCard.querySelector('.cancel-edit');
//         const activeOptionList = miniCard.querySelector('.product-option-list--active');
//         const disabledOptionList = miniCard.querySelector('.product-option-list--disabled');

//         editButton.addEventListener('click', function (event) {
//             event.preventDefault();
//             editButton.style.display = 'none';
//             disabledOptionList.style.display = 'flex';
//             activeOptionList.style.display = 'none';
//             miniCard.querySelector('.edit-actions').style.display = 'flex';
//         });

//         saveButton.addEventListener('click', function (event) {
//             event.preventDefault();
//             const quantitySelect = miniCard.querySelector('#quantity-select');
//             const selectedQuantity = parseInt(quantitySelect.value);
//             const unitPrice = 2775;
//             const totalPrice = unitPrice * selectedQuantity;

//             miniCard.querySelector('#quantity-number').innerText = selectedQuantity;
//             miniCard.querySelector('#unit-price').innerText = `€${totalPrice.toLocaleString()}`;

//             activeOptionList.style.display = 'flex';
//             disabledOptionList.style.display = 'none';
//             editButton.style.display = 'inline-block';
//             saveButton.parentElement.style.display = 'none';
//         });

//         cancelButton.addEventListener('click', function (event) {
//             event.preventDefault();
//             activeOptionList.style.display = 'flex';
//             disabledOptionList.style.display = 'none';
//             editButton.style.display = 'inline-block';
//             cancelButton.parentElement.style.display = 'none';
//         });
//     }

//     // Inizializza gli eventi di modifica per le mini-card esistenti
//     Array.from(miniCardList.children).forEach(initializeEditEvents);

//     // Funzione per aggiornare il badge dell'icona Cart
//     function updateCartBadge() {
//         const totalItems = Array.from(miniCardList.children).reduce((acc, card) => {
//             const quantity = parseInt(card.querySelector('#quantity-number').textContent);
//             return acc + quantity;
//         }, 0);

//         cartIconBadge.textContent = totalItems;
//         cartIconBadge.style.display = totalItems > 0 ? 'flex' : 'none';
//     }

//     // Inizializza il badge all'avvio
//     updateCartBadge();
// });


// document.addEventListener('DOMContentLoaded', function () {
//     const addButton = document.querySelector('.button-size');
//     const miniCardContainer = document.getElementById('miniCardContainer');
//     const miniCardList = document.getElementById('miniCardList');
//     const sizeSelect = document.getElementById('size-select');
//     const emptyMessage = document.querySelector('.cart-empty-message');
//     const confirmationPopup = document.getElementById('confirmationPopup');
//     const confirmRemoveButton = document.getElementById('confirmRemove');
//     const cancelRemoveButton = document.getElementById('cancelRemove');
//     const cartIconBadge = document.getElementById('cartIconBadge');
//     let itemToRemove = null;

//     // Funzione per aggiungere o aggiornare una mini-card
//     function addOrUpdateMiniCard(size, price, quantity) {
//         let existingCard = Array.from(miniCardList.children).find(card => {
//             return card.querySelector('.product-option-list dd').textContent === size;
//         });

//         if (existingCard) {
//             // Aggiorna la quantità e il prezzo della mini-card esistente
//             const quantityDisplay = existingCard.querySelector('#quantity-number');
//             const unitPriceDisplay = existingCard.querySelector('#unit-price');
//             let currentQuantity = parseInt(quantityDisplay.textContent);
//             currentQuantity += quantity;
//             quantityDisplay.textContent = currentQuantity;
//             unitPriceDisplay.textContent = `€${(price * currentQuantity).toLocaleString()}`;
//         } else {
//             // Crea una nuova mini-card
//             const newMiniCard = document.createElement('li');
//             newMiniCard.className = 'mini-card-item';
//             newMiniCard.innerHTML = `
//                 <div class="minicart-container">
//                     <ol class="minicart-items">
//                         <li class="product-item">
//                             <div class="product">
//                                 <span class="product-image-container"></span>
//                                 <div class="product-item-details">
//                                     <strong class="product-name">LUMBERJACK JACKET</strong>
//                                     <div class="product-item-material">Sandal suede shearling Lumberjack Jacket</div>
//                                     <div class="product-item-options">
//                                         <dl class="product-option-list">
//                                             <dt class="label">Color:</dt>
//                                             <dd class="values">Sandal/Cream</dd>
//                                         </dl>
//                                         <dl class="product-option-list">
//                                             <dt class="label">Size:</dt>
//                                             <dd class="values">${size}</dd>
//                                         </dl>
//                                         <dl class="product-option-list product-option-list--active">
//                                             <dt class="product-option-list__label">Qty:</dt>
//                                             <dd class="product-option-list__values" id="quantity-display">
//                                                 <span id="quantity-number">${quantity}</span>
//                                                 <span class="quantity-multiplier">x</span>
//                                                 <span id="unit-price">€${price.toLocaleString()}</span>
//                                             </dd>
//                                         </dl>
//                                         <dl class="product-option-list product-option-list--disabled" style="display: none;">
//                                             <dd class="product-option-list__values">
//                                                 <span class="quantity-edit">
//                                                     <label for="quantity-select" class="product-option-list__label">Qty:</label>
//                                                     <select name="quantity" id="quantity-select" class="quantity-select">
//                                                         <option value="1">1</option>
//                                                         <option value="2">2</option>
//                                                         <option value="3">3</option>
//                                                         <option value="4">4</option>
//                                                         <option value="5">5</option>
//                                                         <option value="6">6</option>
//                                                         <option value="7">7</option>
//                                                         <option value="8">8</option>
//                                                         <option value="9">9</option>
//                                                         <option value="10">10</option>
//                                                     </select>
//                                                 </span>
//                                                 <span class="quantity-multiplier">x</span>
//                                                 <span id="unit-price-disabled">€${price.toLocaleString()}</span>
//                                             </dd>
//                                         </dl>
//                                     </div>
//                                 </div>
//                                 <div class="product-item-actions">
//                                     <div class="product-actions">
//                                         <div class="secondary">
//                                             <a href="#" class="remove-item"><span>Remove</span></a>
//                                         </div>
//                                         <div class="primary">
//                                             <div class="edit-actions" style="display: none;">
//                                                 <a href="#" class="save-edit">Save</a>
//                                                 <a href="#" class="cancel-edit">Cancel</a>
//                                             </div>
//                                             <a href="#"><span class="primary__edit"></span></a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </li>
//                     </ol>
//                 </div>
//             `;
//             miniCardList.appendChild(newMiniCard);
//             initializeEditEvents(newMiniCard);
//         }
//     }

//     // Funzione per aggiornare la visibilità del mini-card container
//     function updateMiniCardVisibility() {
//         if (miniCardList.children.length > 0) {
//             miniCardContainer.style.display = 'block';
//             emptyMessage.style.display = 'none';
//         } else {
//             miniCardContainer.style.display = 'none';
//             emptyMessage.style.display = 'block';
//         }
//     }

//     // Aggiungi evento al pulsante "Add to Cart"
//     addButton.addEventListener('click', function (event) {
//         event.preventDefault();
//         const selectedSize = sizeSelect.value;
//         const price = 2775;
//         const quantity = 1;

//         if (selectedSize !== 'selectSize') {
//             addOrUpdateMiniCard(selectedSize, price, quantity);
//             updateMiniCardVisibility();
//             updateCartBadge(); // Aggiorna il badge qui
//         } else {
//             alert('Please select a size before adding to cart.');
//         }
//     });

//     // Pop-up per confermare la rimozione dell'articolo
//     document.addEventListener('click', function (event) {
//         if (event.target.closest('.remove-item')) {
//             event.preventDefault();
//             itemToRemove = event.target.closest('.mini-card-item');
//             confirmationPopup.style.display = 'block';
//         }
//     });

//     confirmRemoveButton.addEventListener('click', function () {
//         if (itemToRemove) {
//             itemToRemove.remove();
//             updateMiniCardVisibility();
//             updateCartBadge(); // Aggiorna il badge qui
//             confirmationPopup.style.display = 'none';
//         }
//     });

//     cancelRemoveButton.addEventListener('click', function () {
//         confirmationPopup.style.display = 'none';
//     });

//     // Funzione per chiudere il pop-up tramite la X di chiusura
//     document.getElementById('popupClose').addEventListener('click', function () {
//         confirmationPopup.style.display = 'none';
//     });

//     // Aggiorna la taglia selezionata nella mini-card
//     sizeSelect.addEventListener('change', function () {
//         const selectedSizeDisplay = document.getElementById('selected-size');
//         const selectedSize = sizeSelect.value;
//         if (selectedSize !== 'selectSize') {
//             selectedSizeDisplay.textContent = selectedSize;
//         }
//     });

//     // Inizializza eventi di modifica sulle nuove mini-card
//     function initializeEditEvents(miniCard) {
//         const editButton = miniCard.querySelector('.primary__edit');
//         const saveButton = miniCard.querySelector('.save-edit');
//         const cancelButton = miniCard.querySelector('.cancel-edit');
//         const activeOptionList = miniCard.querySelector('.product-option-list--active');
//         const disabledOptionList = miniCard.querySelector('.product-option-list--disabled');

//         editButton.addEventListener('click', function (event) {
//             event.preventDefault();
//             editButton.style.display = 'none';
//             disabledOptionList.style.display = 'flex';
//             activeOptionList.style.display = 'none';
//             miniCard.querySelector('.edit-actions').style.display = 'flex';
//         });

//         saveButton.addEventListener('click', function (event) {
//             event.preventDefault();
//             const quantitySelect = miniCard.querySelector('#quantity-select');
//             const selectedQuantity = parseInt(quantitySelect.value);
//             const unitPrice = 2775;
//             const totalPrice = unitPrice * selectedQuantity;

//             miniCard.querySelector('#quantity-number').innerText = selectedQuantity;
//             miniCard.querySelector('#unit-price').innerText = `€${totalPrice.toLocaleString()}`;

//             activeOptionList.style.display = 'flex';
//             disabledOptionList.style.display = 'none';
//             editButton.style.display = 'inline-block';
//             saveButton.parentElement.style.display = 'none';

//             updateCartBadge(); // Aggiorna il badge qui
//         });

//         cancelButton.addEventListener('click', function (event) {
//             event.preventDefault();
//             activeOptionList.style.display = 'flex';
//             disabledOptionList.style.display = 'none';
//             editButton.style.display = 'inline-block';
//             cancelButton.parentElement.style.display = 'none';
//         });
//     }

//     // Inizializza gli eventi di modifica per le mini-card esistenti
//     Array.from(miniCardList.children).forEach(initializeEditEvents);

//     // Funzione per aggiornare il badge dell'icona Cart
//     function updateCartBadge() {
//         const totalItems = Array.from(miniCardList.children).reduce((acc, card) => {
//             const quantity = parseInt(card.querySelector('#quantity-number').textContent);
//             return acc + quantity;
//         }, 0);

//         cartIconBadge.textContent = totalItems;
//         cartIconBadge.style.display = totalItems > 0 ? 'flex' : 'none';
//     }

//     // Inizializza il badge all'avvio
//     updateCartBadge();
// });

document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.querySelector('.button-size');
    const miniCardContainer = document.getElementById('miniCardContainer');
    const miniCardList = document.getElementById('miniCardList');
    const sizeSelect = document.getElementById('size-select');
    const emptyMessage = document.querySelector('.cart-empty-message');
    const confirmationPopup = document.getElementById('confirmationPopup');
    const confirmRemoveButton = document.getElementById('confirmRemove');
    const cancelRemoveButton = document.getElementById('cancelRemove');
    const cartIconBadge = document.getElementById('cartIconBadge');
    const subtotalAmount = document.getElementById('subtotal-amount');
    let itemToRemove = null;

    // Funzione per aggiungere o aggiornare una mini-card
    function addOrUpdateMiniCard(size, price, quantity) {
        let existingCard = Array.from(miniCardList.children).find(card => {
            return card.querySelector('.product-option-list dd').textContent === size;
        });

        if (existingCard) {
            // Aggiorna la quantità e il prezzo della mini-card esistente
            const quantityDisplay = existingCard.querySelector('#quantity-number');
            const unitPriceDisplay = existingCard.querySelector('#unit-price');
            let currentQuantity = parseInt(quantityDisplay.textContent);
            currentQuantity += quantity;
            quantityDisplay.textContent = currentQuantity;
            unitPriceDisplay.textContent = `€${(price * currentQuantity).toLocaleString()}`;
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
                                                <span id="unit-price">€${price.toLocaleString()}</span>
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
                                                <span id="unit-price-disabled">€${price.toLocaleString()}</span>
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

    // Funzione per aggiornare la visibilità del mini-card container
    function updateMiniCardVisibility() {
        if (miniCardList.children.length > 0) {
            miniCardContainer.style.display = 'block';
            emptyMessage.style.display = 'none';
        } else {
            miniCardContainer.style.display = 'none';
            emptyMessage.style.display = 'block';
        }
    }

    // Funzione per aggiornare il subtotale
    function updateSubtotal() {
        const subtotal = Array.from(miniCardList.children).reduce((acc, card) => {
            const unitPrice = parseFloat(card.querySelector('#unit-price').textContent.replace('€', '').replace(',', ''));
            return acc + unitPrice;
        }, 0);

        subtotalAmount.textContent = `€${subtotal.toLocaleString()}`;
    }

    // Funzione per aggiornare il badge dell'icona Cart
    function updateCartBadge() {
        const totalItems = Array.from(miniCardList.children).reduce((acc, card) => {
            const quantity = parseInt(card.querySelector('#quantity-number').textContent);
            return acc + quantity;
        }, 0);

        cartIconBadge.textContent = totalItems;
        cartIconBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    // Aggiungi evento al pulsante "Add to Cart"
    addButton.addEventListener('click', function (event) {
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
    });

    // Pop-up per confermare la rimozione dell'articolo
    document.addEventListener('click', function (event) {
        if (event.target.closest('.remove-item')) {
            event.preventDefault();
            itemToRemove = event.target.closest('.mini-card-item');
            confirmationPopup.style.display = 'block';
        }
    });

    confirmRemoveButton.addEventListener('click', function () {
        if (itemToRemove) {
            itemToRemove.remove();
            updateMiniCardVisibility();
            updateCartBadge(); // Aggiorna il badge qui
            updateSubtotal(); // Aggiorna il subtotale
            confirmationPopup.style.display = 'none';
        }
    });

    cancelRemoveButton.addEventListener('click', function () {
        confirmationPopup.style.display = 'none';
    });

    // Funzione per chiudere il pop-up tramite la X di chiusura
    document.getElementById('popupClose').addEventListener('click', function () {
        confirmationPopup.style.display = 'none';
    });

    // Aggiorna la taglia selezionata nella mini-card
    sizeSelect.addEventListener('change', function () {
        const selectedSizeDisplay = document.getElementById('selected-size');
        const selectedSize = sizeSelect.value;
        if (selectedSize !== 'selectSize') {
            selectedSizeDisplay.textContent = selectedSize;
        }
    });

    // Inizializza eventi di modifica sulle nuove mini-card
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
            miniCard.querySelector('#unit-price').innerText = `€${totalPrice.toLocaleString()}`;

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

    // Inizializza gli eventi di modifica per le mini-card esistenti
    Array.from(miniCardList.children).forEach(initializeEditEvents);

    // Inizializza il badge e il subtotale all'avvio
    updateCartBadge();
    updateSubtotal();
});


document.addEventListener('DOMContentLoaded', function () {
    const emptyMessage = document.querySelector('.cart-empty-message');
    const miniCardFooter = document.querySelector('.mini-card-footer');

    function toggleMiniCardFooter() {
        const isEmptyMessageHidden = window.getComputedStyle(emptyMessage).display === 'none';
        miniCardFooter.style.display = isEmptyMessageHidden ? 'flex' : 'none';
    }

    // Inizializza lo stato del footer all'avvio
    toggleMiniCardFooter();

    // Osserva i cambiamenti allo stato del messaggio vuoto
    const observer = new MutationObserver(toggleMiniCardFooter);
    observer.observe(emptyMessage, { attributes: true, attributeFilter: ['style', 'class'] });
});
