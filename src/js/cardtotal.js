document.addEventListener('DOMContentLoaded', function () {
    function updateOrderTotal() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let subtotal = 0;

        cart.forEach(item => {
            const quantity = item.quantity || 1;
            subtotal += item.price * quantity;
        });

        const formattedSubtotal = `€ ${subtotal.toFixed(2)}`;
        const orderTotalElement = document.querySelector('.order-total');

        if (orderTotalElement) {
            orderTotalElement.querySelector('.order-total__value-1').textContent = formattedSubtotal;
            orderTotalElement.querySelector('.order-total__value-2').textContent = formattedSubtotal;
        }
    }

    // Aggiorna il totale dell'ordine al caricamento della pagina
    updateOrderTotal();
});
