document.addEventListener('DOMContentLoaded', function() {
    let modalShown = false; // Variabile per tracciare se il modale è stato mostrato
    let modalTimeout; // Variabile per il timeout
    const startTime = performance.now(); // Tempo di inizio

    console.time('ModalCreationTime'); // Inizia il timer per misurare la velocità di creazione del modale

    function showModal() {
        console.log("Eseguendo showModal.");
        document.getElementById('overlay-modal').style.display = 'flex';
        requestAnimationFrame(() => {
            console.timeEnd('ModalCreationTime'); // Termina il timer e stampa il risultato
            const endTime = performance.now(); // Tempo di fine
            console.log(`Tempo di renderizzazione del modale: ${endTime - startTime} ms`);
        });
    }

    function closeModal() {
        console.log("Eseguendo closeModal.");
        document.getElementById('overlay-modal').style.display = 'none';
        clearTimeout(modalTimeout); // Cancella il timeout per evitare che il modale si riapra
    }

    document.querySelectorAll('.modal__button--continue').forEach(function(button) {
        button.addEventListener('click', function() {
            console.log("Pulsante 'Continue' cliccato.");
            closeModal();
        });
    });

    document.querySelector('.modal__button--change-country').addEventListener('click', function() {
        console.log("Pulsante 'Change Country' cliccato.");
        document.getElementById('modal1').classList.add('modal--hidden');
        document.getElementById('modal2').classList.remove('modal--hidden');
    });

    document.querySelector('.modal__link--cancel').addEventListener('click', function(event) {
        event.preventDefault();
        console.log("Link 'Cancel' cliccato.");
        closeModal();
    });

    // Imposta il timeout per mostrare il modale dopo 2 secondi
    modalTimeout = setTimeout(function() {
        if (!modalShown) {
            console.log("Mostrando il modale per la prima volta.");
            showModal();
            modalShown = true; // Imposta la variabile a true quando il modale è mostrato
        } else {
            console.log("Il modale è già stato mostrato.");
        }
    }, 2000);
});
