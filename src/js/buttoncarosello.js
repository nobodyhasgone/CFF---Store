document.addEventListener('DOMContentLoaded', function() {
    // Seleziona i bottoni di scorrimento
    const upButton = document.querySelector('.carousel-product__scroll-button--up');
    const downButton = document.querySelector('.carousel-product__scroll-button--down');
    // Seleziona il contenitore delle immagini
    const imagesContainer = document.querySelector('.carousel-product__images-container');

    // Evento per il pulsante di scorrimento verso l'alto
    upButton.addEventListener('click', function() {
        // Prende l'ultimo elemento (immagine) e lo sposta in cima alla lista
        if (imagesContainer.children.length > 1) {
            const lastImage = imagesContainer.lastElementChild;
            imagesContainer.insertBefore(lastImage, imagesContainer.firstElementChild);
        }
    });

    // Evento per il pulsante di scorrimento verso il basso
    downButton.addEventListener('click', function() {
        // Prende il primo elemento (immagine) e lo sposta in fondo alla lista
        if (imagesContainer.children.length > 1) {
            const firstImage = imagesContainer.firstElementChild;
            imagesContainer.appendChild(firstImage);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.carousel-product__image');
    const selectedImageContainer = document.querySelector('.carousel-product__selected-image-container img');

    images.forEach(image => {
        image.addEventListener('click', function() {
            const newSrc = this.src; // Prende il src dell'immagine cliccata
            selectedImageContainer.src = newSrc; // Imposta il src sull'immagine grande
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const imagesContainer = document.querySelector('.carousel-product__images-container');
    const images = imagesContainer.querySelectorAll('li');

    images.forEach(image => {
        image.addEventListener('click', function() {
            // Trova l'indice dell'elemento cliccato
            const startIndex = Array.from(images).indexOf(this);
            
            // Crea un array temporaneo degli elementi basato sull'indice dell'elemento cliccato
            const reorderedImages = [...images].slice(startIndex).concat([...images].slice(0, startIndex));

            // Rimuove tutti gli elementi attuali dalla lista
            while (imagesContainer.firstChild) {
                imagesContainer.removeChild(imagesContainer.firstChild);
            }

            // Aggiunge gli elementi riordinati alla lista
            reorderedImages.forEach(img => {
                imagesContainer.appendChild(img);
            });

            // Aggiorna la classe per l'elemento selezionato
            images.forEach(img => img.querySelector('img').classList.remove('carousel-product__image--selected'));
            this.querySelector('img').classList.add('carousel-product__image--selected');
        });
    });
});

function adjustCarouselDisplay() {
    var screenWidth = window.innerWidth; // Ottiene la larghezza attuale della finestra
    var caroselloProdotto = document.getElementById('caroselloProdotto');
    var caroselloMobile = document.getElementById('caroselloMobile');

    if (screenWidth <= 767) {
        caroselloProdotto.style.display = 'none'; // Nasconde il carosello prodotto
        caroselloMobile.style.display = 'block'; // Mostra il carosello mobile
    } else {
        caroselloProdotto.style.display = 'block'; // Mostra il carosello prodotto
        caroselloMobile.style.display = 'none'; // Nasconde il carosello mobile
    }
}

document.addEventListener('DOMContentLoaded', function() {
    adjustCarouselVisibility(); // Chiamata iniziale al caricamento della pagina
    window.addEventListener('resize', adjustCarouselVisibility); // Chiamata al ridimensionamento della finestra
  });
  
  function adjustCarouselVisibility() {
    const mobileCarousel = document.querySelector('.carousel-mobile');
    const desktopCarousel = document.querySelector('.carosello-desktop-hidden');
    const breakpoint = 768;
  
    // Controlla la larghezza della finestra e mostra/nasconde i componenti
    if (window.innerWidth < breakpoint) {
      mobileCarousel.style.display = 'block'; // Mostra il carosello mobile
      desktopCarousel.style.display = 'none'; // Nasconde il carosello desktop
    } else {
      mobileCarousel.style.display = 'none'; // Nasconde il carosello mobile
      desktopCarousel.style.display = 'flex'; // Mostra il carosello desktop
    }
  }
  
document.addEventListener("DOMContentLoaded", function() {
    // Funzione per controllare e aggiornare la visibilità dell'elemento
    function checkWidth() {
        var descriptionMobile = document.querySelector('.description-mobile');
        if (window.innerWidth > 768) {
            descriptionMobile.style.display = 'none'; // Nascondi se la larghezza è maggiore di 768px
        } else {
            descriptionMobile.style.display = 'block'; // Mostra altrimenti
        }
    }

    // Esegui al caricamento della pagina
    checkWidth();

    // Aggiungi ascoltatore di evento sul ridimensionamento della finestra
    window.addEventListener('resize', checkWidth);
});

// Aggiungi l'event listener per il resize della finestra
window.addEventListener('resize', adjustCarouselDisplay);

// Esegui la funzione al caricamento della pagina per impostare la visibilità corretta
window.addEventListener('DOMContentLoaded', adjustCarouselDisplay);