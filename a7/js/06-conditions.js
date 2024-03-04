//  Instructions conditionelles

// les opérateurs de comparaison ( == , ===, !=, !==; >, >=, <, <=)
// declarer une constante condition a qui on donne un nombre en valeur
// const sentence = "je suis" + name +  ''  + "j'ai" +'' + age  +'' + "et je suis une formation d'"+ formaérifier si ce nombre esr supérieur ou égale à 18 si c'est le cas affichez vous etes majeur


// Si la condidyion est vraie ( truthy), le bloc d'instruction est exécuté sinon il est ignoré
const condition = 18
if( condition >= 18)
    console.log('vous etes majeur')

    // Décalrer une variable qui contient un nombre ( demandeer à l'user)
    // si le nombre est divisible par 3, afficher fizz
    // si le nombre est divisible par 5 afficher buzz
    // s'il est divisible par 3 et 5 afficher fizzbuzz
    // sinon afficher un alert le nombre

    
    /*const reponse = prompt('donner un nombre')
    if( reponse % 3 == 0 && reponse % 5 ==0){
        alert('fizz')
    }else if (reponse % 5 == 0){
        alert('buzz')

    }else if ( reponse % 3 == 0 ){
        alert('FizzBuzz')

    }else {
        alert("votre nombre est " + reponse)
    } */



    // Demander un nombre 
    // si ce nombre est égale à 12 
    // vérifier avec == et === 
 /*const demande=prompt('doit être égale à 12 :')
 if (demande === '12'){
    alert('c\'est carré le S')

 }else if (demande == 12){
    alert('OKLM')
 }
 else{
    prompt('recommencez')
 }*/

// === vérifie à la fois la valeur et aussi le type de des valeurs comparées (opérandes)

/* demander à user son animal préféré, 
si c'est un chien = wouaf
si c'est un chat = miaou
si c'est un poisson rouge = bah bravo moray
sinon je n'ai pas compris la réponse*/

let animal = prompt("ton animal ?")
if(animal == 'chien' ){
    alert('WOUAF')

}else if (animal == 'chat'){
    alert('MIAOu')
}else if (animal == 'poisson' ){
    alert('BAH BRAVO MORAY')
}else{
alert('arrete detre con stp')
}

switch(animal){
    case 'chien':
        console.log('WOUAF');
        break;
    case ' chat' :
        console.log('miaou');
        break;
    case 'poisson':
        console.log('arrete detre con stp');
        break;
    default:
        console.log("hmmmm bzr bzr ")    

}