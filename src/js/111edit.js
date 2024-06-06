/* Edit personal info */
document.addEventListener('DOMContentLoaded', function() {
    const generalInfoIcon = document.querySelector('.information__icon--general-info');
    const infoList = document.querySelector('.information__list');
    const editInfoContainer = document.querySelector('.edit-info__container');
    const accountButtons = document.querySelector('.myaccount-buttons');

    // Nascondi di default il container di edit-info
    editInfoContainer.style.display = 'none';

    generalInfoIcon.addEventListener('click', function() {
        infoList.style.display = 'none';
        editInfoContainer.style.display = 'block';
        
        if (window.innerWidth < 768) {
            accountButtons.classList.add('myhidden-buttons');
        }
    });

    // Verifica lo stato della visualizzazione al caricamento della pagina
    window.addEventListener('resize', function() {
        if (editInfoContainer.style.display === 'block' && window.innerWidth >= 768) {
            accountButtons.classList.remove('myhidden-buttons');
        } else if (editInfoContainer.style.display === 'block' && window.innerWidth < 768) {
            accountButtons.classList.add('myhidden-buttons');
        }
    });

    // Pulsante per tornare indietro
    const backButton = document.querySelector('.edit-info__global-back-button');
    backButton.addEventListener('click', function(event) {
        event.preventDefault();
        infoList.style.display = 'block';
        editInfoContainer.style.display = 'none';
        accountButtons.classList.remove('myhidden-buttons');
    });
});


