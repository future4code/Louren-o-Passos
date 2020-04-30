/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
// início do jogo

 console.log("Bem vindo ao jogo de BlackJack!");
 let pontuacaoUsuario
 let maoUsuario = [];
 let maoComputador =[];
 let pontuacaoComputador

 if(confirm("Quer iniciar uma nova rodada?")) {

   // Comprada de cartas do Usuario
   const carta = comprarCarta(); 
   maoUsuario.push(carta.valor && carta.texto);

   const carta2 = comprarCarta(); 
   maoUsuario.push(carta2.valor && carta2.texto );

   // Mão do usuário
   console.log(maoUsuario);

  let pontuacaoUsuario = carta.valor + carta2.valor;

  console.log(pontuacaoUsuario);

  // Comprada de cartas do Computador
  const carta3 = comprarCarta();
  maoComputador.push(carta3.valor && carta3.texto); 

  const carta4 = comprarCarta();
  maoComputador.push(carta4.valor && carta4.texto);

  // Mão do Computador
  console.log(maoComputador);
  let pontuacaoComputador = carta3.valor + carta4.valor;
  console.log(pontuacaoComputador);

  console.log(`Usuário: - cartas: ${maoUsuario[0]} ${maoUsuario[1]} - pontuação ${pontuacaoUsuario} `);
  console.log(`Computador: - cartas: ${maoComputador[0]} ${maoComputador[1]} - pontuação ${pontuacaoComputador} `);
  if (pontuacaoUsuario > pontuacaoComputador) {
     console.log("O usuário ganhou!");
   } else if (pontuacaoUsuario < pontuacaoComputador) {
      console.log("O computador ganhou!");
   } else {
      console.log("Empate");
   }
 
 } else {
    console.log("O jogo terminou.");
 }
