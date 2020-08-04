import { JSONFileManager } from "./JSONFileManager";
import { UserAccount } from "./UserAccount";

export class Bank {
  private accounts: UserAccount[];
  fileManager: JSONFileManager;

  constructor(accounts: UserAccount[], fileManager: JSONFileManager) {
    this.accounts = accounts;
    this.fileManager = fileManager;
  }

  public createAccount = (userAccount: UserAccount): void => {
    try {
      const fileManager: JSONFileManager = new JSONFileManager("data.json");
      const accountsData: any = fileManager.readDatabase();
      accountsData.push(userAccount);
      fileManager.writeToDatabase(accountsData);
      console.log("Conta cadastrada com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  public getAllAccounts: UserAccount[] | any = (): any => {
    try {
      const fileManager: JSONFileManager = new JSONFileManager("data.json");
      const accountsData: any = fileManager.readDatabase();
      return accountsData;
    } catch (error) {
      console.log(error);
    }
  };

//   public getAccountByCpfAndName = (
//     cpf: string,
//     name: string
//   ): UserAccount | undefined => {
//     const accountsData: UserAccount[] = this.getAllAccounts();

//     const accountIdx: number = accountsData.findIndex((item) => {
//       const clientCpf = UserAccount.getCpf();
//       const clientName = UserAccount.getName
//       clientCpf === cpf && ;
//     });
//     if (accountIdx === -1) {
//       return;
//     }

//     return accountsData[accountIdx];
//   };
// 
}
