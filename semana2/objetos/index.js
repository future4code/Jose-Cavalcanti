const filme = {
    nome: "Auto da Compadecida",
    ano: 2000,
    elenco: [
        "Matheus Nachtergaele", "Selton Mello", "Denise Fraga",
        "Virginia Cavendish"
    ],
    transmissoesHoje: [
        { canal: "Telecine", horario: "21h" },
        { canal: "Canal Brasil", horario: "19h" },
        { canal: "Globo", horario: "14h" }
    ]
}

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])
// a) imprime:      Matheus Nachtergaele
//                  Virginia Cavendish
//                  Globo14h
//                  {canal: "Globo", horario: "14h"}

const cachorro = {
    nome: "Juca",
    idade: 3,
    raca: "SRD"
}

const gato = { ...cachorro, nome: "Juba" }

const tartaruga = { ...gato, nome: gato.nome.replaceAll("a", "o") }

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)
// a) imprime: {nome: "Juca", idade: 3, raca: "SRD"}
//              {nome: "Juba", idade: 3, raca: "SRD"}
//              {nome: "Jubo", idade: 3, raca: "SRD"}
// b) cria uma copia do objeto e subistitui nesta copia os 
//    argumentos depois da virgula.

function minhaFuncao(objeto, propriedade) {
    return objeto[propriedade]
}

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))
// a) imprime: false
//             undefined
// b) como a minhaFuncao retorna o objeto com o indice [propriedade] o que serah
//    impresso na tela vai sera o objeto "pessoa" com o indice "propriedade", 
//    no caso do segundo console.log como nao existe o indice "altura" o que serah
//    impresso eh undefined.

// Exercicio 1.a.
function apelido(objeto) {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: 
    ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
}
const pessoa = {
    nome: "José Henrique",
    apelidos: ["Zé", "Zé Henrique", "Zézão"]
}
//apelido(pessoa)

//   b.
const novoApelido = { ...pessoa, apelidos: ["zezoa", "mabudi", "zezoaxd"] };

//apelido(novoApelido)

//Exercicio 2.a.
const cadastro = {
    nome: "Mariana",
    idade: "35",
    profissao: "Empresaria"
}
//            b.
function imprimeCadastro(cadastrado) {
    return [
        cadastrado.nome,
        cadastrado.nome.length,
        cadastrado.idade,
        cadastrado.profissao,
        cadastrado.profissao.length
    ]
}
//console.log(imprimeCadastro(cadastro))

//Exercicio 3.a.

const carrinho = []

//            b.

const banana = {
    nome: "Banana",
    disponibilidade: true,
}
const pera = {
    nome: "Pêra",
    disponibilidade: true
}
const uva = {
    nome: "uva",
    disponibilidade: true
}

//          c.

function addCarrinho(fruta) {
    carrinho.push(fruta)
}

addCarrinho(banana)
addCarrinho(pera)
addCarrinho(uva)

//          d.

//console.log(carrinho)