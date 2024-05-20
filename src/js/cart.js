document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('.header-master-right__icon--cart');
    const cartPanel = document.querySelector('.cart-panel');
    const cartCloseIcon = document.querySelector('.cart-panel__close-icon');
    const overlay = document.querySelector('.overlay');

    if (cartIcon && cartPanel && cartCloseIcon && overlay) {
        cartIcon.addEventListener('click', () => {
            closeAllPanels();
            cartPanel.classList.toggle('cart-panel--active');
            overlay.classList.toggle('overlay--active', cartPanel.classList.contains('cart-panel--active'));
        });

        cartCloseIcon.addEventListener('click', (event) => {
            event.stopPropagation(); // Impedisce la propagazione del click
            cartPanel.classList.remove('cart-panel--active');
            overlay.classList.remove('overlay--active');
        });

        // Rimuovere l'event listener per l'overlay
        //overlay.addEventListener('click', () => {
        //    closeAllPanels();
        //});

        cartPanel.addEventListener('click', (event) => {
            event.stopPropagation(); // Impedisce la propagazione del click
        });
    }
});
