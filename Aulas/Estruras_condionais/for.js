
const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
});

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
console.log("Lançamento do foquete !!")
lan = 0
for(let i = 1; i <= 10; i++){
    console.log(lan)
}