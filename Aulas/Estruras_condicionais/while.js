//While
// Usar quando não sabe a condição

/*let n1 =0;

while(n1 <=10){
    console.log("O numero atual é " + n1)
    n1++
}*/

// Quantas vezes foi preciso para tirar 10

let tentativa =1
let nota = 0
while(nota !== 10){
    nota = Math.floor(Math.random() * 10)+1
    console.log("Numero de tentativa " + tentativa + " até tira " + nota)
    tentativa++
}