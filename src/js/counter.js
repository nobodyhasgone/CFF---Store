function changeCount(delta) {
    const valueElement = document.querySelector('.counter__value');
    let quantity = parseInt(valueElement.textContent);
    if ((delta === -1 && quantity > 1) || (delta === 1 && quantity < 5)) {
        quantity += delta;
    }
    valueElement.textContent = quantity;
}
