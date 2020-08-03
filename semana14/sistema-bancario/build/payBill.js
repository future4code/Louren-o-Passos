"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getAllAccounts_1 = require("./getAllAccounts");
const moment_1 = __importDefault(require("moment"));
const date = process.argv[2];
const paymentDate = moment_1.default(date, "DD/MM/YYYY");
const description = process.argv[3];
const value = Number(process.argv[4]);
const payBill = (
//   paymentDate: moment.Moment,
//   description: string,
//   value: number
) => {
    const accounts = getAllAccounts_1.getAllAccounts();
    console.log(accounts);
};
payBill();
