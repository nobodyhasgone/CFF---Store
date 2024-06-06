// document.addEventListener('DOMContentLoaded', function() {
//     const buttons = document.querySelectorAll('.myaccount-buttons__button');
//     const infoSection = document.querySelector('.information');
//     const ordersSection = document.querySelector('.orders');
//     const returnsSection = document.querySelector('.returns');

//     buttons.forEach(button => {
//         button.addEventListener('click', function() {
//             buttons.forEach(btn => btn.classList.remove('myaccount-buttons__button--active'));
//             this.classList.add('myaccount-buttons__button--active');

//             if (this.id === 'info-button') {
//                 infoSection.style.display = 'block';
//                 ordersSection.style.display = 'none';
//                 returnsSection.style.display = 'none';
//             } else if (this.id === 'orders-button') {
//                 infoSection.style.display = 'none';
//                 ordersSection.style.display = 'block';
//                 returnsSection.style.display = 'none';
//             } else if (this.id === 'returns-button') {
//                 infoSection.style.display = 'none';
//                 ordersSection.style.display = 'none';
//                 returnsSection.style.display = 'block';
//             }
//         });
//     });

//     // Mostra la sezione informazioni per impostazione predefinita
//     document.getElementById('info-button').classList.add('myaccount-buttons__button--active');
//     infoSection.style.display = 'block';
//     ordersSection.style.display = 'none';
//     returnsSection.style.display = 'none';
// });

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.myaccount-buttons__button');
    const sections = {
        info: document.getElementById('info-section'),
        orders: document.getElementById('orders-section'),
        returns: document.getElementById('returns-section'),
        billing: document.getElementById('billing-address-section'),
        shipping: document.getElementById('shipping-address-section'),
        payment: document.getElementById('payment-method-section')
    };

    const hideAllSections = () => {
        Object.values(sections).forEach(section => {
            section.style.display = 'none';
        });
    };

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('myaccount-buttons__button--active'));
            this.classList.add('myaccount-buttons__button--active');

            hideAllSections();

            switch (this.id) {
                case 'info-button':
                    sections.info.style.display = 'block';
                    break;
                case 'orders-button':
                    sections.orders.style.display = 'block';
                    break;
                case 'returns-button':
                    sections.returns.style.display = 'block';
                    break;
                case 'billing-button':
                    sections.billing.style.display = 'block';
                    break;
                case 'shipping-button':
                    sections.shipping.style.display = 'block';
                    break;
                case 'payment-button':
                    sections.payment.style.display = 'block';
                    break;
            }
        });
    });

    // Show info section by default
    document.getElementById('info-button').classList.add('myaccount-buttons__button--active');
    sections.info.style.display = 'block';
});


