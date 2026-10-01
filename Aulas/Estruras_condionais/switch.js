const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("bem vindo ao programa")
console.log("1- data atual")
console.log("2- hora atual")
console.log("3- ver animal")

prompt.question("Selecione: ", answer => {
    switch(answer){
        case "1":{
            const date =new Date()
            const day =date.getDate();
            const month = date.getMonth()+1;
            const year = date.getFullYear();
            console.log(`Hoje é ${day}/${month}/${year}`)
            break;
        }
        case "2":{
            const hora = new Date()
            const horas =hora.getHours();
            const min =hora.getMinutes();
            console.log(`agora são ${horas}:${min}`)
            break;
            
        }
        case "3":{
            console.log("Gato")
            break;
        }
        default:{
            console.log("Fim")
        }
    }
    prompt.close()
})


/*const stuff = "rato"

switch (stuff){
    case "gato":
    case "cachorro":
    case "arara":{
        console.log("Animal")
        break;
    }
    case "pizza":
    case "bolo":
    case "kikão":{
        console.log("Comida")
        break
    }
    default:{
        console.log("não listado")
    }
}
*/