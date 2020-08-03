import { UserAccount } from "./UserAccount";

const getBalance = () => {
  const name: string = process.argv[2];
  const cpf: string = process.argv[3];
  const account: UserAccount = new UserAccount(name, 26, cpf);

  const balance: any = account.getBalance(cpf, name);

  console.log(`O saldo de ${name} é: R$ ${balance}`);
};

getBalance();
