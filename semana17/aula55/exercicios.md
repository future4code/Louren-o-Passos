### Exercício 1

a) Há uma grande mistura de caracteres nos tokens e ids... Tanto números quantos caracteres.
b)

import { v4 } from "uuid";

export abstract class IdGenerator {
  static generate(): string {
    return v4();
  }
}

### Exercício 2

a) primeiro é criada uma conexão com o banco de dados, depois uma função que acessa esse banco de dados e cria um novo usuário utilizando o query builder
b) CREATE TABLE User (
id VARCHAR(255) PRIMARY KEY,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL
);

c) export class UserDatabase {
  private connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_nAME,
    },
  });



  private static TABLE_NAME = "User";

  public async createUser(
    id: string,
    email: string,
    password: string
  ): Promise<any> {
    await this.connection
      .insert({
        id,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  }
}
d) const user = new UserDatabase()

user.createUser(id,"lo.passos93@gmail.com", "123456")

### Exercício 3

a) confirma o tipo de um dado como string, pois pode vir como undefined, o que quebraria a aplicação
b) 