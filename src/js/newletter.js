document.addEventListener('DOMContentLoaded', function() {
    const agreeCheckbox = document.getElementById('newsletter-agree');
    const subscribeButton = document.getElementById('newsletter-subscribe');
    const unsubscribeButton = document.getElementById('newsletter-unsubscribe');
    const subscribedMessage = document.querySelector('.newsletter__subscribed-message');
    const form = document.querySelector('.newsletter__form');

    const newsletterIcon = document.querySelector('.information__icon--newsletter');
    const infoList = document.querySelector('.information__list');
    const editNewsletterContainer = document.querySelector('.newsletter-edit-container');
    const accountButtons = document.querySelector('.myaccount-buttons');

    // Nascondi di default il container di edit-info
    editNewsletterContainer.style.display = 'none';

    newsletterIcon.addEventListener('click', function() {
        infoList.style.display = 'none';
        editNewsletterContainer.style.display = 'block';

        if (window.innerWidth < 768) {
            accountButtons.classList.add('myhidden-buttons');
        }
    });

    // Verifica lo stato della visualizzazione al caricamento della pagina
    window.addEventListener('resize', function() {
        if (editNewsletterContainer.style.display === 'block' && window.innerWidth >= 768) {
            accountButtons.classList.remove('myhidden-buttons');
        } else if (editNewsletterContainer.style.display === 'block' && window.innerWidth < 768) {
            accountButtons.classList.add('myhidden-buttons');
        }
    });

    // Pulsante per tornare indietro
    const backButton = document.querySelector('.newsletter__global-back-button');
    backButton.addEventListener('click', function(event) {
        event.preventDefault();
        infoList.style.display = 'block';
        editNewsletterContainer.style.display = 'none';
        accountButtons.classList.remove('myhidden-buttons');
    });

    agreeCheckbox.addEventListener('change', function() {
        if (agreeCheckbox.checked) {
            subscribeButton.classList.remove('btn_default-primary-disabled');
            subscribeButton.classList.add('btn_default-primary-active');
            subscribeButton.disabled = false;
        } else {
            subscribeButton.classList.remove('btn_default-primary-active');
            subscribeButton.classList.add('btn_default-primary-disabled');
            subscribeButton.disabled = true;
        }
    });

    subscribeButton.addEventListener('click', function() {
        form.style.display = 'none';
        subscribedMessage.style.display = 'block';
        unsubscribeButton.style.display = 'block';
    });

    unsubscribeButton.addEventListener('click', function() {
        form.style.display = 'flex';
        subscribedMessage.style.display = 'none';
        unsubscribeButton.style.display = 'none';
        agreeCheckbox.checked = false;
        subscribeButton.classList.remove('btn_default-primary-active');
        subscribeButton.classList.add('btn_default-primary-disabled');
        subscribeButton.disabled = true;
    });
});
