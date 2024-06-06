document.addEventListener('DOMContentLoaded', function() {
    const billingAddressIcon = document.querySelector('.information__icon--billing-address');
    const infoList = document.querySelector('.information__list');
    const editBillingAddressContainer = document.querySelector('.billing-address-edit-container');
    const accountButtons = document.querySelector('.myaccount-buttons');

    // Nascondi di default il container di edit-info
    editBillingAddressContainer.style.display = 'none';

    billingAddressIcon.addEventListener('click', function() {
        infoList.style.display = 'none';
        editBillingAddressContainer.style.display = 'block';

        if (window.innerWidth < 768) {
            accountButtons.classList.add('myhidden-buttons');
        }
    });

    // Verifica lo stato della visualizzazione al caricamento della pagina
    window.addEventListener('resize', function() {
        if (editBillingAddressContainer.style.display === 'block' && window.innerWidth >= 768) {
            accountButtons.classList.remove('myhidden-buttons');
        } else if (editBillingAddressContainer.style.display === 'block' && window.innerWidth < 768) {
            accountButtons.classList.add('myhidden-buttons');
        }
    });

    // Pulsante per tornare indietro
    const backButton = document.querySelector('.billing-address__global-back-button');
    backButton.addEventListener('click', function(event) {
        event.preventDefault();
        infoList.style.display = 'block';
        editBillingAddressContainer.style.display = 'none';
        accountButtons.classList.remove('myhidden-buttons');
    });
});
