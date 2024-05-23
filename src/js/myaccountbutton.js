document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.myaccount-buttons__button');
    const infoSection = document.querySelector('.information');
    const ordersSection = document.querySelector('.orders');
    const returnsSection = document.querySelector('.returns');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('myaccount-buttons__button--active'));
            this.classList.add('myaccount-buttons__button--active');

            if (this.id === 'info-button') {
                infoSection.style.display = 'block';
                ordersSection.style.display = 'none';
                returnsSection.style.display = 'none';
            } else if (this.id === 'orders-button') {
                infoSection.style.display = 'none';
                ordersSection.style.display = 'block';
                returnsSection.style.display = 'none';
            } else if (this.id === 'returns-button') {
                infoSection.style.display = 'none';
                ordersSection.style.display = 'none';
                returnsSection.style.display = 'block';
            }
        });
    });

    // Mostra la sezione informazioni per impostazione predefinita
    document.getElementById('info-button').classList.add('myaccount-buttons__button--active');
    infoSection.style.display = 'block';
    ordersSection.style.display = 'none';
    returnsSection.style.display = 'none';
});

