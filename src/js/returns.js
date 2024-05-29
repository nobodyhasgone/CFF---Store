document.addEventListener('DOMContentLoaded', function() {
    const returnIcons = document.querySelectorAll('.returns__icon-mobile');
    const returnWrapper = document.querySelector('.returns__wrapper');
    const returnDetailsContainer = document.querySelector('.returns__details-container');
    const backToReturnsButton = document.getElementById('back-to-returns');

    // Nascondi di default il container dei dettagli del reso
    returnDetailsContainer.style.display = 'none';

    returnIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            returnWrapper.style.display = 'none';
            returnDetailsContainer.style.display = 'block';
        });
    });

    // Pulsante per tornare indietro
    backToReturnsButton.addEventListener('click', function() {
        returnWrapper.style.display = 'block';
        returnDetailsContainer.style.display = 'none';
    });
});
