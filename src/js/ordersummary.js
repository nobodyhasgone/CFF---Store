document.addEventListener('DOMContentLoaded', function () {
    const orderSummaryBar = document.querySelector('.order-summary__bar');
    const orderSummaryItems = document.querySelector('.order-summary__items');
    const orderSummaryToggleIcon = document.querySelector('.order-summary__toggle-icon');

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
});
