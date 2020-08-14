import knex from "knex";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());

dotenv.config();

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
  },
});

async function addUser(
  name: string,
  nickname: string,
  email: string
): Promise<any> {
  try {
    const id = Date.now();
    if (name.length > 1 && nickname.length > 1 && email.length > 1) {
      await connection.raw(`
      INSERT INTO ToDoListUser(id,name,nickname,email)
      VALUES("${id}", "${name}", "${nickname}", "${email}")
      `);
      console.log(`Usuário ${name} adicionado com sucesso ao banco de dados!`);
    } else {
      console.log("Preencha todos os campos");
    }
  } catch (error) {
    throw new Error("Falha ao atualizar o banco");
  }
}

app.put("/user", async (req: Request, res: Response) => {
  try {
    await addUser(req.body.name, req.body.nickname, req.body.email);
    res.status(200).send(`Usuário ${req.body.name}, adicionado!`);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

async function fetchUserById(id: string): Promise<any> {
  if (id.length > 12) {
    try {
      const result = await connection.raw(`
      SELECT * FROM ToDoListUser WHERE id="${id}"
      `);
      if (result[0][0]) {
        return result[0][0];
      } else {
        console.log("Não foi encontrado um cadastro com esse id");
      }
    } catch (error) {
      throw new Error("Falha ao realizar busca no banco");
    }
  } else {
    console.log("Confira o número digitado");
  }
}

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const result = await fetchUserById(req.params.id);
    res.status(200).send({
      message: result,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

// async function editUser(
//   id: string,
//   name: string,
//   nickname: string,
//   email: string
// ): Promise<any> {
//   if (id) {
//     try {
//       await connection.raw(`
//       UPDATE ToDoListUser
//       SET name="${name}", nickname="${nickname}", email="${email}"
//       WHERE id="${id}"
//       `);
//       console.log("Usuário alterado com sucesso!");
//     } catch (error) {
//       throw new Error("Falha ao realizar busca no banco");
//     }
//   } else {
//     console.log("Confira o id enviado");
//   }
// }

async function editUser(
  id: string
  // name: string,
  // nickname: string,
  // email: string
): Promise<any> {
  if (id) {
    try {
      const databaseName = await connection.raw(`
      SELECT name FROM ToDoListUser WHERE id="${id}"
      `);
      console.log(databaseName[0][0].name);
      const databaseNickname = await connection.raw(`
      SELECT nickname FROM ToDoListUser WHERE id="${id}"
      `);
      console.log(databaseNickname[0][0].nickname);
      const databaseEmail = await connection.raw(`
      SELECT email FROM ToDoListUser WHERE id="${id}"
      `);
      console.log(databaseEmail[0][0].email);

      // await connection.raw(`
      // UPDATE ToDoListUser
      // SET name="${name}", nickname="${nickname}", email="${email}"
      // WHERE id="${id}"
      // `);
      // console.log("Usuário alterado com sucesso!");
    } catch (error) {
      throw new Error("Falha ao realizar busca no banco");
    }
  } else {
    console.log("Confira o id enviado");
  }
}

editUser("1597421159304");
