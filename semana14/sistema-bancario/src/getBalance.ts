import * as fs from "fs";
import type { User } from "./index";
import { userInfo } from "os";

const name: string = process.argv[2];
const cpf: string = process.argv[3];

const data: User[] = JSON.parse(fs.readFileSync("./data.json").toString());

const getBalance = (name: string, cpf: string): void => {
  const info: User | undefined = data.find(
    (user) => user.cpf === cpf && user.name === name
  );

  if (info !== undefined) {
    console.log(`O saldo de ${info.name} é: R$ ${info.balance}`);
  } else {
    console.log("Confira seus dados!");
  }
};

getBalance(name, cpf);
