import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { IdGenerator } from "./services/IdGenerator";
import knex from "knex";
import { UserDatabase } from "./data/UserDatabase";
import { Authenticator } from "./services/Authenticator";

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

    const userDb = new UserDatabase();
    await userDb.createUser(id, userData.email, userData.password);

    res.status(200).send({
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
