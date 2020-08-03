import type { Payment, User } from "./index";
import { getAllAccounts } from "./getAllAccounts";
import moment from "moment";
import * as fs from "fs";

const date: string = process.argv[2];
const paymentDate: moment.Moment = moment(date, "DD/MM/YYYY");
const description: string = process.argv[3];
const value: number = Number(process.argv[4]);
const cpf: string = process.argv[5];

const payBill = (
  paymentDate: moment.Moment,
  description: string,
  value: number,
  cpf: string
): void => {
  const accounts: User[] = getAllAccounts();
  const accountIdx: number = accounts.findIndex((item) => item.cpf === cpf);
  if (accountIdx === -1) {
    console.log("Invalid customer information");
    return;
  }
};

payBill(paymentDate, description, value, cpf);
