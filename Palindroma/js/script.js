// DICHIARO FUNZIONE CON PARAMETRO//
function palindrome (word){
// UTILIZZO IL METODO SPLIT PER CREARE UN ARRAY CON SINGOLE LETTERE, CON REVERSE INVERTO GLI ORDINI DEGLI ELEMENTI E USO JOIN PER UNIRLI
    let reverse_word = word.split("").reverse("").join("");

//INSERISCO IF

if (word===reverse_word)
    console.log(`la parola "${word}" è palindroma`)

}