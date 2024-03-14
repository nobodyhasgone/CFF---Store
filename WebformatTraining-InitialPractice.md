# Esercizi di pratica iniziale

I seguenti esercizi vengono svolti in fase di formazione con l'eventuale aiuto del formatore.

## Installazione moduli tramite zip e composer

| Specifica                                         | Note                                                                                                              |
|---------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| Installare un modulo tramite pacchetto zip/tar.gz | Ad esempio `Webformat_Commons`, download da https://gitlab.webformatlabs.com/webformat/m2-modules/commons-library |
| Installare un modulo tramite composer             | Ad esempio `Mageplaza_Stmp` (https://www.mageplaza.com/magento-2-smtp/download/)                                  |

## Creazione di un nuovo modulo ed esercizio sulla preference

| Specifica                                                                                                               | Note |
|-------------------------------------------------------------------------------------------------------------------------|------|
| Creare un nuovo modulo `{{CognomeDev_Preference}}`                                                                      |      |
| Modificare il nome di un prodotto a frontend apponendo un suffisso `Preference` nel caso la lunghezza del nome sia > 10 |      |

## Esercizi sui plugin

| Specifica                                                                                                                                                                                                                                   | Note                                                                                                                                               |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Creare un nuovo modulo `{{CognomeDev_Plugins}}`                                                                                                                                                                                             |                                                                                                                                                    |
| Disabilitare la preference e sviluppare la stessa funzionalità con un plugin after, apponendo un suffisso `After`                                                                                                                           |                                                                                                                                                    |
| Disabilitare il plugin after e sviluppare la stessa funzionalità con un plugin around, apponendo un suffisso `Around`                                                                                                                       |                                                                                                                                                    |
| Modificare la logica di aggiunta a carrello di Magento in modo che venga forzata la quantità a un certo valore di quantità minima se la quantità aggiunta a carrello è minore di una certa quantità minima (che valoriziamo ad esempio a 3) | Esempio: seleziono 1 -> quantità a carrello diventa 3, seleziono 4 -> quantità a carrello resta 4. Il mini-cart viene escluso per scopi didattici. |

## Esercizi sugli observer

| Specifica                                                                                                                                                                                                                                                                | Note |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------|
| Creare un nuovo modulo `{{CognomeDev_Observer}}`                                                                                                                                                                                                                         |      |
| Impedire l’aggiunta a carrello di un prodotto qualora il totale a carrello, dopo il tentativo di aggiunta del prodotto nella quantità voluta, fosse maggiore di una certa quantità (es. 100 Euro). Dare un feedback sul motivo per cui il prodotto non è stato aggiunto. |      |

## Esercizi su EAV

| Specifica                                                                                                                                                                                                                                                           | Note                              |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
| Creare un nuovo modulo `{{CognomeDev_CustomProductAttribute}}`                                                                                                                                                                                                      |                                   |
| 1. Data patch per creare l’attributo `wf_season`, aggiungendo all’attribute group `Product Details`. Use in Search = 1, Use in Layered Navigation = 1, Use in Search Results Layered Navigation = 1, Visible on Catalog Pages on Storefront = 1, Scope = Store View | segue `setup:upgrade` e verifiche |
| 2. Data patch per modificare l’attributo `wf_season`, con `is_user_defined => 1`                                                                                                                                                                                    | segue `setup:upgrade` e verifiche |
| 3. Data patch per creare un gruppo `Webformat Attributes`, associarlo all'attribute set `Bottom` e associare l’attributo `wf_season` all'attribute group creato                                                                                                     | segue `setup:upgrade` e verifiche |
| 4. Data patch per aggiungere le 4 opzioni di default all'attributo `wf_season`                                                                                                                                                                                      | segue `setup:upgrade` e verifiche |

## Esercizi su command/logging

| Specifica                                                                                                                                            | Note |
|------------------------------------------------------------------------------------------------------------------------------------------------------|------|
| Creare un nuovo modulo `{{CognomeDev_CommandLog}}`                                                                                                   |      |
| Creare un comando CLI che, ricevuta in input una lista di store code, stampi per ognuno lo store id corrispondente e il nome dello store.            |      |
| La lista deve essere passata come argomento ed è opzionale. Nel caso non venga passato nulla restituire le informazioni per tutti gli store presenti |      |
| Il nome deve essere stampato solo se richiesto tramite parametro opzionale del comando                                                               |      |
| Fare una validazione degli store code segnalando eventuali store code errati                                                                         |      |
| Predisporre un logger su file specifico e loggare inizio a fine task ed eventuali errori/store non validi  <br/>                                     |      |

## Esercizi su routing/controller

| Specifica                                                                                                        | Note |
|------------------------------------------------------------------------------------------------------------------|------|
| Creare un nuovo modulo `{{CognomeDev_Routing}}`                                                                  |      |
| Creare una nuova route https://{{base_url}}/{{store_code}}/my-module/myroute/redirect che crei una pagina vuota. |      |
| Come secondo step vogliamo che faccia un redirect a carrello                                                     |      |





