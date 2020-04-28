/*
//a 

let conversaoFahrenheit = 77;
let kelvin = (conversaoFahrenheit - 32) * 5/9 + 273.15;
let conversaoKelvin = kelvin;

console.log(conversaoKelvin);

//b
let conversaoCelcius = 80;
let fahrenheit = (conversaoCelcius)*9/5 + 32;

console.log(fahrenheit);

//c

conversaoCelcius = 30;
fahrenheit = (conversaoCelcius)*9/5 + 32;
kelvin = (fahrenheit - 32) * 5/9 + 273.15;
console.log(fahrenheit);

//d

let celciusUsuario = prompt("Digite o numero para converter de Celcius");
fahrenheit = (celciusUsuario)*9/5 + 32;
kelvin = (fahrenheit - 32) * 5/9 + 273.15;

console.log(fahrenheit);
console.log(kelvin);

//28/04
// Exercício 1


const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// Ele verifica se o número que o usuário digitou é par ou impar. Passou no teste para números pares e ímpares não passou.

// Exercício 2


let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
   break; // BREAK PARA O ITEM d. 
default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para verificar o preço de uma fruta de acordo com o que o usuário digitar.
// b) O preço da fruta maça é R$ 2.25.
// c) 24,55‬
// d) pegaria o valor "default" e não levaria em conta o preo da Pêra


// Exercício 3

const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }
}

console.log(mensagem) 

// O erro "mensagem is not defined" acusa no console porque a variável mensagem foi criado dentro do bloco e o que está fora não consegue acessar o resultado.

// Exercício 4

let resposta1 = prompt("Digite o primeiro número");
let resposta2 = prompt("Digite o segundo número");

let numero1 = Number(resposta1);
let numero2 = Number(resposta2);

if (numero1 > numero2) {

    console.log(numero1, numero2)
} else (numero1 < numero2)

    console.log(numero2, numero1)

// imprimiu os dois números normalmente


let resposta1 = prompt("Digite o primeiro número");
let resposta2 = prompt("Digite o segundo número");
let resposta3= prompt("Digite o terceiro número");

let numero1 = Number(resposta1);
let numero2 = Number(resposta2);
let numero3 = Number(resposta3);

if (numero1 > numero2 > numero3) {

    console.log(numero1, numero2, numero3)

} else if (numero2 > numero1 > numero3) {

    console.log(numero2, numero1, numero3)
} else if (numero2 > numero3 > numero1) {

    console.log(numero2, numero3, numero1)
} else if(numero3 > numero1 > numero2){
    console.log(numero3, numero1, numero2)
    
} else (numero3 > numero2 >numero1)

    console.log(numero3, numero2, numero1)

// Não deu certo este exercício

//Exercício 5 
//a) https://drive.google.com/file/d/1g0jZe7akdhnP0GR6HP0FrQ3n--o8AIKs/view?usp=sharing
//b)*/

let ossos = prompt("O seu animal possui ossos? Digite sim ou não");
if (ossos === "sim") {
    let pelos = prompt("Você tem pelos?");
    if (pelos === "sim") {
        let racional = prompt("Você é racional?");
            if (pelos === "sim" && racional === "sim") {
            console.log("Você é humano!");
            
         } else (pelos === "não" && racional ==="não");
            console.log("Você é mamífero não humano"); 
        
    } else {
        let penas = prompt("Você possui penas?");
        if (penas ==="sim") {
            console.log("Você é uma ave!");
        } else {
        let terrestre = prompt("Você é terrestre?");
        if (terrestre === "sim") {
            console.log("Você é um réptil");
        } else {
            console.log("VocÊ é um peixe!")
        }

} else {
    
    console.log("Você é invertebrado")
}