const listaDeTarefas = ["acordar","ler"]
const novaTarefa = process.argv[2]

// console.log("ola", imput, "voce tem", imput2, "anos")
// console.log("ola", imput, "voce tem", imput2+7, "anos")

// if(op === "add") {
//     console.log(imput + imput2)
// } else if(op === "sub") {
//     console.log(imput - imput2)
// } else if(op === "mult") {
//     console.log(imput * imput2)
// } else if(op === "div") {
//     console.log(imput / imput2)
// } else {
//     return console.log("operacao nao indentificada")
// }
listaDeTarefas.push(novaTarefa)

console.log(listaDeTarefas)