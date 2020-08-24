import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { IdGenerator } from "./services/IdGenerator";
import knex from "knex";
import { UserDatabase } from "./data/UserDatabase";
import { Authenticator } from "./services/Authenticator";
import { AuthenticationData } from "./services/Authenticator";

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

const app = express();
dotenv.config();
app.use(express.json());

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

const user = new UserDatabase();

// user.createUser(id,"lo.passos93@gmail.com", "123456")

const userDb = new UserDatabase();

async function signup(req: Request, res: Response): Promise<any> {
  try {
    const { email, password } = req.body;
    const id = IdGenerator.generate();

    if (!email && email.indexOf("@") === -1) {
      throw new Error("Confira o email");
    }

    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const token = Authenticator.generateToken({ id });

    await userDb.createUser(id, userData.email, userData.password);

    res.status(200).send({
      message: "Usuário criado com sucesso",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: error.sqlMessage || error.message,
    });
  }
}

app.post("/signup", signup);

// userDb.fetchUserInfo("lo.passos93gmail.com");

userDb.fetchUserById("1f59ff58-88fc-4b12-a017-504ed802b9ff");

app.post("/login", async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password,
    };
    const user = await userDb.fetchUserInfo(req.body.email);

    if (user.password !== userData.password) {
      throw new Error("Invalid password");
    }

    const token = Authenticator.generateToken({ id: user.id });
    res.status(200).send({
      token: "token gerado pelo jwt",
      info: token,
    });
  } catch (error) {
    res.status(400).send({
      error,
    });
  }
});

app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    const authData = Authenticator.getTokenData(token);

    const userDb = new UserDatabase();
    const user = await userDb.fetchUserById(authData.id);
    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
});
