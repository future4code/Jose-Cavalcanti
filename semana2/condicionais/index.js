//CONDICIONAIS 
// EXERCICIOS DE INTERPRETACAO DE CODIGO

// 1.
//const respostaDoUsuario = prompt("Digite o número que você quer testar")
//const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   //console.log("Passou no teste.")
// } else {
//   //console.log("Não passou no teste.")
// }

// A) O codigo testa se o numero do usario eh divisivel por 2 caso seja ele "passou no teste"
//    caso nao seja ele "nao passou no teste"
// B) Ele imprime no cosnole "Passou no teste." para todos os numeros pares
// C) Ele imprime no console "Não passou no teste." para todos os numeros impares

// 2.
//let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
//console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// A) O codigo assima testa se nome inserido pelo usuario no terminal eh laranja, maca
//    uva, peraou nem um dos outros
// B) Se o valor da fruta for "Maçã" sera impresso:
//    "O preço da fruta "Maçã" é R$ 2.25
// C) A mensagem impressa no console seria a esperada pois o break serve para que 
//    a maquina nao leia o codigo ate o final uma vez que a condicao ja foi satisfeita

// 3.
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
    
// }

// console.log(mensagem)

// A) A primeira linha esta pedindo ao usuario o primeiro numero e guardando-o na 
//    variavel "numero"
// B) Se o usuario digitou o numero 10 serah impresso no console a mensagem:
//    "Esse número passou no teste" e depois um erro posi a variavem mensagem foi
//    declarada dentro do if e nao no escopo global
//    Se o usuario digitou o numero -10 nada sera impresso no console
// C) a questao c foi respondida na questao b

// 1.
// const idade = Number(prompt("Qual sua idade ?"))

// if(idade >= 18) {
//     //console.log("Você pode dirigir")
// } else {
//     //console.log("Você não pode dirigir.")
// }

//2.
// const turno = prompt("Qual turno do dia voce estuda digite M (matutino) ou V (Vespertino) ou N (Noturno)")

// if(turno === "M") {
//     console.log("Bom Dia!")
// } else if(turno === "V") {
//     console.log("Boa Tarde!")
// } else if(turno === "N") {
//     console.log("Boa Noite!")
// } else {
//     console.log("leia a pergunta com atencao")
// }

// 3.
// const turno = prompt("Qual turno do dia voce estuda digite M (matutino) ou V (Vespertino) ou N (Noturno)")

// switch(turno){
//     case `M`:
//         console.log("Bom Dia!")
//         break
//     case `V`:
//         console.log("Boa Tarde!")
//         break
//     case `N`:
//         console.log("Boa Noite!")
//         break
//     default:
//         console.log("leia a pergunta com atencao")
//         break
// }

// 4.
// const genero = prompt("Qual o genero do filme ?")
// const preco = prompt("Quanto custa a entrada ?")

// if (genero === "fantasia" && preco <= 15) {
//       console.log("Bom filme!");
//     } else {
//       console.log("Escolha outro filme :(");
//     }