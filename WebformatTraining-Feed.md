# Modulo "Webformat_Training - Feed"

|Specifica|Note|
|---------|----|
|Il/I modulo/i devono generare tramite comando CLI due file csv seguendo le indicazioni dei Feed di Google e Facebook.|Nella stessa cartella dell’esercizio e’ possibile trovare il file [Feed Guidelines](FeedGuidelines.pdf)|
|Se non esistono alcuni attributi di prodotto che vengono menzionati nel file pdf, crearli da BE e popolarli con una query a DB|    |
|Il comando CLI deve processare tutti gli store e generare per ognuno un feed differente che verra’ identificato dal nome: store_code_feed_vendor.csv<br/>Dove store_code e’ il codice dello store e vendor e’ Facebook o Google|    |
|Il comando CLI deve accettare un argomento, che sono gli store (il code) da processare, separati da virgola in caso piu’ di uno.<br/>Nel caso di nessun parametro passato, deve processare tutti gli store.|Con questa funzione e’ possibile selezionare quale store processare da linea di comando|
|Generare un file di log dettagliato per ogni creazione di feed, riempiendolo con I dati che sembrano utili (da ricordare di non inserire dati potenzialemente sensibili)|    |
|Puntare alle performance in quanto il modulo deve processare 26 store una volta al giorno, quindi deve essere performante|Come reference, il processo attuale di generazione feed impiega ~4minuti x store x feed con ~50k prodotti|