//  les boucles sont des structures permettant d'écécuter plusieurs fois les instructions

let entier = prompt('un entier entre 1 et 10')

if (entier < 1    || entier > 10){
    entier= prompt('arrte detree con')
}

let étoile = ''

for ( let sapin =1 ;  sapin < entier ; sapin++){
étoile = étoile+'*'
console.log(étoile);}