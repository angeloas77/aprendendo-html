console.log("teste de console log para ver dentro do navegador")
console.log("Outro log")

let dataDeNascimento = prompt("Escreva a data de nascimento para saber se voce e maior de idade, menor de idade ou idoso")
console.log(dataDeNascimento);

let idadePessoa = 2026 - dataDeNascimento
console.log(idadePessoa);

if (idadePessoa > 60) {
    console.log("idoso");
} else if (idadePessoa > 18)  {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}