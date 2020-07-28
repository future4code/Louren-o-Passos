// Nós chamamos o script através do terminal colocando o parâmetro após o script. utilizamos o process.argv para pegar essas informações

const nome: string = process.argv[2];
const idade: number = Number(process.argv[3]);

console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

console.log(
  `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`
);
