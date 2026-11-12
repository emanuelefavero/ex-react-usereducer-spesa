# EX - React useReducer Spesa

<img src="public/favicon.svg" alt="React Context API icon" width="48" />

Esercizio di React su carrello della spesa e useReducer, dal mio corso web dev (specializzazione Frontend).

## Sviluppo locale

Per avviare l'applicazione in locale, clonare il repository ed eseguire i seguenti comandi:

```bash
npm install
npm run dev
```

## Consegna

### Milestone 1 — Lista dei prodotti

Parti dall'array `products` fornito e crea un componente che mostri la lista dei prodotti. Per ogni prodotto, mostra il nome e il prezzo, in modo da ottenere un elenco leggibile.

```js
const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
];
```

### Milestone 2 — Aggiunta al carrello

Crea uno stato locale `addedProducts`, inizialmente un array vuoto, per rappresentare i prodotti nel carrello.

Aggiungi un bottone "Aggiungi al carrello" accanto a ogni prodotto della lista. Al click, chiama la funzione `addToCart`: se il prodotto non è ancora presente, aggiungilo con la proprietà `quantity = 1`; se è già nel carrello, per questa milestone ignora l'azione.

Quando il carrello contiene almeno un elemento, mostra sotto alla lista dei prodotti un elenco degli articoli aggiunti, indicando nome, prezzo e quantità di ciascuno.

### Milestone 3 — Gestione del carrello

Modifica il comportamento del bottone "Aggiungi al carrello": quando il prodotto è già presente, usa la funzione `updateProductQuantity` per incrementarne la quantità.

Per ogni articolo nel carrello, aggiungi un bottone "Rimuovi dal carrello" che chiami `removeFromCart` per rimuovere l'intero articolo.

Infine, mostra sotto alla lista del carrello il totale da pagare. Calcolalo moltiplicando il prezzo per la quantità di ogni articolo e sommando tutti i risultati. Il totale deve aggiornarsi quando aggiungi o rimuovi prodotti o ne modifichi la quantità.

### Bonus 1 — Quantità modificabili

Nel carrello, al posto del solo numero della quantità, mostra un input di tipo `number`. Quando l'utente ne modifica il valore, chiama `updateProductQuantity` per aggiornare la quantità dell'articolo.

Adatta la funzione per gestire anche i valori limite: forza i numeri decimali a essere interi e non permettere quantità inferiori a 1.

### Bonus 2 — useReducer

Sostituisci `useState` con `useReducer` per gestire lo stato del carrello, mantenendo un array vuoto come valore iniziale.

Crea una funzione `cartReducer(state, action)` che gestisca queste azioni:

- `ADD_ITEM`: aggiunge un nuovo articolo con `quantity = 1`.
- `REMOVE_ITEM`: rimuove un articolo specifico.
- `UPDATE_QUANTITY`: aggiorna la quantità di un articolo esistente, gestendo anche i valori non validi.

Usa `dispatch` per inviare le azioni al reducer e sposta al suo interno la logica di aggiornamento del carrello. Per le azioni non riconosciute, restituisci lo stato corrente.

## License

- [MIT](LICENSE.md)

&nbsp;

---

&nbsp;

[**Go To Top &nbsp; ⬆️**](#ex---react-usereducer-spesa)
