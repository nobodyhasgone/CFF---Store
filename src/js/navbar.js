function toggleMenu() {
  const sideMenu = document.getElementById('side-menu');
  if (sideMenu.classList.contains('active')) {
    sideMenu.classList.remove('active');
    sideMenu.style.display = 'none';
  } else {
    sideMenu.classList.add('active');
    sideMenu.style.display = 'block';
  }
}


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


