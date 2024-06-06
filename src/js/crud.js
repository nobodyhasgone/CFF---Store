// Verifica se esiste già un file JSON vuoto nel local storage, altrimenti crealo
if (!localStorage.getItem('userData')) {
    const initialData = {
        users: []
    };
    localStorage.setItem('userData', JSON.stringify(initialData));
}

// Funzione per aggiungere un nuovo utente
function addUser(name, surname, email, password) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const newUser = {
        id: Date.now(),
        name: name,
        surname: surname,
        email: email,
        password: password,
        billingAddress: {},
        shippingAddress: {},
        paymentMethods: {}
    };
    userData.users.push(newUser);
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('loggedInUser', email); // Memorizza l'email dell'utente appena registrato
}

// Funzione per ottenere i dati di un utente
function getUser(email) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    return userData.users.find(user => user.email === email);
}

// Funzione per aggiornare i dati di un utente
function updateUser(email, newData) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userIndex = userData.users.findIndex(user => user.email === email);
    if (userIndex !== -1) {
        userData.users[userIndex] = { ...userData.users[userIndex], ...newData };
        localStorage.setItem('userData', JSON.stringify(userData));
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Gestione della registrazione nella pagina createaccount.html
    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const surname = document.getElementById('last-name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            addUser(name, surname, email, password);
            alert('Account creato con successo!');
            window.location.href = "mylogin.html"; // Redirect alla pagina mylogin.html
        });
    }

    // Popolare i campi dell'utente nella pagina mylogin.html
    const userPage = document.querySelector('.mylogin__main-container');
    if (userPage) {
        const loggedInUserEmail = localStorage.getItem('loggedInUser'); // Recupera l'email dell'utente loggato
        const user = getUser(loggedInUserEmail);
        if (user) {
            document.getElementById('generalinfo-name').textContent = user.name;
            document.getElementById('generalinfo-surname').textContent = user.surname;
            document.getElementById('generalinfo-email').textContent = user.email;
            document.getElementById('billingaddress-street').textContent = user.billingAddress.street || '';
            document.getElementById('billingaddress-city').textContent = user.billingAddress.city || '';
            document.getElementById('billingaddress-zipcode').textContent = user.billingAddress.zipcode || '';
            document.getElementById('billingaddress-country').textContent = user.billingAddress.country || '';
            document.getElementById('shippingaddresses-street').textContent = user.shippingAddress.street || '';
            document.getElementById('shippingaddresses-city').textContent = user.shippingAddress.city || '';
            document.getElementById('shippingaddresses-zipcode').textContent = user.shippingAddress.zipcode || '';
            document.getElementById('shippingaddresses-country').textContent = user.shippingAddress.country || '';
            document.getElementById('paymentmethod-paypal').textContent = user.paymentMethods.paypal || '';
            document.getElementById('paymentmethod-creditcard').textContent = user.paymentMethods.creditCard || '';
            document.getElementById('paymentmethod-cryptocurrency').textContent = user.paymentMethods.cryptocurrency || '';
        }
    }

    // Gestione della modifica nella pagina editgeneralinfo.html
    const editForm = document.getElementById('edit-generalinfo-form');
    if (editForm) {
        const loggedInUserEmail = localStorage.getItem('loggedInUser');
        const user = getUser(loggedInUserEmail);
        if (user) {
            document.getElementById('name').value = user.name;
            document.getElementById('surname').value = user.surname;
            document.getElementById('email').value = user.email;
        }

        const saveAndEditButton = document.querySelector('.edit-info__buttons-wrapper .btn_default-primary-active');
        if (saveAndEditButton) {
            saveAndEditButton.addEventListener('click', function() {
                saveUserInfo();
                alert('General info updated successfully!');
                window.location.href = "editgeneralinfo.html";
            });
        }

        editForm.addEventListener('submit', function(event) {
            event.preventDefault();
            saveUserInfo();
            alert('General info updated successfully!');
            window.location.href = "mylogin.html";
        });
    }

    function saveUserInfo() {
        const updatedName = document.getElementById('name').value;
        const updatedSurname = document.getElementById('surname').value;
        const updatedEmail = document.getElementById('email').value;
        const loggedInUserEmail = localStorage.getItem('loggedInUser');
        updateUser(loggedInUserEmail, { name: updatedName, surname: updatedSurname, email: updatedEmail });
        localStorage.setItem('loggedInUser', updatedEmail); // Aggiorna l'email dell'utente loggato
    }
});
