

// for (inicialização, condição, execução){}

// teste de lançamento

/*console.log("Lançamento em ")

for(let i = 10; i >= 1; i--){
    console.log(i)
}*/

//Teste de tabuada

/*let n1=5
for(let i = 1; i <= 10; i++){
    console.log(`${n1} x ${i} = ${n1*i}`);
}*/

//teste de par

/*for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(`O numero ${i} é par`)
    }
    
}*/


/*for(let i = 1; i <= 15; i++){
    if(i % 2 === 1){
        console.log(`O numero ${i} e impa`)
    }
}*/

//for of

/*let jogos = ["GTA5", "Pes 2016", "TWD", "FIFA"]

for(let jogo of jogos){
    console.log(`Jogando: ${jogo}`)
}*/

//For in

let meusetup = {
    marca : "lenovo",
    modelo: "Thinkpad",
    ram: "24GB",
    ssd: "250GB"
}

for(let componente in meusetup){
    console.log(`${componente} : ${meusetup[componente]}`)
}