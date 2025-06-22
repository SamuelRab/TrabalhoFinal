const fs = require("fs");
const promptsync = require("prompt-sync")();
const path = require("path");

let nome = []
let endereco = []
let distanciaEntrega = []
let valorEntrega = [];
let tipoEntrega = []
let i = 1;
let normal = distanciaEntrega * valorEntrega;
let urgente = (normal *0.2)+ normal;
let entregasFeitas = [];
let multiplicador = [];

do {

    nome = promptsync("Digite o seu nome:");

    if (!isNaN(nome)) {
        console.log("Inválido! Você não digitou um nome, escreva novamente!");
    }

    endereco = promptsync("Digite o seu endereço, como o seu bairro:");

    if (!isNaN(endereco)) {
        console.log("Inválido! Você não digitou o seu endereço, escreva novamente!");
    }

    valorEntrega = parseInt(promptsync("Digite o valor da entrega:"));

    if (isNaN(valorEntrega)) {
        console.log("Inválido! Você não digitou um número, escreva novamente!");
    }

    distanciaEntrega = parseInt (promptsync("Digite a distancia da entrega(em km):"));

    if (isNaN(distanciaEntrega)) {
        console.log("Inválido! Você não digitou um número, escreva novamente!");
    }

    tipoEntrega = promptsync("Qual o tipo da sua entrega? Se for normal, digite 1, se for urgente, digite 2:");

    if (tipoEntrega == 1) {
        console.log(normal);
    } else (tipoEntrega == 2); {
        console.log((normal *0.2)+ normal)
    }
       
    entregasFeitas = promptsync("você quer continuar as entregas? se sim, digite um número, se não quer digite uma letra:");

    if (!isNaN(entregasFeitas)) {
        console.log("Você decidiu continuar");
    }

    console.log(nome, endereco, distanciaEntrega, distanciaEntrega * valorEntrega)

} while ( (!isNaN(nome)) || (!isNaN(endereco)) || (isNaN(valorEntrega)) || (isNaN(distanciaEntrega)) || (!isNaN(entregasFeitas)) || (!isNaN(tipoEntrega)));
