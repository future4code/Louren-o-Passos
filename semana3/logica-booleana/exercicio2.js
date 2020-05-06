let array
console.log('I. ', array) // undefined 

array = null
console.log('II. ', array) // null


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length) // 11

let i = 0
console.log('IV. ', array[i], " e ", array[i+1]) // 3 e 4

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor) // 11 e 9

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i]) // 3

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC) //1