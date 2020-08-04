import { writeToDatabase, readDatabase } from "./index";
import type { User, StatementItem } from "./index";
import moment from "moment";
import * as fs from "fs";

const name: string = process.argv[2];
const cpf: string = process.argv[3];
const userBirth: string = process.argv[4];
const balance: number = Number(process.argv[5]);

const accounts: string = fs.readFileSync("./data.json").toString();
const updatedAccounts: User[] = accounts ? JSON.parse(accounts) : [];

const birthday: moment.Moment = moment(userBirth, "DD/MM/YYYY");
let doesTheCpfExist: boolean;
const createAccount = (
  name: string,
  birthday: moment.Moment,
  cpf: string,
  balance: number,
  statement: string[]
): void => {
  try {
    const checkCpf = (cpf: string): boolean => {
      let data: User[] = JSON.parse(fs.readFileSync("./data.json").toString());

      for (let client of data) {
        if (client.cpf === cpf) {
          return (doesTheCpfExist = true);
        }
        return (doesTheCpfExist = false);
      }
      return false;
    };

    checkCpf(cpf);

    const diff: number = moment().diff(birthday, "years");
    if (diff >= 18) {
      const user = {
        name,
        birthday,
        cpf,
        balance,
        statement,
      };
      if (doesTheCpfExist === false) {
        updatedAccounts.push(user);
        const data: string = JSON.stringify(updatedAccounts, null, 2);
        fs.writeFileSync("./data.json", data);
        console.log("Conta criada com sucesso!");
      } else {
        console.log("CPF já existente na base, tente outro");
        return;
      }
    } else {
      console.log("Somente permitida criação de conta acima de 18 anos");
      return;
    }
  } catch (error) {
    console.log(error.message);
  }
};

createAccount(name, birthday, cpf, balance, []);
