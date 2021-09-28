const imput = Number(process.argv[3])
const imput2 = Number(process.arg[4])



if(process.argv[2] === "add") {
    console.log(imput + imput2)
} else if(process.argv[2] === "sub") {
    console.log(imput - imput2)
} else if(process.argv[2] === "mult") {
    console.log(imput * imput2)
} else if(process.argv[2] === "div") {
    console.log(imput / imput2)
} else {
    return console.log("operacao nao indentificada")
}