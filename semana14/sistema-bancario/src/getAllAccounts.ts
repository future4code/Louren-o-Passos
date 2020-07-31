import { readDatabase } from "./index";
import * as fs from "fs";

const getAllAccounts = () => {
  try {
    const fileData: string = fs.readFileSync("./data.json").toString();
    console.log(JSON.parse(fileData));
    return JSON.parse(fileData);
  } catch (error) {
    console.log("Erro ao ler a base de dados: " + error.message);
    return [];
  }
};

getAllAccounts();
