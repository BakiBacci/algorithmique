// commentaire en JS 
/*
commentaire sur les ligne

*/
// pour afficher des informations dans la console de débugage du navigateur 
console.log("hello, world")
// Afficher une boîte de dialogue avec champs à remplir 
// let response = prompt('quel est votre âge')
// console.log(response)




/* -------les variables-------*/
// déclaration d'une variable
let uneVariable;

// affectation d'une variable
uneVariable = 'je suis une varaible'

// les 2 se font généralement en même temps 
// les variables sont sensibles à la casse

let helloWorld = 'Hello, World!';

console.log(helloWorld);
// Les différents type de variables 
let messages = 'un message'
let number = 20
let decimal = 1.5
let boolean = true;
let boolean2 = false

// les opérations arthmétiques (+,-,*,/)
// Déclarer 3 variables sum, number1, number2
//affecter 10 à number1
// affecter 20 à number2
//affecter à sum l'opération de multiplication des deux variables précédentes 

let sum 
let number1 = 10
let number2 = 20
sum = number1*number2
console.log(sum)
/*-----la concatenation----*/

let Name = 'prénom'
let SurName = "nom"

console.log("je suis" + " "+  Name + " " + SurName)

// Déclarer une variable city, afficher le message j'adore vivre à city
let city = 'Paris'
console.log("j'adore vivre à et me balader à" + "" + city) 
city = 'Paris'
city = `Paris`
console.log(`j'adore vire à ${city}`)
// J'adore vivre à <city> et je m'appelle <Name>
console.log(`j'adore vivre à ${city} et je m'appelle ${Name} ${SurName}`)
//--------- Les instructions conditionelles-------------// 
//si, sinon (if,else)
/*let response = prompt('acceptez vous les conditions')
if(response == 'ok'){console.log( 'vous etes accepté')}
 else {console.log ('vousnavezpasaccepteé')}*/
//si, sinon si , sinon
/*let agree = prompt('bienvenue or welcome or bienvenido')
if(agree == 'oui'){console.log('bienvenue')
} else if(agree == 'yes'){console.log('welcome')}
else if(agree == 'si'){console.log('bienvenido')}
else if(agree =='ok'){console.log("pas d'acces")
}else if(agree == 'annuler'){console.log ('vous ne pouvezpas annuler')}
else{console.log('error')}/*

/*------Les opérateurs de comparaison-------*/
// Déclarer une variable qui s'appelle variable, lui assigner la valeur 16 
// Si la variable est égal à 16, afficher un messaged e félicitation 

/*let boom = prompt('décclarer votre âge')
let variable = 16
if (variable >= 16){console.log('tu peux conduire')}
else if(variable < 16);{console.log('tu peux pas conduire')}*/

// == veut dire égale, > veut dire supérieur, >= veur dire sup ou égale, < veur dire inférieur, <= inférieur ou égale, != veut dire différent

 /*let age = prompt('quel est votre âge')
  if(age < 13){console.log('voir action man')}
  else if (age >= 13){console.log('voir matrix')}
  else if (age <= 18){console.log('voir matrix')}
else if (age > 18 ){console.log('voir evil dead')}
else{console.log('erreur')}*/

// Demander à l'utilisateur son âge,sa nationalité. S'il est français ET s'il aplus de 18 ans OU s'il et étranger et s'il a moins de 18 ans il aura droit a une assistance juridqique gratuite.

/*let nat = prompt('quel est votre nationalité ?')
let âge = prompt ( 'quel est votre âge')
if (âge < 18 && nat != 'francais'|| âge >= 18 && nat == 'francais'){console.log('vous avez droit à AJ')}
else {console.log('voir vos droits sur notre site')}*/
// on demande la nationalité de l'user, s'il est français et s'il a plus de droit de 18 ans il aura droit au APL sinon 
// il n'aura pas droit.
/*let nationalité = prompt('êtes vous français')

if (nationalité == 'oui'){
    let age = prompt ('quel âge avez vous ?');
    if (age >= 18){ console.log('vous avez droit aux APL')
}
else if  (age <= 18){console.log('pas de APL')}}
else {console.log('CESTKOOOOO')}
/*-----------les boucles------*/
// les boucles sont des structures permettant d'éxécuter plusieurs fois des instructions 
//voici une boucle à itération non définie (while)
/*let i = 0
while(i<9){

console.log(coucou);*/



// afficher la table de multiplacation de 7

let n=1
while (n<10){
    let x=n*7
    console.log(`${n} x 7 = ${x}`)
    n= n+1; 
}
//Ecrire un algorithme qui inverse les valeurs de deux variables A et B quel que soit le contenu de A et B 

let a = 1
let b = 2
console.lob(a,b)
let temps = a
a =b 
b= temps 
console.log(a,b)