// 1 Definisco la funzione GenerateRandonNumber//
 
function generateRandonNumber(){
    return Math.floor( Math.random()*5 );
}

//2 Definisco la funzione checkEvenorOdd //
function checkEvenOrOdd(){
    if(sum % 2 ===0){
        return `pari`
    }

    return `dispari`
}

// 3 Dichiaro una variabile che conterrà il valore pari o dispari scelta dall'utente

let even_or_odd = prompt(`inserisci la parola "pari" o "dispari"`);

let number = parseInt(prompt(`inserisci un avlore numerico tra "1" e "5"`));

// genero il numero per il computer richiamando la funzione GenerateRandomNumber

let pc_number= generateRandonNumber();
console.log(pc_number);

let sum = number + pc_number;
console.log(sum);

let results= checkEvenOrOdd(sum);

if(even_or_odd.toLowerCase()===results){
    console.log(`hai vinto!`);
}
else{
console.log(`hai perso!`);
}