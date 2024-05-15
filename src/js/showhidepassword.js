document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.getElementById('toggle-password-typage');
    const passwordInput = document.getElementById('typassword');
    
    togglePassword.addEventListener('click', function() {
        // Controlla se il tipo dell'input è password o text
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Cambia l'icona in base al tipo
        this.style.backgroundImage = type === 'password' ? 
            'url("./src/images/icons/icon-eye.png")' : // Occhio aperto
            'url("./src/images/icons/icon-eye-slash.png")'; // Occhio chiuso, aggiungi il percorso corretto
    });
});
