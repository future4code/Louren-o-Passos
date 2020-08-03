import * as fs from "fs";
import moment from "moment";

export function readDatabase(): any {
  try {
    const fileData: string = fs.readFileSync("./data.json").toString();
    return JSON.parse(fileData);
  } catch (error) {
    console.log("Erro ao ler a base de dados: " + error.message);
    return [];
  }
}

export function writeToDatabase(data: any): void {
  try {
    const dataAsString: string = JSON.stringify(data, null, 2);
    fs.writeFileSync("./data.json", dataAsString);
  } catch (error) {
    console.log("Erro ao salvar os dados: " + error.message);
  }
}

export type User = {
  name: string;
  cpf: string;
  birthday: moment.Moment; // Formato?
  balance: number;
  statement: StatementItem | string[] | Payment;
};

export type Payment = {
  value: number;
  description: string;
  paymentDate: moment.Moment;
};

export type Deposit = {
  value: number;
  description: string;
  cpf: string;
  name: string;
};

export type Transfer = {
  senderName: string;
  senderCPF: string;
  value: number;
  recipientName: string;
  recipientCPF: string;
};

export type StatementItem = {
  value: number;
  date: moment.Moment;
  description: string;
};
