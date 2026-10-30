
const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// for (inicialização, condição, execução){}

/*prompt.question("qual tabuada vc quer saber? ", resposta => {
    const number = Number.parseInt(resposta)

    if(number == NaN){
        console.log("Erro")
    }else{
        console.log(`A tabuada de ${number}`)
        for(let i = 1; i <= 10; i++){
            console.log(`${i} * ${number} = ${i * number}`)
        }
        prompt.close()
    }
})
*/
// teste de lançamento

console.log("Lançamento em ")

for(let i = 10; i >= 1; i--){
    console.log(i)
}