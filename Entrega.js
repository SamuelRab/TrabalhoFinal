const fs = require("fs");
const promptsync = require("prompt-sync")();
const path = require("path");
const PromptSync = require("prompt-sync");

let nome = []
let endereco = []
let distanciaEntrega = []
let valorEntrega = 0;
let tipoEntrega = []

do {

    nome = parseInt(PromptSync("Digite o seu nome:"));

    if (isNaN(nome)) {
        alert("Inválido! Você não digitouum nome, escreva novamante!");
    }

} while (isNaN(nome));

do {

    endereco = parseInt(PromptSync("Digite o seu endereço, como o seu bairro:"));

    if (isNaN(endereco)) {
        alert("Inválido! Você não digitou o seu endereço, escreva novamente!");
    }

} while (isNaN(endereco));

do {

    distanciaEntrega = parseInt(PromptSync("Digite a distancia da entrega::"));

    if (isNaN(distanciaEntrega)) {
        alert("Inválido! Você não digitouum nome, escreva novamante!");
    }

} while (isNaN(distanciaEntrega));







const normal = valorEntrega * distanciaEntrega 
const urgente = valorEntrega * distanciaEntrega

