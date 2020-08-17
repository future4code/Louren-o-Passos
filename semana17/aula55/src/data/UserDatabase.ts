import knex from "knex";
import { IdGenerator } from "../services/IdGenerator";

export class UserDatabase {
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
