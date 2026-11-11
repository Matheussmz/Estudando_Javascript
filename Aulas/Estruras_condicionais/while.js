//While
// Usar quando não sabe a condição

/*let n1 =0;

while(n1 <=10){
    console.log("O numero atual é " + n1)
    n1++
}*/

// Quantas vezes foi preciso para tirar 10

/*let tentativa =1
let nota = 0
while(nota !== 10){
    nota = Math.floor(Math.random() * 10)+1
    console.log("Numero de tentativa " + tentativa + " até tira " + nota)
    tentativa++
}*/

//Simulador de cofrinho

/*let saldo =0;
let meta = 150
let dpm
let qp = 0;

while(saldo < meta){
    dpm = Math.floor(Math.random() * 21) + 10
    console.log(`Deposito atual de ${dpm}`)
    saldo = saldo + dpm
    console.log(`Saldo atual ${saldo} e foi feito ${qp} depositos`)
    qp++
}*/

//batalha

/*let hp = 100;
let qa = 0;
let dano = 0;

while(hp > 1){
    dano = Math.floor(Math.random()*21) +5
    hp = hp - dano
    console.log(`dano sofrido foi de ${dano} e a hp atual e de ${hp}`)
    qa++
}

if(hp >= 1){
    console.log(`O Heroi sobrevivel com ${hp} de vida sofreu ${qa} golpes`)
}else{
    console.log("Perdeu")
}*/

//Aprendendo do ... while
// o "do ... while" funciona em executa um bloco primeiro depois joga no loop

// sorteio até tirar 10

let nota = 0;
let tentativa = 0;
do{
    nota = Math.floor(Math.random() *10 )+1
    console.log(`Nota atual e ${nota}`)
    tentativa++
}while(nota !== 10);

console.log("tentativas: " + tentativa)