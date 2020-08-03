import { Bank } from "./Bank";
import { JSONFileManager } from "./JSONFileManager";

export class UserAccount {
  private name: string;
  private age: number;
  private cpf: string;
  private balance: number = 0;
  private transactions: string[] = [];

  constructor(name: string, age: number, cpf: string) {
    this.name = name;
    this.age = age;
    this.cpf = cpf;
  }

  public getBalance(cpf: string, name: string): UserAccount | undefined {
    const fileManager: JSONFileManager = new JSONFileManager("./data.json");
    const accountsData: any = fileManager.readDatabase();

    const accountIdx: number = accountsData.findIndex((item: UserAccount) => {
      item.cpf === cpf && item.name === name;
    });
    if (accountIdx === -1) {
      return;
    }
    console.log("achei");
    return accountsData[accountIdx].balance;
  }

  public addBalance(value: number): void {
    this.balance += value;
    console.log("Saldo atualizado com sucesso!");
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getName(): string {
    return this.name;
  }
}
