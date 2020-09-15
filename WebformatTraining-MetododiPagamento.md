# Modulo "Webformat_Training - Metodo di pagamento"

|Specifica|Note|
|---------|----|
|Il modulo deve creare un nuovo metodo di pagamento denominato Contrassegno che sia selezionabile esclusivamente dal Customer Group Agente e abbia un incremento di X euro (personalizzabile da backoffice) alla selezione.|Creare il metodo di pagamento da BE basandosi su un metodo di pagamento standard di Magento (probabilmente il Bank Transfer e’ il piu’ semplice)<br/><br/>Creare il customer group da BE, assegnare manualmente da backoffice un utente di test.|
|Il modulo, per il customer group Agente deve inibire tutti I metodi di pagamento a parte il nuovo Contrassegno|    |
|Il modulo, per tutti I customer group che non sono Agente deve inibire il metodo di pagamento Contrassegno|    |
|Il modulo deve ovviamente aggiungere una configurazione in Stores > Configuration > Sales > Payment Methods e deve avere la possibilita’ di personalizzare il nome che viene mostrato a FE, il costo del servizio, le country nella quale il servizio deve essere mostrato.|    |