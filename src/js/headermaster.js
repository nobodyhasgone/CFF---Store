document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".headermasterleft__nav");
    const closeButton = document.querySelector(".headermasterleft__close");

    if (hamburger && navMenu && closeButton) {
        hamburger.addEventListener("click", function() {
            navMenu.classList.toggle("headermasterleft__nav--open");
        });

        closeButton.addEventListener("click", function() {
            navMenu.classList.remove("headermasterleft__nav--open");
        });

        // Gestione dropdown
        const dropdownIcons = document.querySelectorAll(".dropdown-toggle .headermasterleft__menu-icon");
        dropdownIcons.forEach(icon => {
            icon.addEventListener("click", function(event) {
                const parent = this.closest('.dropdown');
                
                parent.classList.toggle("open");

                if (parent.classList.contains("open")) {
                    this.classList.add("minus-icon");
                } else {
                    this.classList.remove("minus-icon");
                }
                
                event.stopPropagation(); // Previene l'attivazione di altri event listeners sugli elementi genitori
            });
        });
    } else {
        console.error("Hamburger, navMenu, or closeButton element not found");
    }
});

function setupContactsDropdown() {
    const contactsToggle = document.querySelector(".contacts-toggle");
    const contactsDropdown = document.querySelector(".contacts-dropdown");
    const contactsClose = contactsDropdown.querySelector(".contacts-dropdown__close");

    if (contactsToggle && contactsDropdown && contactsClose) {
        contactsToggle.addEventListener("click", function() {
            contactsDropdown.classList.add("open");
        });

        contactsClose.addEventListener("click", function() {
            contactsDropdown.classList.remove("open");
        });
    } else {
        console.error("Contacts toggle, dropdown, or close element not found");
    }
}

document.addEventListener("DOMContentLoaded", setupContactsDropdown);

function closeAllPanels() {
    const searchPanel = document.querySelector('.search-panel');
    const emailPanel = document.querySelector('.email-panel');
    const accountPanel = document.querySelector('.account-panel');
    const cartPanel = document.querySelector('.cart-panel');
    const overlay = document.querySelector('.overlay');

    if (searchPanel) searchPanel.classList.remove('search-panel--active');
    if (emailPanel) emailPanel.classList.remove('email-panel--active');
    if (accountPanel) accountPanel.classList.remove('account-panel--active');
    if (cartPanel) cartPanel.classList.remove('cart-panel--active');
    if (overlay) overlay.classList.remove('overlay--active');
}

document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.querySelector('.header-master-right__icon--search');
    const searchPanel = document.querySelector('.search-panel');
    const closeIcon = document.querySelector('.search-panel__close-icon');

    if (searchIcon && searchPanel && closeIcon) {
        searchIcon.addEventListener('click', () => {
            const isActive = searchPanel.classList.contains('search-panel--active');
            closeAllPanels();
            if (!isActive) {
                searchPanel.classList.add('search-panel--active');
            }
        });

        closeIcon.addEventListener('click', () => {
            searchPanel.classList.remove('search-panel--active');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const emailIcon = document.querySelector('.header-master-right__icon--email');
    const emailPanel = document.querySelector('.email-panel');
    const emailCloseIcon = document.querySelector('.email-panel__close-icon');
    const accountIcon = document.querySelector('.header-master-right__icon--account');
    const accountPanel = document.querySelector('.account-panel');
    const accountCloseIcon = document.querySelector('.account-panel__close-icon');
    const overlay = document.querySelector('.overlay');

    if (emailIcon && emailPanel && emailCloseIcon) {
        emailIcon.addEventListener('click', () => {
            closeAllPanels();
            emailPanel.classList.toggle('email-panel--active');
            overlay.classList.toggle('overlay--active', emailPanel.classList.contains('email-panel--active'));
        });

        emailCloseIcon.addEventListener('click', (event) => {
            event.stopPropagation(); // Impedisce la propagazione del click
            emailPanel.classList.remove('email-panel--active');
            overlay.classList.remove('overlay--active');
        });

        emailPanel.addEventListener('click', (event) => {
            event.stopPropagation(); // Impedisce la propagazione del click
        });
    }

    if (accountIcon && accountPanel && accountCloseIcon) {
        accountIcon.addEventListener('click', () => {
            closeAllPanels();
            accountPanel.classList.toggle('account-panel--active');
            overlay.classList.toggle('overlay--active', accountPanel.classList.contains('account-panel--active'));
        });

        accountCloseIcon.addEventListener('click', (event) => {
            event.stopPropagation(); // Impedisce la propagazione del click
            accountPanel.classList.remove('account-panel--active');
            overlay.classList.remove('overlay--active');
        });

        accountPanel.addEventListener('click', (event) => {
            event.stopPropagation(); // Impedisce la propagazione del click
        });
    }

    // Toggle password visibility
    const passwordInput = document.querySelector('.account-panel__password-wrapper input');
    const togglePasswordIcon = document.querySelector('.account-panel__toggle-password');

    if (passwordInput && togglePasswordIcon) {
        togglePasswordIcon.addEventListener('click', () => {
            const isPasswordVisible = passwordInput.type === 'text';
            passwordInput.type = isPasswordVisible ? 'password' : 'text';
            togglePasswordIcon.classList.toggle('account-panel__toggle-password--active', !isPasswordVisible);
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const headmaster = document.querySelector(".headmaster");
    const headmasterContainer = document.querySelector(".headmaster__container");
    const hamburgerLines = document.querySelectorAll(".hamburger__line");
    const headermasterleftLinks = document.querySelectorAll(".headermasterleft2__link");
    const logoImg = document.querySelector(".headmaster__logo img");
    const rightIcons = document.querySelectorAll(".header-master-right__icon--search, .header-master-right__icon--email, .header-master-right__icon--wishlist, .header-master-right__icon--account, .header-master-right__icon--cart");

    function applyTransparentStyles() {
        headmaster.classList.add("headmaster--transparent");
        headmasterContainer.classList.add("headmaster__container--no-border");
        hamburgerLines.forEach(line => line.classList.add("hamburger__line--white"));
        headermasterleftLinks.forEach(link => link.classList.add("headermasterleft2__link--white"));
        if (logoImg) {
            logoImg.parentNode.classList.add("headmaster__logo--invert");
        }
        rightIcons.forEach(icon => icon.classList.add("header-master-right__icon--invert"));
    }

    function removeTransparentStyles() {
        headmaster.classList.remove("headmaster--transparent");
        headmasterContainer.classList.remove("headmaster__container--no-border");
        hamburgerLines.forEach(line => line.classList.remove("hamburger__line--white"));
        headermasterleftLinks.forEach(link => link.classList.remove("headermasterleft2__link--white"));
        if (logoImg) {
            logoImg.parentNode.classList.remove("headmaster__logo--invert");
        }
        rightIcons.forEach(icon => icon.classList.remove("header-master-right__icon--invert"));
    }

    if (document.body.classList.contains("home-page")) {
        applyTransparentStyles();

        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                removeTransparentStyles();
            } else {
                applyTransparentStyles();
            }
        });
    }
});

