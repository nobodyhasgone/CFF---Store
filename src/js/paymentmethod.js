document.addEventListener('DOMContentLoaded', function () {
    const paymentInputs = document.querySelectorAll('input[name="payment-method"]');

    paymentInputs.forEach(input => {
        input.addEventListener('change', function () {
            const targetClass = input.dataset.target;

            // Nascondi tutti i dettagli e rimuovi i bordi evidenziati
            paymentInputs.forEach(i => {
                const target = document.querySelector(i.dataset.target);
                if (target) {
                    const parent = target.parentNode;
                    parent.classList.remove('paypal--expanded', 'credit-card--expanded', 'paypal--selected', 'credit-card--selected');
                }
            });

            // Mostra il componente selezionato e evidenzia il bordo
            const target = document.querySelector(targetClass);
            if (target) {
                const parent = target.parentNode;
                if (targetClass.includes('paypal')) {
                    parent.classList.add('paypal--expanded', 'paypal--selected');
                } else {
                    parent.classList.add('credit-card--expanded', 'credit-card--selected');
                }
            }
        });
    });
});

function togglePayPalButton() {
    const paypalCheckbox = document.querySelector('.paypal__checkbox');
    const paypalButton = document.querySelector('.paypal__button-continue');

    if (paypalCheckbox && paypalButton) {
        paypalCheckbox.addEventListener('change', function () {
            if (paypalCheckbox.checked) {
                paypalButton.classList.remove('btn_default-primary-disabled');
                paypalButton.classList.add('btn_default-primary-active');
                paypalButton.textContent = "Continue to PayPal";
                paypalButton.disabled = false;
            } else {
                paypalButton.classList.remove('btn_default-primary-active');
                paypalButton.classList.add('btn_default-primary-disabled');
                paypalButton.textContent = "Continue to PayPal";
                paypalButton.disabled = true;
            }
        });
    }
}

// Inizializza la funzione quando la pagina è caricata
document.addEventListener('DOMContentLoaded', togglePayPalButton);

function toggleCreditCardButton() {
    const termsCheckbox = document.querySelector('.credit-card__terms .credit-card__checkbox');
    const continueButton = document.querySelector('.credit-card__button-continue');

    if (termsCheckbox && continueButton) {
        termsCheckbox.addEventListener('change', function () {
            if (termsCheckbox.checked) {
                continueButton.classList.remove('btn_default-primary-disabled');
                continueButton.classList.add('btn_default-primary-active');
                continueButton.disabled = false;
            } else {
                continueButton.classList.remove('btn_default-primary-active');
                continueButton.classList.add('btn_default-primary-disabled');
                continueButton.disabled = true;
            }
        });
    }
}

// Inizializza la funzione quando la pagina è caricata
document.addEventListener('DOMContentLoaded', toggleCreditCardButton);


function toggleInvoiceRequestDetails() {
    const radioInputs = document.querySelectorAll('input[name="invoice-request"]');
    const detailsContainer = document.querySelector('.invoice-request');

    radioInputs.forEach(input => {
        input.addEventListener('change', function () {
            if (input.value === 'yes') {
                detailsContainer.classList.add('invoice-request--visible');
            } else {
                detailsContainer.classList.remove('invoice-request--visible');
            }
        });
    });
}

// Inizializza la funzione quando la pagina è caricata
document.addEventListener('DOMContentLoaded', toggleInvoiceRequestDetails);
