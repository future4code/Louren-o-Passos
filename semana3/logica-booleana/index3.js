const kwh = 0.05;
let consumo = 280 * kwh

console.log("O valor a ser pago de consumo é R$ " + consumo);

let consumoDesconto = consumo * 0.15;
consumo = consumo - consumoDesconto;

console.log("O valor a ser pago de consumo com desconto é R$ " + consumo);