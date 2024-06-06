// document.addEventListener('DOMContentLoaded', function() {
//     const orderIcons = document.querySelectorAll('.orders__icon-mobile--details');
//     const ordersSection = document.querySelector('#orders-section');
//     const editOrderContainer = document.querySelector('#orders-info-section');
//     const accountButtons = document.querySelector('.myaccount-buttons');

//     // Nascondi di default il container di edit-info
//     editOrderContainer.style.display = 'none';

//     orderIcons.forEach(icon => {
//         icon.addEventListener('click', function() {
//             if (ordersSection) {
//                 ordersSection.style.display = 'none';
//                 console.log('Orders section hidden');
//             }
//             if (editOrderContainer) {
//                 editOrderContainer.style.display = 'block';
//                 console.log('Edit order container shown');
//             }
//             if (window.innerWidth < 768) {
//                 accountButtons.classList.add('myhidden-buttons');
//             }
//         });
//     });

//     // Verifica lo stato della visualizzazione al caricamento della pagina
//     window.addEventListener('resize', function() {
//         if (editOrderContainer.style.display === 'block' && window.innerWidth >= 768) {
//             accountButtons.classList.remove('myhidden-buttons');
//         } else if (editOrderContainer.style.display === 'block' && window.innerWidth < 768) {
//             accountButtons.classList.add('myhidden-buttons');
//         }
//     });

//     // Pulsante per tornare indietro
//     const backButton = document.querySelector('.orders-info__global-back-button');
//     if (backButton) {
//         backButton.addEventListener('click', function(event) {
//             event.preventDefault();
//             if (ordersSection) {
//                 ordersSection.style.display = 'block';
//                 console.log('Orders section shown');
//             }
//             if (editOrderContainer) {
//                 editOrderContainer.style.display = 'none';
//                 console.log('Edit order container hidden');
//             }
//             accountButtons.classList.remove('myhidden-buttons');
//         });
//     } else {
//         console.error('Back button not found!');
//     }
// });


document.addEventListener('DOMContentLoaded', function() {
    const orderIcons = document.querySelectorAll('.orders__icon-mobile--details');
    const ordersSection = document.querySelector('#orders-section');
    const editOrderContainer = document.querySelector('#orders-info-section');
    const accountButtons = document.querySelector('.myaccount-buttons');
    const requestReturnButton = document.getElementById('request-return-button');
    const returnRequestContainer = document.querySelector('.orders-info__return-request');
    const orderDetailsContainer = document.querySelector('.orders-info__order-details');

    // Nascondi di default il container di edit-info
    editOrderContainer.style.display = 'none';

    orderIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            if (ordersSection) {
                ordersSection.style.display = 'none';
                console.log('Orders section hidden');
            }
            if (editOrderContainer) {
                editOrderContainer.style.display = 'block';
                console.log('Edit order container shown');
            }
            if (window.innerWidth < 768) {
                accountButtons.classList.add('myhidden-buttons');
            }
        });
    });

    // Verifica lo stato della visualizzazione al caricamento della pagina
    window.addEventListener('resize', function() {
        if (editOrderContainer.style.display === 'block' && window.innerWidth >= 768) {
            accountButtons.classList.remove('myhidden-buttons');
        } else if (editOrderContainer.style.display === 'block' && window.innerWidth < 768) {
            accountButtons.classList.add('myhidden-buttons');
        }
    });

    // Pulsante per tornare indietro
    const backButton = document.querySelector('.orders-info__global-back-button');
    if (backButton) {
        backButton.addEventListener('click', function(event) {
            event.preventDefault();
            if (ordersSection) {
                ordersSection.style.display = 'block';
                console.log('Orders section shown');
            }
            if (editOrderContainer) {
                editOrderContainer.style.display = 'none';
                console.log('Edit order container hidden');
            }
            accountButtons.classList.remove('myhidden-buttons');
        });
    } else {
        console.error('Back button not found!');
    }

    // Gestisci il click sul pulsante "Request Return"
    if (requestReturnButton) {
        requestReturnButton.addEventListener('click', function() {
            orderDetailsContainer.style.display = 'none';
            returnRequestContainer.style.display = 'flex';
        });
    }

    // Pulsante per tornare indietro nella schermata di richiesta di ritorno
    const returnBackButton = document.querySelector('.orders-info__return-back-button');
    if (returnBackButton) {
        returnBackButton.addEventListener('click', function(event) {
            event.preventDefault();
            orderDetailsContainer.style.display = 'flex';
            returnRequestContainer.style.display = 'none';
        });
    } else {
        console.error('Return back button not found!');
    }
});




