document.addEventListener('DOMContentLoaded', function() {
    const toggleFiltersButton = document.getElementById('toggleFilters');
    const filtersOverlay = document.querySelector('.filters-overlay');
    const closeButton = document.querySelector('.container__filters-close'); // Seleziona l'immagine usata per chiudere

    // Apri il menu dei filtri
    toggleFiltersButton.addEventListener('click', function() {
        filtersOverlay.style.display = 'block'; // Mostra il componente dei filtri
    });

    // Chiudi il menu dei filtri
    closeButton.addEventListener('click', function() {
        filtersOverlay.style.display = 'none'; // Nasconde il componente dei filtri
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const subtitles = document.querySelectorAll('.container__filters-subtitle');

    subtitles.forEach(subtitle => {
        subtitle.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-toggle');
            const section = document.getElementById(sectionId);
            if (section.style.display === 'none' || section.style.display === '') {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.container__filters-color').forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('selected');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const filterBtn = document.getElementById('toggleFilters');
    const originalTop = filterBtn.offsetTop; // Memorizza la posizione originale del bottone

    window.addEventListener('scroll', function() {
        if (window.scrollY > 115) {
            filterBtn.style.position = 'fixed';
            filterBtn.style.top = '115px'; // Imposta il bottone a 115px dal top
            filterBtn.style.zIndex = '1000'; // Assicura che il bottone abbia un z-index elevato
        } else {
            filterBtn.style.position = ''; // Rimuovi la posizione fixed
            filterBtn.style.top = ''; // Resetta la proprietà top
            filterBtn.style.zIndex = ''; // Resetta il z-index
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Seleziona tutti i bottoni con la classe 'small_chips'
    const buttons = document.querySelectorAll('.small_chips');

    // Aggiungi un event listener per il click a ogni bottone
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Aggiungi o rimuovi anche 'small_chips-active' se necessario
            this.classList.toggle('small_chips-active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Seleziona il bottone 'Clear all'
    const clearButton = document.querySelector('.btn_default-secondary');

    // Aggiungi un event listener per il click a 'Clear all'
    clearButton.addEventListener('click', function() {
        // Seleziona tutti i bottoni con la classe 'small_chips-active'
        const activeButtons = document.querySelectorAll('.small_chips-active');
        
        // Rimuovi la classe 'small_chips-active' da ogni bottone
        activeButtons.forEach(button => {
            button.classList.remove('small_chips-active');
        });
    });
});
