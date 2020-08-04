"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const moment_1 = __importDefault(require("moment"));
const name = process.argv[2];
const cpf = process.argv[3];
const value = Number(process.argv[4]);
const accounts = fs.readFileSync("./data.json").toString();
const updatedAccounts = accounts ? JSON.parse(accounts) : [];
const addBalance = (name, cpf, value) => {
    try {
        let accountInfo = updatedAccounts.find((user) => user.cpf === cpf && user.name === name);
        if (accountInfo !== undefined) {
            const transactions = accountInfo.statement;
            const statement = {
                value: value,
                date: moment_1.default(),
                description: "Depósito em dinheiro",
            };
            accountInfo.balance = value + accountInfo.balance;
            transactions.push(statement);
            const newBalance = JSON.stringify(updatedAccounts, null, 2);
            fs.writeFileSync("./data.json", newBalance);
            console.log(`O saldo de ${accountInfo.name} é: R$ ${accountInfo.balance}`);
        }
        else {
            console.log("Confira seus dados!");
        }
    }
    catch (error) {
        console.log(error);
    }
};
addBalance(name, cpf, value);
