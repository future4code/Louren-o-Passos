import * as fs from "fs";
import type { Deposit } from "./index";
import type { User, StatementItem } from "./index";
import { getAllAccounts } from "./getAllAccounts";
import moment, { parseTwoDigitYear } from "moment";

const name: string = process.argv[2];
const cpf: string = process.argv[3];
const value: number = Number(process.argv[4]);

const accounts: string = fs.readFileSync("./data.json").toString();
const updatedAccounts: User[] = accounts ? JSON.parse(accounts) : [];

const addBalance = (name: string, cpf: string, value: number): void => {
  try {
    let accountInfo: User | undefined = updatedAccounts.find(
      (user) => user.cpf === cpf && user.name === name
    );

    if (accountInfo !== undefined) {
      const transactions: any = accountInfo.statement;

      const statement: StatementItem = {
        value: value,
        date: moment(),
        description: "Depósito em dinheiro",
      };

      accountInfo.balance = value + accountInfo.balance;
      transactions.push(statement);

      const newBalance: string = JSON.stringify(updatedAccounts, null, 2);

      fs.writeFileSync("./data.json", newBalance);

      console.log(
        `O saldo de ${accountInfo.name} é: R$ ${accountInfo.balance}`
      );
    } else {
      console.log("Confira seus dados!");
    }
  } catch (error) {
    console.log(error);
  }
};

addBalance(name, cpf, value);
