// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const a = prompt("digita pra mim a altura de um retangulo")
  const l = prompt("digita agora a largura desse triangulo")

  console.log(a*l)
}
// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("uai que ano estamos ?")
  const anoNascimento = prompt("em ? que ano vc nasceu ?")

  console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("qual seu nome meu camarada")
  const idade = prompt("qual a sua idade meu jovem")
  const email = prompt("desculpa a indelicadeza mas qual a sua idade  ?")
  return console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("em ja q tu ta respondendo tudo qual a cor q tu mais gosta ?")
  const cor2 = prompt("se tu tivesse que escolher outra cor q ne seja a primeira qual seira ?")
  const cor3 = prompt("ta mas das top 3 q tu mais curte qual a que tu menos gosta ?")
  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length -1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiro = array[0]
  const ultimo = array[array.length - 1] 
  
  array[0] = ultimo
  array[array.length -1] = primeiro

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("em que ano estamos ?"))
  const anoNascimento = Number(prompt("qual a sua data de nascimento ?"))
  const anoIdentidade = Number(prompt("que ano sua identidade foi emitida ?"))

  const idade = anoAtual - anoNascimento
  const vencimento = anoAtual - anoIdentidade
  
  const cond1 = idade <= 20 && vencimento >= 5
  const cond2 = idade > 20 && idade <= 50 && vencimento >= 10
  const cond3 = idade > 50 && vencimento >= 15

  console.log(cond1 || cond2 || cond3)
}
// EXERCÍCIO 14
function checaAnoBissexto(ano) {

  const condA = ano % 400 === 0
  const condB = (ano % 4 === 0) && (ano % 100 !== 0)
  return condA || condB
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt("voce tem 18 anos ? (sim ou nao)")
  const ensino = prompt("voce tem o ensino medio completo (sim ou nao)")
  const disponibilidade = prompt("voce tem disponibilidade das 8 as 18h ? (sim ou nao)")

  console.log(condx = idade === "sim" && ensino === "sim" && disponibilidade === "sim")
}