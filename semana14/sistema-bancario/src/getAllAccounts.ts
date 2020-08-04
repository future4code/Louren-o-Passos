
import * as fs from "fs";

export const getAllAccounts = () => {
  try {
    const fileData: string = fs.readFileSync("./data.json").toString();
    return JSON.parse(fileData);
  } catch (error) {
    console.log("Erro ao ler a base de dados: " + error.message);
    return [];
  }
};

getAllAccounts();
