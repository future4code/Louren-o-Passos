import * as fs from "fs";

const file: string = process.argv[2];
const textToAdd: string = "\n" + process.argv[3];

try {
  fs.appendFileSync(file, textToAdd);
  const tasks: string = fs.readFileSync(file).toString();
} catch (error) {
  console.log("Aconteceu o seguinte erro: " + error);
}
