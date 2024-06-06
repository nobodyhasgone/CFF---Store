document.addEventListener('DOMContentLoaded', function() {
    const showReturnCheckboxesButton = document.getElementById('show-return-checkboxes');
    const returnWrapper = document.querySelector('.order-details__return-wrapper');
    const orderDetailsWrapper = document.querySelector('.order-details__shipping-wrapper');
    const orderDetailsStatus = document.querySelector('.order-details__status');
    const orderDetailsTitle = document.querySelector('.order-details__title');
    const returnTitle = document.querySelector('.order-details__return-title');
    const orderDetailsActions = document.querySelector('.order-details__actions');
    const orderDetailsItems = document.querySelector('.order-details__items');
    const sendRequestButton = document.querySelector('.order-details__return-actions .btn_default-primary-active');
    const confirmationWrapper = document.querySelector('.order-details__confirmation');

    showReturnCheckboxesButton.addEventListener('click', function() {
        returnWrapper.style.display = 'flex';
        orderDetailsWrapper.style.display = 'none';
        orderDetailsStatus.style.display = 'none';
        orderDetailsTitle.style.display = 'none';
        returnTitle.style.display = 'block';
        orderDetailsActions.style.display = 'none';

        document.querySelectorAll('.order-details__items-checkbox-container').forEach(container => {
            container.style.display = 'flex';
        });
    });

    sendRequestButton.addEventListener('click', function() {
        returnWrapper.style.display = 'none';
        confirmationWrapper.style.display = 'flex';
        returnTitle.style.display = 'none';
        orderDetailsItems.style.display = 'none';
    });

    document.querySelectorAll('.order-details__items-checkbox').forEach(checkbox => {
        checkbox.addEventListener('click', function() {
            checkbox.classList.toggle('order-details__items-checkbox--checked');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const accordionHeader = document.querySelector('.order-details__accordion-header');
    const accordionContent = document.querySelector('.order-details__accordion-content');
    const accordionIcon = document.querySelector('.order-details__accordion-icon');

    accordionHeader.addEventListener('click', function() {
        const isExpanded = accordionContent.style.display === 'flex';
        accordionContent.style.display = isExpanded ? 'none' : 'flex';
        accordionIcon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
    });
});


