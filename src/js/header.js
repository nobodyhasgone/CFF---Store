/* SearcBar */
document.addEventListener('DOMContentLoaded', () => {
  const searchIcon = document.querySelector('.header__icon--search');
  const searchContainer = document.querySelector('.search-container');
  const searchInput = document.getElementById('searchInput');

  searchIcon.addEventListener('click', (event) => {
    event.preventDefault(); // Previene lo scroll verso l'alto
    searchContainer.classList.toggle('is-visible');
    if (searchContainer.classList.contains('is-visible')) {
      setTimeout(() => { // Assicurati che il focus avvenga dopo che la barra è visibile
        searchInput.focus();
      }, 500); // Regola questo tempo in base alla tua animazione
    }
  });

  // Gestire il clic al di fuori della search bar per chiuderla
  document.addEventListener('click', function(event) {
    if (!searchContainer.contains(event.target) && !searchIcon.contains(event.target)) {
      searchContainer.classList.remove('is-visible');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const icons = {
    messages: {
      icon: document.querySelector('.header__icon--messages'),
      overlay: document.getElementById('messagesOverlay')
    },
    account: {
      icon: document.querySelector('.header__icon--account'),
      overlay: document.getElementById('accountOverlay')
    }
  };
  const pageOverlay = document.getElementById('pageOverlay');
  const closeButtons = document.querySelectorAll('.login-panel__close-button, .overlay__close-btn');

  function openOverlay(overlay) {
    overlay.style.right = '0';
    pageOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function closeOverlay(overlay) {
    overlay.style.right = '-440px';
    setTimeout(() => {
      pageOverlay.style.display = 'none';
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'auto';
    }, 500);
  }

  // Assegna gestori di eventi per aprire ogni overlay
  Object.values(icons).forEach((item) => {
    item.icon.addEventListener('click', function(event) {
      event.preventDefault();
      openOverlay(item.overlay);
    });
  });

  // Assegna gestori di eventi per chiudere gli overlay
  closeButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      Object.values(icons).forEach((item) => {
        closeOverlay(item.overlay);
      });
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const togglePassword = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('password');

  togglePassword.addEventListener('click', function() {
      // Cambia il tipo di input
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);

      // Cambia l'icona
      togglePassword.src = type === 'text' ? './src/images/icons/icon-eye-slash.png' : './src/images/icons/icon-eye.png';
      togglePassword.alt = type === 'text' ? 'Hide password' : 'Show password';
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const cartIcon = document.getElementById('cartIcon'); // o document.querySelector('.header__icon--cart') se usi la classe
  const cartCloseBtn = document.querySelector('.cart-close-btn');
  const cartOverlay = document.getElementById('cartOverlay');
  const pageOverlay = document.getElementById('pageOverlay');

  // Gestore dell'evento per aprire l'overlay del carrello
  cartIcon.addEventListener('click', function(event) {
      event.preventDefault(); // Previene il comportamento di default del link, se presente
      cartOverlay.style.right = '0'; // Mostra l'overlay
      pageOverlay.style.display = 'block'; // Mostra l'overlay di sfondo
      document.body.style.overflow = 'hidden'; // Blocca lo scroll del body
  });

  // Gestore dell'evento per chiudere l'overlay del carrello
  cartCloseBtn.addEventListener('click', function() {
      cartOverlay.style.right = '-100%'; // Nasconde l'overlay
      pageOverlay.style.display = 'none'; // Nasconde l'overlay di sfondo
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'auto';
  });
});

