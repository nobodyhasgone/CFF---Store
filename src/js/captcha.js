function handleFakeRecaptcha() {
    const checkbox = document.getElementById('fakeRecaptchaCheckbox');
    const image = document.querySelector('.fake-recaptcha__image');

    if (checkbox.checked) {
        checkbox.disabled = true;
        image.classList.add('loading');

        setTimeout(() => {
            image.classList.remove('loading');
            checkbox.disabled = false;
            checkbox.checked = true;
        }, 2000);
    }
}

document.getElementById('fakeRecaptchaCheckbox').addEventListener('click', handleFakeRecaptcha);


document.getElementById('password').addEventListener('input', function () {
    const strengthText = document.getElementById('passwordStrengthText');
    const strengthContainer = document.getElementById('passwordStrength');
    const overlay = document.querySelector('.password-strength__overlay');
    const password = this.value;

    let strength = 'No Password';
    let className = '';

    let criteriaCount = 0;

    if (password.match(/[a-z]/)) criteriaCount++;
    if (password.match(/[A-Z]/)) criteriaCount++;
    if (password.match(/[0-9]/)) criteriaCount++;
    if (password.match(/[^a-zA-Z0-9]/)) criteriaCount++;
    if (password.length >= 10) criteriaCount++;

    if (password.length > 0) {
        if (criteriaCount <= 3) {
            strength = 'Weak';
            className = 'weak';
        } else if (criteriaCount === 4) {
            strength = 'Strong';
            className = 'strong';
        } else if (criteriaCount === 5) {
            strength = 'Very Strong';
            className = 'very-strong';
        }
    }

    strengthText.textContent = strength;
    strengthContainer.className = 'password-strength ' + className;
    overlay.className = 'password-strength__overlay ' + className;
});


document.addEventListener('DOMContentLoaded', function () {
    const togglePasswordIcons = document.querySelectorAll('.create-account__icon');
    
    togglePasswordIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            const input = this.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                this.style.backgroundImage = "url('./src/images/icons/icon-eye-slash.png')";
            } else {
                input.type = 'password';
                this.style.backgroundImage = "url('./src/images/icons/icon-eye.png')";
            }
        });
    });
});
