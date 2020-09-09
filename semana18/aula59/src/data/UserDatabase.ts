import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "User_Arq";

  public async createUser(
    id: string,
    email: string,
    name: string,
    password: string,
    role: string //opcional criar ENUM
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          email,
          name,
          password,
          role,
        })
        .into(UserDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserByEmail(email: string): Promise<any> {
    try {
      const result = await this.getConnection()
        .select("*")
        .where({ email })
        .from(UserDatabase.TABLE_NAME);

      return result[0];
    } catch (error) {
      throw new Error(error);
    }
  }
}
