document.querySelector('.contact-information__sign-in').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.contact-information__form-container').style.display = 'none';
    document.querySelector('.sign-in-panel').style.display = 'block';
});

document.querySelector('.sign-in-panel__close-icon').addEventListener('click', function() {
    document.querySelector('.sign-in-panel').style.display = 'none';
    document.querySelector('.contact-information__form-container').style.display = 'block';
});
