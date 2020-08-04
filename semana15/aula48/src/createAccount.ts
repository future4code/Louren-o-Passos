import { UserAccount } from "./UserAccount";
import { JSONFileManager } from "./JSONFileManager";
import { Bank } from "./Bank";

const fileManager: JSONFileManager = new JSONFileManager("data.json");
const accountsList: any = fileManager.readDatabase();

const newAccountName: string = process.argv[2];
const newAccountAge: number = Number(process.argv[3]);
const newAccountCpf: string = process.argv[4];

const createNewAccount = (): UserAccount | undefined => {
  try {
    const newAccount = new UserAccount(
      newAccountName,
      newAccountAge,
      newAccountCpf
    );
    accountsList.push(newAccount);
    fileManager.writeToDatabase(accountsList);
    return newAccount;
  } catch (error) {
    console.log(error);
  }
  return;
};

createNewAccount();
