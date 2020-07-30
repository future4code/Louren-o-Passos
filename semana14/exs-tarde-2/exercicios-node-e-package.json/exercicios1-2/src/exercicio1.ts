const nome: string = process.argv[2]
const idade: number = Number(process.argv[3])
const novaIdade: number = idade + 7

console.log(`
    Olá, ${nome}. 
    Você tem ${idade} anos. 
    Em sete anos você terá ${novaIdade}.
`)