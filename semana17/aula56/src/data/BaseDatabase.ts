import knex from "knex";

export abstract class BaseDatabase {
  static async connection(): Promise<any> {
    const connection = knex({
      client: "mysql",
      connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME,
      },
    });
  }
}
