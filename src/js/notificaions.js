document.addEventListener("DOMContentLoaded", function() {
    const sizeSelect = document.getElementById('size-select');
    const stockAlert = document.querySelector('.stock-alert');

    sizeSelect.addEventListener('change', function() {
        if (this.value === '48') {
            stockAlert.style.display = 'block';  // Show the notification component
        } else {
            stockAlert.style.display = 'none';   // Hide the notification component
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Ottiene l'elemento select tramite il suo ID
    const sizeSelect = document.getElementById('size-select');
    // Ottiene il bottone che aggiungeremo al carrello, assicurandosi che sia l'unico o il corretto bottone
    const addToCartButton = document.querySelector('.button-size');

    // Aggiunge un event listener al cambio di selezione sulla select
    sizeSelect.addEventListener('change', function() {
        // Controlla se il valore selezionato è '48'
        if (this.value === '48') {
            // Mostra il componente di notifica (se necessario, dipende dalla tua implementazione)
            // Aggiunge la classe per disabilitare il bottone e imposta il bottone come non cliccabile
            addToCartButton.classList.add('btn_default-primary-disabled');
            addToCartButton.classList.remove('button-size');
            addToCartButton.disabled = true;
        } else {
            // Rimuove la classe per disabilitare e riabilita il bottone
            addToCartButton.classList.remove('btn_default-primary-disabled');

            addToCartButton.classList.add('button-size');
            addToCartButton.disabled = false;
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const sizeSelect = document.getElementById('size-select');
    const stockAlert = document.querySelector('.stock-alert');
    const option48 = sizeSelect.querySelector('option[value="48"]');

    sizeSelect.addEventListener('click', function() {
        setTimeout(() => {
            if (sizeSelect.value === '48') {
                stockAlert.style.display = 'block'; // Mostra il componente di notifica
                option48.style.color = 'red'; // Cambia il colore dell'opzione "48" in rosso
                sizeSelect.style.borderColor = 'red'; // Cambia il colore del bordo in rosso
                console.log("rosso");
            } else {
                stockAlert.style.display = 'none'; // Nasconde il componente di notifica
                option48.style.color = 'black'; // Reimposta il colore dell'opzione "48"
                sizeSelect.style.borderColor = 'black'; // Reimposta il colore del bordo
            }
        }, 1);
    });
});


