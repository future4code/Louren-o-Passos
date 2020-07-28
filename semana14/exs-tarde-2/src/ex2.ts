const operation: string | boolean = process.argv[2];
const number1: number = Number(process.argv[3]);
const number2: number = Number(process.argv[4]);

switch (operation) {
  case "add":
    console.log(number1 + number2);
    break;
  case "mult":
    console.log(number1 * number2);
    break;
  case "sub":
    console.log(number1 - number2);
    break;
  case "div":
    console.log(number1 / number2);
    break;
  default:
    console.log("Comando não reconhecido");
}
