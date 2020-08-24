import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export interface User {
  name: string;
  email: string;
  password: string;
  role: string;
}

export class UserBusiness {
  async createUser(user: User) {
    const idGenerator = new IdGenerator();
    const hashManager = new HashManager();
    const userDatabase = new UserDatabase();
    const authenticator = new Authenticator();

    try {
      if (!user.name || !user.email || !user.password || !user.role) {
        throw new Error("Por favor preencha os campos");
      }

      if (user.email.indexOf("@") === -1) {
        throw new Error("Invalid Email");
      }

      if (user.password.length < 6) {
        throw new Error("Password must have at least 6 characters");
      }

      const id = idGenerator.generate();
      const hashPassword = await hashManager.hash(user.password);
      await userDatabase.createUser(
        id,
        user.email,
        user.name,
        hashPassword,
        user.role
      );
      const token = authenticator.generateToken({ id }, user.role);

      return token;
    } catch (error) {
      throw new Error(
        error.message ||
          "Error creating user. Please check your system administrator."
      );
    }
  }

  async getUserByEmail(user: any) {
    const userDatabase = new UserDatabase();
    const userFromDB = await userDatabase.getUserByEmail(user.email);

    const hashManager = new HashManager();
    const hashCompare = await hashManager.compare(
      user.password,
      userFromDB.getPassword()
    );

    const authenticator = new Authenticator();
    const accessToken = authenticator.generateToken({ id: userFromDB.getId() });

    if (!hashCompare) {
      throw new Error("Invalid Password!");
    }

    return accessToken;
  }
}
