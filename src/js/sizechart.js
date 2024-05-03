document.addEventListener('DOMContentLoaded', function() {
    const sizeChartLink = document.querySelector('.size-chart-link');
    const sizeChart = document.querySelector('.size-chart');
    const overlay = document.querySelector('.overlay__size-chart');
    const closeButton = document.querySelector('.size-chart__close');

    sizeChartLink.addEventListener('click', function(event) {
        event.preventDefault();
        overlay.style.display = 'block';
        sizeChart.style.display = 'block';
        console.log("attivo");
    });

    closeButton.addEventListener('click', function() {
        overlay.style.display = 'none';
        sizeChart.style.display = 'none';
    });
});

   // Ottieni il riferimento al pulsante
   var button = document.querySelector('.size-chart__button');

   // Aggiungi un gestore di eventi al clic del pulsante
   button.addEventListener('click', function() {
       // Reindirizza alla pagina specificata
       window.location.href = 'productpage.html';
   });

/* Apertura e chiusura SizeChart menu laterale */
document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.getElementById('size-chart__messagesOverlay');
    var closeBtn = overlay.querySelector('.size-chart__overlay-close-btn');

    var pageOverlay = document.getElementById('size-chart__pageOverlay');

    var openOverlay = function() {
        overlay.style.right = '0'; // Mostra l'overlay
        pageOverlay.style.display = 'block'; // Mostra l'overlay della pagina
    };

    var closeOverlay = function() {
        overlay.style.right = '-100%'; // Nasconde l'overlay
        pageOverlay.style.display = 'none'; // Nasconde l'overlay della pagina
    };

    var overlayClickHandler = function(event) {
        if (event.target === overlay) {
            closeOverlay(); // Chiude l'overlay se si clicca al di fuori della finestra
        }
    };

    // Evento per aprire l'overlay quando si fa clic sul link
    document.querySelector('.size-chart__help-link').addEventListener('click', function(event) {
        event.preventDefault();
        openOverlay();
    });

    // Evento per chiudere l'overlay quando si fa clic sul pulsante di chiusura
    closeBtn.addEventListener('click', function() {
        closeOverlay();
    });

    // Evento per chiudere l'overlay quando si fa clic sull'overlay della pagina
    pageOverlay.addEventListener('click', function() {
        closeOverlay();
    });

    // Evento per chiudere l'overlay quando si preme il tasto Esc sulla tastiera
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeOverlay();
        }
    });

    // Evento per impedire la propagazione del clic sull'overlay
    overlay.addEventListener('click', overlayClickHandler);
});

