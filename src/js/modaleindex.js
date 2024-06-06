// document.addEventListener('DOMContentLoaded', function() {
//     let modalShown = false; // Variabile per tracciare se il modale è stato mostrato
//     let modalTimeout; // Variabile per il timeout
//     const startTime = performance.now(); // Tempo di inizio

//     console.time('ModalCreationTime'); // Inizia il timer per misurare la velocità di creazione del modale

//     function showModal() {
//         console.log("Eseguendo showModal.");
//         document.getElementById('overlay-modal').style.display = 'flex';
//         requestAnimationFrame(() => {
//             console.timeEnd('ModalCreationTime'); // Termina il timer e stampa il risultato
//             const endTime = performance.now(); // Tempo di fine
//             console.log(`Tempo di renderizzazione del modale: ${endTime - startTime} ms`);
//         });
//     }

//     function closeModal() {
//         console.log("Eseguendo closeModal.");
//         document.getElementById('overlay-modal').style.display = 'none';
//         clearTimeout(modalTimeout); // Cancella il timeout per evitare che il modale si riapra
//     }

//     document.querySelectorAll('.modal__button--continue').forEach(function(button) {
//         button.addEventListener('click', function() {
//             console.log("Pulsante 'Continue' cliccato.");
//             closeModal();
//         });
//     });

//     document.querySelector('.modal__button--change-country').addEventListener('click', function() {
//         console.log("Pulsante 'Change Country' cliccato.");
//         document.getElementById('modal1').classList.add('modal--hidden');
//         document.getElementById('modal2').classList.remove('modal--hidden');
//     });

//     document.querySelector('.modal__link--cancel').addEventListener('click', function(event) {
//         event.preventDefault();
//         console.log("Link 'Cancel' cliccato.");
//         closeModal();
//     });

//     // Imposta il timeout per mostrare il modale dopo 2 secondi
//     modalTimeout = setTimeout(function() {
//         if (!modalShown) {
//             console.log("Mostrando il modale per la prima volta.");
//             showModal();
//             modalShown = true; // Imposta la variabile a true quando il modale è mostrato
//         } else {
//             console.log("Il modale è già stato mostrato.");
//         }
//     }, 2000);
// });



document.addEventListener('DOMContentLoaded', function() {
    const overlayModal = document.getElementById('overlay-modal');
    const modal1 = document.getElementById('modal1');
    const modal2 = document.getElementById('modal2');
    let modalTimeout;

    console.time('ModalCreationTime'); // Inizia il timer per misurare la velocità di creazione del modale
    console.log('La pagina è stata caricata. Iniziando il controllo del modale.');

    function showModal() {
        console.log("Eseguendo showModal.");
        overlayModal.style.display = 'flex';
        modal1.classList.remove('modal--hidden');
        modal2.classList.add('modal--hidden');
        requestAnimationFrame(() => {
            console.timeEnd('ModalCreationTime'); // Termina il timer e stampa il risultato
            const endTime = performance.now(); // Tempo di fine
            console.log(`Tempo di renderizzazione del modale: ${endTime - startTime} ms`);
        });
    }

    function closeModal() {
        console.log("Eseguendo closeModal.");
        overlayModal.style.display = 'none';
        clearTimeout(modalTimeout); // Cancella il timeout per evitare che il modale si riapra
        const currentTime = new Date().getTime();
        sessionStorage.setItem('modalClosedAt', currentTime);
        console.log(`Il modale è stato chiuso e il tempo di chiusura è stato salvato in sessionStorage: ${new Date(currentTime).toLocaleString()}`);
    }

    function hasFiveMinutesPassed() {
        const modalClosedAt = sessionStorage.getItem('modalClosedAt');
        if (modalClosedAt) {
            const currentTime = new Date().getTime();
            const isExpired = (currentTime - modalClosedAt) > (5 * 60 * 1000);
            console.log(`Tempo di chiusura del modale recuperato: ${new Date(Number(modalClosedAt)).toLocaleString()}, tempo corrente: ${new Date(currentTime).toLocaleString()}, 5 minuti passati: ${isExpired}`);
            return isExpired;
        }
        console.log("Nessun tempo di chiusura del modale trovato in sessionStorage.");
        return true;
    }

    function checkAndShowModal() {
        if (hasFiveMinutesPassed()) {
            console.log("Sono passati più di 5 minuti o il modale non è stato mostrato prima. Imposto il timeout per mostrarlo.");
            modalTimeout = setTimeout(function() {
                console.log("Mostrando il modale per la prima volta.");
                showModal();
            }, 2000);
        } else {
            console.log("Il modale è già stato mostrato recentemente e non sono ancora passati 5 minuti.");
        }
    }

    document.querySelectorAll('.modal__button--continue').forEach(function(button) {
        button.addEventListener('click', function() {
            console.log("Pulsante 'Continue' cliccato.");
            closeModal();
        });
    });

    document.querySelector('.modal__button--change-country').addEventListener('click', function() {
        console.log("Pulsante 'Change Country' cliccato.");
        modal1.classList.add('modal--hidden');
        modal2.classList.remove('modal--hidden');
    });

    document.querySelector('.modal__link--cancel').addEventListener('click', function(event) {
        event.preventDefault();
        console.log("Link 'Cancel' cliccato.");
        closeModal();
    });

    // Esegui il controllo del modale
    checkAndShowModal();
});
