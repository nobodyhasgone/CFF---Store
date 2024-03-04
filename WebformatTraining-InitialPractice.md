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






