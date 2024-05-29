document.addEventListener('DOMContentLoaded', function() {
    const shippingAddressIcon = document.querySelector('.information__icon--shipping-address');
    const infoList = document.querySelector('.information__list');
    const editShippingAddressContainer = document.querySelector('.shipping-address-edit-container');
    const accountButtons = document.querySelector('.myaccount-buttons');

    if (!shippingAddressIcon || !infoList || !editShippingAddressContainer || !accountButtons) {
        console.error("One or more elements not found in the DOM");
        return;
    }

    // Nascondi di default il container di edit-info
    editShippingAddressContainer.style.display = 'none';

    shippingAddressIcon.addEventListener('click', function() {
        infoList.style.display = 'none';
        editShippingAddressContainer.style.display = 'block';

        if (window.innerWidth < 768) {
            accountButtons.classList.add('myhidden-buttons');
        }
    });

    // Verifica lo stato della visualizzazione al caricamento della pagina
    window.addEventListener('resize', function() {
        if (editShippingAddressContainer.style.display === 'block' && window.innerWidth >= 768) {
            accountButtons.classList.remove('myhidden-buttons');
        } else if (editShippingAddressContainer.style.display === 'block' && window.innerWidth < 768) {
            accountButtons.classList.add('myhidden-buttons');
        }
    });

    // Pulsante per tornare indietro
    const backButton = document.querySelector('.shipping-address__global-back-button');
    if (backButton) {
        backButton.addEventListener('click', function(event) {
            event.preventDefault();
            infoList.style.display = 'block';
            editShippingAddressContainer.style.display = 'none';
            accountButtons.classList.remove('myhidden-buttons');
        });
    } else {
        console.error("Back button not found in the DOM");
    }
});
