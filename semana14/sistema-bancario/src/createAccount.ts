import { writeToDatabase, readDatabase } from "./index";
import type { User } from "./index";
import moment from "moment";
import * as fs from "fs";

const name: string = process.argv[2];
const cpf: string = process.argv[3];
const userBirth: string = process.argv[4];

const accounts: string = fs.readFileSync("./data.json").toString();

const updatedAccounts: User[] = accounts ? JSON.parse(accounts) : [];
console.log(updatedAccounts);

const birthday: moment.Moment = moment(userBirth, "DD/MM/YYYY");

const createAccount = (
  name: string,
  birthday: moment.Moment,
  cpf: string
): void => {
  try {
    const diff = moment().diff(birthday, "years");
    if (diff >= 18) {
      const user = {
        name,
        birthday,
        cpf,
      };
      updatedAccounts.push(user);
      const data = JSON.stringify(updatedAccounts, null, 2);
      fs.writeFileSync("./data.json", data);
      console.log("Conta criada com sucesso!");
    } else {
      console.log("Somente permitida criação de conta acima de 18 anos");
      return;
    }
  } catch (error) {
    console.log(error.message);
  }
};

createAccount(name, birthday, cpf);
