// Exercícios de interpretação de código
// 1. O codigo abaixo entre em um loop que incrementa a variavel "valor" com o valor dela
//    mesma incrementada por 1 5 vezes
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
// 2. 
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//     if (numero > 18) {
//           console.log(numero)
//       }
//   }
// A) 19, 21, 23, 25, 27 ,30
// B) Para acessar o indice de cada elemento é preciso criar um indice e ficaria muito
//    mais facil usando a forma usual de "for(let i = 1; i < n; i++)"

// 3. *
//    **
//    ***
//    ****
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
// Exercícios de escrita de código
// 1.
// const bixinhos = Number(prompt("Quantos bixinhos de estimacao voce tem ?"))
// let nomes = []
// let index = 0
// while(bixinhos > index){
//     for(let i =0; i < bixinhos; i++){
//         let pets = prompt("Qual o nome do bixano ?")
//             nomes.push(pets)
//             index++
//     }
// console.log(nomes)
// }
// 2.
// A)
const arrayDeNumeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let arrayDeNumerosPares = []
for(let i = 0; i < arrayDeNumeros.length; i++){
    //console.log(arrayDeNumeros[i])
}
// B)
for(let i = 0; i < arrayDeNumeros.length; i++){
    //console.log(arrayDeNumeros[i]/10)
}
// C)
for(let i =0; i < arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i] % 2 === 0){
        arrayDeNumerosPares.push(arrayDeNumeros[i])
    }
}
//console.log(arrayDeNumerosPares)
// D)
const array = [80, 30, 130, 40, 60, 70, 120, 90, 110]
function impreArray (empada){
    let ArrayDeStrings = []
    let i = 0
    for(let valor of array){
        ArrayDeStrings.push(`O elemento do índex ${i} é: ${valor}`)
        i++
    }
    console.log(ArrayDeStrings)
}
// impreArray(array)
function imprimeExtremos(queijo){
let valorMaximo = 0
let valorMinimo = 30
for(let i = 0; i < array.length; i++){
    if(array[i] < 30){
        valorMinimo = array[i]
    } else if(array[i] > valorMaximo){
        valorMaximo = array[i]
    }
}
console.log(`O maior numero eh ${valorMaximo} e o menor eh ${valorMinimo}`)
}
// imprimeExtremos(array)