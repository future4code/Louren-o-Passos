const operation2: string | boolean = process.argv[2];
const n1: number = Number(process.argv[3]);
const n2: number = Number(process.argv[4]);

switch (operation2) {
  case "add":
    console.log(n1 + n2);
    break;
  case "mult":
    console.log(n1 * n2);
    break;
  case "sub":
    console.log(n1 - n2);
    break;
  case "div":
    console.log(n1 / n2);
    break;
  default:
    console.log("Comando não reconhecido");
}
