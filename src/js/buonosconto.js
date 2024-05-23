document.addEventListener('DOMContentLoaded', function () {
    const discountCoupons = [
        { code: 'SAVE10', discount: 0.10 }, // 10% di sconto
        { code: 'SAVE30', discount: 0.30 }, // 30% di sconto
        { code: 'FREESHIP', discount: 5.00 }, // 5 euro di sconto
    ];

    let appliedDiscount = 0;

    function calculateSubtotal() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let subtotal = 0;
        cart.forEach(item => {
            const quantity = item.quantity || 1;
            subtotal += item.price * quantity;
        });
        return subtotal;
    }

    function updateOrderTotal(discount = 0) {
        const subtotal = calculateSubtotal();
        const total = subtotal - discount;
        const formattedSubtotal = `€ ${subtotal.toFixed(2)}`;
        const formattedTotal = `€ ${total.toFixed(2)}`;
        const orderTotalElement = document.querySelector('.order-total');

        if (orderTotalElement) {
            orderTotalElement.querySelector('.order-total__value-1').textContent = formattedSubtotal;
            orderTotalElement.querySelector('.order-total__value-2').textContent = formattedTotal;
        }
    }

    function applyDiscount(code) {
        const coupon = discountCoupons.find(coupon => coupon.code === code);
        const subtotal = calculateSubtotal(); // Calcola il subtotal prima di applicare lo sconto
        if (coupon) {
            const discount = coupon.discount > 1 ? coupon.discount : subtotal * coupon.discount;
            return discount;
        }
        return 0;
    }

    document.getElementById('apply-discount').addEventListener('click', function (event) {
        event.preventDefault();
        const discountCode = document.getElementById('discount-code').value.trim();
        const discount = applyDiscount(discountCode);
        const discountMessage = document.getElementById('discount-message');

        if (discount > 0) {
            appliedDiscount = discount;
            updateOrderTotal(appliedDiscount);
            discountMessage.textContent = 'Discount applied successfully!';
            discountMessage.classList.remove('apply-discount__message--error');
            discountMessage.classList.add('apply-discount__message--success');
            document.getElementById('apply-discount').style.display = 'none';
            document.getElementById('remove-discount').style.display = 'inline-block';
        } else {
            discountMessage.textContent = 'Invalid discount code.';
            discountMessage.classList.remove('apply-discount__message--success');
            discountMessage.classList.add('apply-discount__message--error');
        }
    });

    document.getElementById('remove-discount').addEventListener('click', function () {
        document.getElementById('discount-code').value = '';
        appliedDiscount = 0;
        updateOrderTotal(appliedDiscount);
        const discountMessage = document.getElementById('discount-message');
        discountMessage.textContent = '';
        discountMessage.classList.remove('apply-discount__message--success', 'apply-discount__message--error');
        document.getElementById('apply-discount').style.display = 'inline-block';
        document.getElementById('remove-discount').style.display = 'none';
    });

    // Aggiorna il totale dell'ordine al caricamento della pagina
    updateOrderTotal();
});
