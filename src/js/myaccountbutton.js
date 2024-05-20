document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.myaccount-buttons__button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('myaccount-buttons__button--active'));
            this.classList.add('myaccount-buttons__button--active');
        });
    });
});
