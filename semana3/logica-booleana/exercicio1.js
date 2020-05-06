const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado) // false 

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado) // false 

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado) //true

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado) // false 

console.log("e. ", typeof resultado) //boolean
