
// Tipos de dados

let texto = ""; //Ele ja entende que este tipo de dado é um texto
   
//Como seria escrito em linguagens tipadas
// String texto = "";

let numero = 0; //number
let itens = []; // array
let obj = {}; // objeto

// Diferença entre let e var

// 1 - Diferenca

var num1 = 1; // Fora da caixa - escopo global

function bloco() {
    let num2; // Dentro da caixa - escopo de bloco
}

// 2 - Diferenca de redeclaração

var num1 = 0; // Aceita ser redeclarado

let //não aceita ser redeclarado