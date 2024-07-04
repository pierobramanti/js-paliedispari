// DICHIARO UNA VARIABILE A CUI ASSEGNO METODO PROMPT//

 let userChoice = prompt("Scrivi pari o dispari").toLowerCase();

// DICHIARO UNA SECONDA VARIABILE PER INSERIRE UN NUMERO//
 let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

 function pcNumber(){
    return Math.floor(Math.random() * 5) + 1;
 }