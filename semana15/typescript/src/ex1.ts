console.log("Exercicio 1 da aula 42");

// const minhaString: string  = 777;
// const meuNumero: number = "matue"

// a) b) o vsc nao compila


// c)
const wesleyano:{
    nome: string
    idade: number
    corFavorita: string
} = {
    nome: "wesleyano",
    idade: 887,
    corFavorita: "violeta"
}

type personBase = {
    nome: string,
    idade: number,
    corFavorita: string
}
const pessoa: personBase = {
    nome:"fabilex",
    idade: 98,
    corFavorita: "preto"
}
const pessoa2: personBase = {
    nome: "marina",
    idade: 777,
    corFavorita: "azul"
}

const pessoa3: personBase = {
    nome: "japul",
    idade: 31,
    corFavorita: "azul"
}

// c)

enum cores{
    azul="azul",
    verde="verde",
    vermelho="vermelho",
    laranja="laranja",
    amarelo="amarelo",
    anil="anil",
    violeta="violeta"
}

type personBaseCores = {
    nome: string,
    idade: number,
    corFavorita: cores
}

const mariaMiope: personBaseCores = {
    nome: "maria",
    idade: 3,
    corFavorita: cores.laranja
}

// const mustang: carBase = {
//     marca: "ford",
//     volumeDoTanque: 61,
//     temMotorFlex: false
// }

// const gol: carBase = {
//     marca: "wolksvagem",
//     volumeDoTanque: 45,
//     temMotorFlex: true
// }

// const saveiro: carBase = {
//     marca: "wolksvagem",
//     volumeDoTanque: 55,
//     temMotorFlex: true
// }

// const cruize: carBase = {
//     marca: "chevrolet",
//     volumeDoTanque: 52,
//     temMotorFlex: true
// }

// const garagem: carBase[] = [mustang, gol, cruize, saveiro];
// const duzentosESete: carBase = { marca: "pugeot", volumeDoTanque: 50, temMotorFlex: true };
// garagem.push(duzentosESete);
// console.log(garagem);

// function buscaCarrosPorMarca(frota: carBase[], marca?: string): carBase[] {
//     if (marca === undefined) {
//         return frota
//     }
//     return frota.filter(
//         (carro) => {
//             return carro.marca === marca
//         }
//     )
// }

// const carroswolksvagem = buscaCarrosPorMarca(garagem, "wolksvagem")
// const carrosSemMarca = buscaCarrosPorMarca(garagem)
// console.log("Carros da wolksvaguem:", carroswolksvagem)
// console.log("carros sem passar marca:", carrosSemMarca)