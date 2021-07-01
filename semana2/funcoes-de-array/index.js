// Exercícios de interpretação de código
// 1. 
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })
// a) {nome: "Amanda Rangel", apelido: "Mandi"}
//    {nome: "Laís Petra", apelido: "Laura"}
//    {nome: "Letícia Chijo", apelido: "Chijo"}
// 2.
// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]
// const novoArrayB = usuarios.map((item, index, array) => {
//    return item.nome
// })
// console.log(novoArrayB)
// a)  ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]
// 3.
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)
// a){nome: "Amanda Rangel", apelido: "Mandi"}
//   {nome: "Laís Petra", apelido: "Laura"}

// Exercícios de escrita de código
// 1.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
// a)
const nomeDosPets = pets.map((pet) => {
    return pet.nome
})

//console.log(nomeDosPets)
// b)
const cachorrosSalsicha = pets.filter((dog) => {
    return dog.raca === "Salsicha"
})

//console.log(cachorrosSalsicha)
// c)
const poodles = pets.filter((dog) => {
    return dog.raca === "Poodle"
})
const cupon = poodles.map((poodle) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}!`
})
//console.log(cupon);

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }]
// 2.
// a)
const nomeProdutos = produtos.map((produto) => {
    return produto.nome
})
//console.log(nomeProdutos)
// b)
const produtosDesconto = produtos.map((produto) => {
    return {nome: produto.nome, preco: (produto.preco * 0,95).toFixed(2)}
})
//console.log(produtosDesconto)
// c)
const bebidas = produtos.filter((prod) => {
  return prod.categoria === "Bebidas"
})
//console.log(bebidas)
// d)
const produtosYpe = produtos.filter((produto) => {
    return produto.nome.includes("Ypê")
})
//console.log(produtosYpe)
const compreYpe = produtosYpe.map((produto) => {
    return `Compre ${produto.nome} por ${produto.preco}`
})
//console.log(compreYpe)