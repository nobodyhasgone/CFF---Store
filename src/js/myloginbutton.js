// document.addEventListener("DOMContentLoaded", () => {
//     const buttons = document.querySelectorAll(".mylogin__button");
    
//     buttons.forEach(button => {
//         button.addEventListener("click", () => {
//             buttons.forEach(btn => btn.classList.remove("mylogin__button--selected", "mylogin__button--deselected"));
//             button.classList.add("mylogin__button--selected");
            
//             buttons.forEach(btn => {
//                 if (!btn.classList.contains("mylogin__button--selected")) {
//                     btn.classList.add("mylogin__button--deselected");
//                 }
//             });
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".mylogin__button");
    const sections = {
        information: document.getElementById("section-information"),
        orders: document.getElementById("section-orders"),
        returns: document.getElementById("section-returns")
    };

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            updateActiveButton(button);
        });
    });

    function updateActiveButton(activeButton) {
        buttons.forEach(btn => btn.classList.remove("mylogin__button--selected", "mylogin__button--deselected"));
        activeButton.classList.add("mylogin__button--selected");

        Object.keys(sections).forEach(key => {
            sections[key].style.display = key === activeButton.id ? "block" : "none";
        });

        buttons.forEach(btn => {
            if (!btn.classList.contains("mylogin__button--selected")) {
                btn.classList.add("mylogin__button--deselected");
            }
        });
    }

    // Funzione per selezionare automaticamente il pulsante "Information" all'avvio
    function selectDefaultButton() {
        const defaultButton = document.getElementById("information");
        if (defaultButton) {
            updateActiveButton(defaultButton);
        }
    }

    // Chiamata alla funzione per selezionare il pulsante di default
    selectDefaultButton();
});
