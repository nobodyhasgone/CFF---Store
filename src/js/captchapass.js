function generateCaptcha() {
    const captchaImage = document.getElementById('captchaImage');
    const captchaCode = Math.random().toString(36).substring(2, 8);
    captchaImage.src = `https://dummyimage.com/180x50/000/fff&text=${captchaCode}`;
    captchaImage.alt = captchaCode;
    captchaImage.setAttribute('data-code', captchaCode);
}

function validateCaptcha() {
    const captchaInput = document.getElementById('captchaInput').value;
    const captchaCode = document.getElementById('captchaImage').getAttribute('data-code');
    if (captchaInput !== captchaCode) {
        alert('CAPTCHA non corretto. Riprova.');
        generateCaptcha();
        return false;
    }
    alert('CAPTCHA corretto. Procedi con il reset della password.');
    return true;
}

// Assicurati che il CAPTCHA venga generato quando la pagina è completamente caricata
window.onload = generateCaptcha;