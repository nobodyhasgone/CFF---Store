
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('cardsContainer');
    const numCards = 12; // Assumendo che tu voglia generare 36 card

    // Generazione delle card
    for (let i = 0; i < numCards; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card__image-container">
                <img src="../src/images/product/imgproduct.svg" class="card__image" alt="Product">
                <a href="productpage.html" class="card__btn-link">
                <button class="card__btn">Material</button>
            </a>
            </div>
            <h2 class="card__name">Lumberjack Jacket</h2>
            <p class="card__description">Sandal suede shearling Lumberjack Jacket</p>
            <div class="card__bottom">
                <span class="card__price">€ 00.000,00</span>
                <span class="card__favorite"><img src="../src/images/product/hearticon.svg" alt="Add to Favorites"></span>
            </div>
        `;
        container.appendChild(card);
    }

    // Aggiunta degli event listeners per il toggle delle icone dei cuori
    container.addEventListener('click', function(event) {
        if (event.target.parentElement.classList.contains('card__favorite')) {
            const img = event.target;
            const isHeartFull = img.src.includes('full-heart.svg');
            img.src = isHeartFull ? '../src/images/product/hearticon.svg' : '../src/images/product/full-heart.svg';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const pageNumbers = document.querySelectorAll('.page-number');
    const arrow = document.querySelector('.pagination-arrow');
    const arrowImg = arrow.querySelector('.arrow');
    const loadingOverlay = document.querySelector('.loading-overlay');

    function handlePageChange(currentId) {
        // Mostra l'overlay di caricamento
        loadingOverlay.style.display = 'flex';

        // Finta attesa di 2 secondi per il caricamento
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
            window.scrollTo(0, 0); // Torna in cima alla pagina
            
            // Aggiorna la posizione e la rotazione della freccia
            arrow.style.order = (currentId === 'page1') ? 2 : -1;
            arrowImg.style.transform = (currentId === 'page1') ? 'rotate(0deg)' : 'rotate(180deg)';
            
            // Aggiorna la classe 'current-page'
            pageNumbers.forEach(page => {
                page.classList.remove('current-page');
                if (page.id === currentId) {
                    page.classList.add('current-page');
                }
            });
        }, 2000);
    }

    // Aggiungi event listener ai numeri di pagina e alla freccia
    [...pageNumbers, arrow].forEach(element => {
        element.addEventListener('click', () => {
            const targetId = element.id || (arrow.style.order === "-1" ? 'page1' : 'page2');
            handlePageChange(targetId);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const pageNumbers = document.querySelectorAll('.page-number');

    function updateCurrentPage(newActivePage) {
        // Rimuovi la classe 'current-page' da tutti i numeri di pagina
        pageNumbers.forEach(page => page.classList.remove('current-page'));

        // Aggiungi la classe 'current-page' al nuovo numero di pagina attivo
        newActivePage.classList.add('current-page');
    }

    // Aggiungi event listener a ciascun numero di pagina
    pageNumbers.forEach(page => {
        page.addEventListener('click', function() {
            updateCurrentPage(this);
        });
    });
});
