//aconsole.log('test di collegamento: il messaggio si legge nella console?')

/*DICHIARAZIONE VARIABILI*/

let firstName = prompt("inserire il proprio nome") //sting | null
let secondName = prompt("inserire il cognome") //sting | null
let favoriteColor = prompt ("inserire il proprio colore preferito") //sting | null

/*FINE DICHIARAZIONE VARIABILI*/

/*GNEREAZIONE NUMERO CAUSALE*/

let numberRandom = Math.random()
let number = Math.floor(numberRandom*10)

/* STAMPA RISULTATO */

console.log(firstName + secondName + favoriteColor + number)