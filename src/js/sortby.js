function toggleDropdown() {
    var dropdown = document.querySelector('.select-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Aggiunta per gestire il click fuori dal dropdown per chiuderlo
window.onclick = function(event) {
    if (!event.target.matches('.select-title span')) {
        var dropdowns = document.getElementsByClassName("select-dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}
