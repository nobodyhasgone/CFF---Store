document.addEventListener('DOMContentLoaded', function() {
    const paymentMethodIcon = document.querySelector('.information__icon--payment-method');
    const infoList = document.querySelector('.information__list');
    const editPaymentMethodContainer = document.querySelector('.payment-method-edit-container');
    const accountButtons = document.querySelector('.myaccount-buttons');

    if (!paymentMethodIcon || !infoList || !editPaymentMethodContainer || !accountButtons) {
        console.error("One or more elements not found in the DOM");
        return;
    }

    // Nascondi di default il container di edit-info
    editPaymentMethodContainer.style.display = 'none';

    paymentMethodIcon.addEventListener('click', function() {
        infoList.style.display = 'none';
        editPaymentMethodContainer.style.display = 'block';

        if (window.innerWidth < 768) {
            accountButtons.classList.add('myhidden-buttons');
        }
    });

    // Verifica lo stato della visualizzazione al caricamento della pagina
    window.addEventListener('resize', function() {
        if (editPaymentMethodContainer.style.display === 'block' && window.innerWidth >= 768) {
            accountButtons.classList.remove('myhidden-buttons');
        } else if (editPaymentMethodContainer.style.display === 'block' && window.innerWidth < 768) {
            accountButtons.classList.add('myhidden-buttons');
        }
    });

    // Pulsante per tornare indietro
    const backButton = document.querySelector('.payment-method__global-back-button');
    if (backButton) {
        backButton.addEventListener('click', function(event) {
            event.preventDefault();
            infoList.style.display = 'block';
            editPaymentMethodContainer.style.display = 'none';
            accountButtons.classList.remove('myhidden-buttons');
        });
    } else {
        console.error("Back button not found in the DOM");
    }

    // Mostra i dettagli di PayPal se selezionato
    const paypalInput = document.getElementById('paypal');
    const paypalDetails = document.querySelector('.paypal-details');
    if (paypalInput && paypalDetails) {
        paypalInput.addEventListener('change', function() {
            if (this.checked) {
                paypalDetails.style.display = 'block';
            }
        });
    }

    // Mostra i dettagli della carta di credito se selezionata
    const creditCardInput = document.getElementById('credit-card');
    const creditCardDetails = document.querySelector('.credit-card-details');
    if (creditCardInput && creditCardDetails) {
        creditCardInput.addEventListener('change', function() {
            if (this.checked) {
                creditCardDetails.style.display = 'block';
            }
        });
    }

    // Mostra i dettagli del bonifico bancario se selezionato
    const bankTransferInput = document.getElementById('bank-transfer');
    const bankTransferDetails = document.querySelector('.bank-transfer-details');
    if (bankTransferInput && bankTransferDetails) {
        bankTransferInput.addEventListener('change', function() {
            if (this.checked) {
                bankTransferDetails.style.display = 'block';
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const paymentOptions = document.querySelectorAll('.payment-method__option input[type="radio"]');
    const paymentDetails = document.querySelectorAll('.payment-method__details');

    paymentOptions.forEach(option => {
        option.addEventListener('change', function () {
            paymentDetails.forEach(detail => {
                detail.style.display = 'none';
            });

            const selectedDetails = document.getElementById(`${this.id}-details`);
            if (selectedDetails) {
                selectedDetails.style.display = 'block';
            }
        });
    });

    // Pulsante per tornare indietro
    const backButton = document.querySelector('.payment-method__global-back-button');
    backButton.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('.payment-method__container').style.display = 'none';
        document.querySelector('#info-section').style.display = 'block';
        document.querySelector('.myaccount-buttons').classList.remove('myhidden-buttons');
    });
});
