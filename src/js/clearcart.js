document.addEventListener('DOMContentLoaded', function() {
    const paypalButton = document.querySelector('.paypal__button-continue');
    const creditCardButton = document.querySelector('.credit-card__button-continue');

    function clearCart() {
        localStorage.removeItem('cart');
    }

    if (paypalButton) {
        paypalButton.addEventListener('click', clearCart);
    }

    if (creditCardButton) {
        creditCardButton.addEventListener('click', clearCart);
    }
});
