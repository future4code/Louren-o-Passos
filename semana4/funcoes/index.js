/*

// exercício 1

const minhaFuncao = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
				array.push(j)
			}
	}
	return array
}


//  a. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(2)`

//[0]

// b. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(5)`

//[0, 1, 0, 1, 2, 3]

// c. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(8)`

//[0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

// exercício 2

let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNomes, "Darvas"));
console.log(funcao(arrayDeNomes, "João"));
console.log(funcao(arrayDeNomes, "Paula"));

// a. Explicite quais são as saídas impressas no console
// 0
// 2
// undefined

// b. O código funcionaria se a lista fosse um array de números (ao invés de um array de string)  e o nome fosse um número, ao se chamar a função? Justifique sua resposta.

// Daria certo mas teria que ser o número sem aspas para não ser string. O comparador de if compara o tipo também.


// Exercício 3

function metodo(array) {
  let resultadoA = 0;
  let resultadoB = 1;
  let arrayFinal = [];
  

  for (let x of array) {
    resultadoA += x;
    resultadoB *= x;
  }

  arrayFinal.push(resultadoA);
  arrayFinal.push(resultadoB);
  return arrayFinal;
  
}


// Fica undefined? Tive dificuldade neste exercício..

// Exercício 4

// a) 
  function calculaIdade(idadeHumana){
  let idadeCanina =  Number(prompt("Quantos anos tem o seu cachorro?")) * 7; 
  return idadeCanina;
}

console.log(calculaIdade())

// b)

let nome = prompt("Qual seu nome?");
let idade = Number(prompt("Qual a sua idade?"));
let endereco = prompt("qual o seu endereço?");
let estudante = confirm("Você estuda? Ok para true e cancel para não");

function montaFrase() {
  if (estudante === true){
    console.log(`Olá, eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou estudante`); 
  
  } else {
    console.log(`Olá, eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e não sou estudante`); 

  }
}

  montaFrase();
  
 */

  // Exercício 5

let ano = Number(prompt("Qual ano, você gostaria de saber o século?"));

if (ano < 1000) {
  console.log("Este século não está contemplado!")
} else if (ano > 1000 && ano < 1100) {
  console.log(`O ano ${ano} pertence ao século X`)
} else if (ano > 1100 && ano < 1200) {
  console.log(`O ano ${ano} pertence ao século XI`)
} else if (ano > 1200 && ano < 1300) {
  console.log(`O ano ${ano} pertence ao século XII`)

 


