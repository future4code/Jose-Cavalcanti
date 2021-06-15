// // primeiro o terminal vai imprimir o numero 10 e 
// // em seguida o numero 15

// let a = 10
// let b = 10

// console.log(b)

// b = 5
// console.log(a, b)

// // Imprime: 20, 10 e 10 respectivamente

// let a = 10
// let b = 20
// let c
// c = a
// b = c
// a = b

// console.log(a, b, c)


// // let p = prompt("Quantas horas você trabalha por dia?")
// // let t = prompt("Quanto você recebe por dia?")
// // alert(`Voce recebe ${t/p} por hora`)
// // algumas melhorias neste codigo ficaria da seguinte forma:

// let horasTrabalhadasPorDia("Quantas Horas voce trabalha por dia ?");
// let salarioPorDia("Quanto voce recebe por dia ?");

// console.log('Voce recebe', horasTrabalhadasPorDia/salarioPorDia);

let nome;
let idade;

console.log(typeof nome);
console.log(typeof idade);

let nome = prompt("Qual seu nome ?");
let idade = prompt("Quanto anos você tem ?");

console.log("Olá", nome, "você tem", idade, "anos.");

let roupa = prompt("Você esta usando roupa azul ?");
let agua = prompt("Já tomou agua ?");
let veg = prompt("Comeu todos os vegetais ?");

console.log("Roupa azul ?", roupa, "Tomou água?", agua, "Comeu todos os vegetais ?", veg);

let a = 10;
let b = 25;

a = b;
b = a;
console.log("o valor de a é:", a);
console.log("o valor de b é:", b);