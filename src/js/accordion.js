document.querySelectorAll('.accordion__button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        const icon = button.querySelector('.accordion__icon');

        // Toggle visibility and change icon
        if (accordionContent.style.maxHeight) {
            accordionContent.style.maxHeight = null;
            icon.src = './src/images/icons/plus-solid.svg'; // Cambia l'icona a "+"
            icon.alt = 'Expand'; // Aggiorna l'attributo alt per accessibilità
        } else {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            icon.src = './src/images/icons/minus-solid.svg'; // Cambia l'icona a "-"
            icon.alt = 'Collapse'; // Aggiorna l'attributo alt per accessibilità
        }
    });
});
