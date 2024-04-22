function toggleSublist(element) {
  var sublist = element.nextElementSibling; // La sottolista
  var listItem = element.parentNode; // L'elemento li che contiene il link e la sottolista

  if (sublist.style.display === 'none') {
    sublist.style.display = 'block';
    element.children[0].src = './src/images/icons/minus-solid.svg'; // Cambia l'icona in '-'
    listItem.style.marginBottom = sublist.scrollHeight + "px"; // Aggiunge un margine inferiore pari all'altezza della sottolista
  } else {
    sublist.style.display = 'none';
    element.children[0].src = './src/images/icons/plus-solid.svg'; // Cambia l'icona in '+'
    listItem.style.marginBottom = "0"; // Rimuove il margine inferiore
  }
}

function toggleContactsMenu() {
  const contactsMenu = document.getElementById('contacts-menu');

  if (contactsMenu.style.display === 'none' || !contactsMenu.style.display) {
      contactsMenu.style.display = 'block';
      contactsMenu.classList.add('active');
  } else {
      contactsMenu.style.display = 'none';
      contactsMenu.classList.remove('active');
  }
}

function toggleMenu(menuId) {
  const menu = document.getElementById(menuId);
  const body = document.body;

  // Toggle della visibilità basato sulla presenza della classe 'active'
  if (menu.classList.contains('active')) {
      menu.classList.remove('active');
      menu.style.display = 'none';
      body.classList.remove('no-scroll'); // Abilita lo scorrimento del corpo della pagina
  } else {
      menu.classList.add('active');
      menu.style.display = 'block';
      body.classList.add('no-scroll'); // Disabilita lo scorrimento del corpo della pagina
  }
}

function toggleMenu(menuId) {
  const menu = document.getElementById(menuId);
  if (menu.style.display === 'none' || !menu.style.display) {
      menu.style.display = 'block';
      menu.classList.add('active');
      document.body.style.overflow = 'hidden'; // Opzionale: blocca lo scroll del body quando il menu è aperto
  } else {
      menu.style.display = 'none';
      menu.classList.remove('active');
      document.body.style.overflow = 'auto'; // Ripristina lo scroll del body
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Funzione per aggiornare lo stato del header e delle icone
  function updateHeader() {
    const header = document.querySelector('.mobile-navbar');
    const searchIcon = document.querySelector('.mobile-navbar__icon-link--search img');
    const shoppingIcon = document.querySelector('.mobile-navbar__icon-link--cart img');
    const isHomePage = document.body.classList.contains('home--mobile');

    if (window.scrollY > 50) {
      if (isHomePage) {
        header.classList.add('scrolled');
        // Cambia le icone per la modalità "scrolled"
        searchIcon.src = './src/images/icons/magnifierb.svg';
        shoppingIcon.src = './src/images/icons/shoppingbagb.svg';
        // Assicurati che le icone siano visibili
        searchIcon.classList.remove('visually-hidden');
        shoppingIcon.classList.remove('visually-hidden');
      }
    } else {
      if (isHomePage) {
        header.classList.remove('scrolled');
        // Reimposta le icone per la modalità trasparente
        searchIcon.src = './src/images/icons/magnifier.svg';
        shoppingIcon.src = './src/images/icons/Shopping Icon.svg';
        // Reimposta la visibilità se necessario
        searchIcon.classList.add('visually-hidden');
        shoppingIcon.classList.add('visually-hidden');
      }
    }
  }

  // Controlla lo stato iniziale al caricamento della pagina
  updateHeader();

  // Aggiorna lo stato all'evento di scroll
  window.addEventListener('scroll', updateHeader);
});






