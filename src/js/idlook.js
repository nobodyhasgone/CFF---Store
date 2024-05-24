document.addEventListener('DOMContentLoaded', function() {
    const allElements = document.getElementsByTagName('*');
    const ids = {};
    let hasDuplicates = false;

    for (let i = 0; i < allElements.length; i++) {
        const id = allElements[i].id;
        if (id) {
            if (ids[id]) {
                console.warn('Duplicate ID found:', id);
                hasDuplicates = true;
            } else {
                ids[id] = true;
            }
        }
    }

    if (!hasDuplicates) {
        console.log('No duplicate IDs found.');
    }
});
