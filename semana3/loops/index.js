// Exercício 1
let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum)

// A repetição for está somando o índice a cada loop realizado. Por exemplo, a soma inicia em 0, quando tiver o índice 1, fica 1 + 0. Depois o índice vai ser 2, então soma(1) + índice(2) = 3. E assim vai...

// Exercício 2

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 5
for(const item of lista) {
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)

//a)Adiciona um item no array em questão
//b os múltiplos de 5 do array (10,15,25,30)
//c)os múltiplos de 3 do array (12,15,21 27,30) e  o múltiplo de 4 (12)


// Exercício 3
//a)

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = array[0];
for(let num of array){
    if( num > maior){
        maior = num;
        
    }
}
console.log(maior);

let menor = array[0];
for(let num of array){
    if( num < menor){
        menor = num;
        
    }
}
console.log(menor);

console.log(`${maior} e ${menor}` );


//b) 

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const novoArray = []
for(let num of array){
    novoArray.push(num/10)
   
}
 console.log(novoArray)
 


//c)

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const novoArray = []
for(let num of array){
    if (num % 2 === 0){
    novoArray.push(num)
    }
}
console.log(novoArray)
 
//d
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for(i = 0; i < array.length; i++)
{

console.log(`O elemento do índice ${i} é `);
}

let i = 0;
const novoArray = []
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for(let num of array){

    i++
    novoArray.push(`O elemento do índice ${i} é ${num}`);
}

console.log(novoArray);