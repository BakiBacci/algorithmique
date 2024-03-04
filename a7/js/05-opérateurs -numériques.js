// Les opérateurs arithmétique

// +,-,*,/,%, **(puissance)

// déclarer une constante opération a qui on affecte l'addiction de 6786786 et 789789
// Afficher en console le résultat du calcul est opération 

let operation = 6786786 +789789;
console.log (`le résulat est ${operation}`)

// soustraction, multiplication et division 

const soustraction = 741741-123123;
console.log(`le resultat de la soustraction est ${soustraction}`)

const multiplication = 55555*78462188
console.log(`le résultat est ${multiplication}`)

const division = 4875616584/15548546
console.log(`${division} est le résultat`)

// Modulo est le reste de la division
operation = 10%741
console.log(operation)

// on va demander à l'utilisateur deux nombres 

// si le nombre est divisible par le premier 
//  affichez ce nombre est un multiple du deuxième
// sinon ce n'est pas un multiple

const response = prompt ('chioisi un nombre')
const response2 = prompt('choisi en un autre')

if (response%response2 == 0){
    console.log(`${response2} est un multiple de ${response}`)

} else{
    console.log('faux')
}
 
let puissance = 10**6;
console.log(`le resultat est ${puissance}`)


