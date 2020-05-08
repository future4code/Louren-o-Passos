

// Exercício 1
// A função transforma o valor de uma moeda em dólar. 
// Pede para o usuário digitar através do prompt e utiliza a função Number pra converter de sting para número.
// Depois da conversão, printa no console o valor convertido em reais.

// Exercício 2
// A função investeDinheiro calcula o valorAposInvestimento conforme o parametro tipo de investimento do switch case. Depois disso vai ter o cálculo de dois montantes, só que o do "tesouro direto" vai dar erro, pois não há esse tipo de investimento.

// Exercício 3
// O for tem uma função que verifica se o número é par. Se for coloca no array1, caso contrário no 2. Depois ele ve o tamanho do array inicial "numeros" e depois dois dois novos arrays formados.

//Exercício 4
// Para cada número dentro do array números. O primeiro if não sei dizer, diria que vai dar um undefined por causa do infinity. Já o segundo, vai printar os números abaixo de zero, no caso o -10.

// Lógica de programação

//1) Fazendo um for com contador

let contador;
for(contador = 0; contador < 5; contador++){
    console.log(contador);
}

// fazendo um while

contador = 0
while (contador > 5){
    console.log(contador)
    contador++
}

// for of

let numeros = [1,2,4,6,8,9]
for (let numero of numeros){
    if (numero %2 === 0){
        console.log("veio um par");
    } else {
        console.log ("veio um impar");
    }
}

//2) a)false
//   b) false
//   c) true
//   d)false
//   e) true



let quantidadeDeNumerosPares = 5
let i = 0
while(i < quantidadeDeNumerosPares) {
  console.log((quantidadeDeNumerosPares*2)-2)
  quantidadeDeNumerosPares--
}

// O código não funciona, tem uma execução sem fim. entao usei a quantidade de numeros pares decrescer, mas ainda imprimia o último, então coloquei o -2 como gambiarra...

//
let lado1
let lado2
let lado3

if (lado1 === lado2 && lado1 === lado3){
    console.log("Equilátero");
} else if (lado1 === lado2 || lado2 === lado3 || lado3 === lado1){
    console.log("Isósceles");
} else {
    console.log("Escaleno")
}

//5) 
let num1
let num2

if (num1 > num2){
    console.log(num1 + " é maior");
    console.log("A diferença entre os números é" + (num1-num2))
} else if (num2 > num1){
    console.log(num2 + " é maior");
    console.log("A diferença entre os números é " + (num2-num1))
} else {
    console.log("São iguais!")
}

if (num1 % num2 === 0){
    console.log(num1 + " é divísivel por " + num2)
} else {
    console.log(num1 + " não é divísivel por " + num2)
}

if (num2 % num1 === 0) {
    console.log(num2 + " é divísivel por " + num1)
} else {
    console.log(num2 + " não é divísivel por " + num1)
}




