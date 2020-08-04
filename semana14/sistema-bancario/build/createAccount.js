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
const moment_1 = __importDefault(require("moment"));
const fs = __importStar(require("fs"));
const name = process.argv[2];
const cpf = process.argv[3];
const userBirth = process.argv[4];
const balance = Number(process.argv[5]);
const accounts = fs.readFileSync("./data.json").toString();
const updatedAccounts = accounts ? JSON.parse(accounts) : [];
const birthday = moment_1.default(userBirth, "DD/MM/YYYY");
let doesTheCpfExist;
const createAccount = (name, birthday, cpf, balance, statement) => {
    try {
        const checkCpf = (cpf) => {
            let data = JSON.parse(fs.readFileSync("./data.json").toString());
            for (let client of data) {
                if (client.cpf === cpf) {
                    return (doesTheCpfExist = true);
                }
                return (doesTheCpfExist = false);
            }
            return false;
        };
        checkCpf(cpf);
        const diff = moment_1.default().diff(birthday, "years");
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
                const data = JSON.stringify(updatedAccounts, null, 2);
                fs.writeFileSync("./data.json", data);
                console.log("Conta criada com sucesso!");
            }
            else {
                console.log("CPF já existente na base, tente outro");
                return;
            }
        }
        else {
            console.log("Somente permitida criação de conta acima de 18 anos");
            return;
        }
    }
    catch (error) {
        console.log(error.message);
    }
};
createAccount(name, birthday, cpf, balance, []);
