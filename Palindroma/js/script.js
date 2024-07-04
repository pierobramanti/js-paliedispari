// DICHIARO FUNZIONE CON PARAMETRO//
//function palindrome (word){
// UTILIZZO IL METODO SPLIT PER CREARE UN ARRAY CON SINGOLE LETTERE, CON REVERSE INVERTO GLI ORDINI DEGLI ELEMENTI E USO JOIN PER UNIRLI
    //let reverse_word = word.split("").reverse("").join("");

//INSERISCO IF//

//if (word===reverse_word){
    //console.log(`la parola "${word}" è palindroma`);
//}

// INSERISCO ELSE
//else {
    //console.log(`la parola "${word}" non è plaindroma`); 
//}
//}

// DICHIARO UNA VARIABILE A CUI ASSEGNO VALORE PROMPT COME INPUT//
//let new_word = prompt("inserisci una parola per scoprire se è palindroma");

// DICHIARO IL PARAMETRO DELLA FUNZIONE//

 //palindrome(new_word);

 
//--------------------------- UTILIZZO CICLO FOR----------------------------------//


function palindrome(word) {
    // Creo una variabile per memorizzare la parola invertita
    let reverse_word = "";

    // Utilizzo un ciclo for per invertire la parola
    for (let i = word.length - 1; i >= 0; i--) {
        reverse_word += word[i];
    }

    // Inserisco if
    if (word === reverse_word) {
        console.log(`la parola "${word}" è palindroma`);
    } 
    // Inserisco else
    else {
        console.log(`la parola "${word}" non è palindroma`);
    }
}

// Dichiaro una variabile a cui assegno valore prompt come input
let new_word = prompt("inserisci una parola per scoprire se è palindroma");

// Dichiaro il parametro della funzione
palindrome(new_word);