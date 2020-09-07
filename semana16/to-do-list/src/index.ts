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
    port: Number(process.env.DB_PORT || "3306"),
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
  id: string,
  name?: string,
  nickname?: string,
  email?: string
): Promise<any> {
  if (id) {
    try {
      let databaseName;

      databaseName = await connection.raw(`
      SELECT name FROM ToDoListUser WHERE id="${id}"
      `);
      databaseName = databaseName[0][0].name;

      let databaseNickname;

      databaseNickname = await connection.raw(`
      SELECT nickname FROM ToDoListUser WHERE id="${id}"
      `);
      databaseNickname = databaseNickname[0][0].nickname;

      let databaseEmail;
      databaseEmail = await connection.raw(`
      SELECT email FROM ToDoListUser WHERE id="${id}"
      `);
      databaseEmail = databaseEmail[0][0].email;

      if (name && name !== databaseName) {
        await connection.raw(`
        UPDATE ToDoListUser
        SET name="${name}", nickname="${databaseNickname}", email="${databaseEmail}"
        WHERE id="${id}"
        `);
        console.log("Usuário alterado com sucesso!");
      }
      if (nickname && nickname !== databaseNickname) {
        await connection.raw(`
        UPDATE ToDoListUser
        SET name="${databaseName}", nickname="${nickname}", email="${databaseEmail}"
        WHERE id="${id}"
        `);
        console.log("Usuário alterado com sucesso!");
      }
      if (email && email !== databaseEmail) {
        await connection.raw(`
        UPDATE ToDoListUser
        SET name="${databaseName}", nickname="${databaseNickname}", email="${email}"
        WHERE id="${id}"
        `);
        console.log("Usuário alterado com sucesso!");
      }
    } catch (error) {
      throw new Error("Falha ao realizar busca no banco");
    }
  } else {
    console.log("Confira o id enviado");
  }
}

// editUser("1597421159304", "Teste", "tester@gmail.com");

app.put("/user/edit/:id", async (req: Request, res: Response) => {
  try {
    await editUser(
      req.params.id,
      req.body.name,
      req.body.nickname,
      req.body.email
    );
    res.status(200).send(`Usuário ${req.body.name} editado com sucesso!`);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

async function createTask(
  userCreatorId: string,
  title: string,
  limitDate: string,
  description: string
): Promise<any> {
  if (title && limitDate && title && description && userCreatorId) {
    const id = Date.now();

    function dateFormatter(date: string) {
      let day = date.split("/")[0];
      let month = date.split("/")[1];
      let year = date.split("/")[2];

      return year + "-" + ("0" + month).slice(-2) + "-" + ("0" + day).slice(-2);
    }

    const databaseDate = dateFormatter(limitDate);

    try {
      const result = await connection.raw(`
  INSERT INTO Tasks(id, title, description, limit_date, creator_user_id)
  VALUES("${id}", "${title}", "${description}", "${databaseDate}", "${userCreatorId}")
  `);
      return result[0][0];
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("Preencha todos os campos");
  }
}

app.put("/task", async (req: Request, res: Response) => {
  try {
    await createTask(
      req.body.userCreatorId,
      req.body.title,
      req.body.limitDate,
      req.body.description
    );
    res.status(200).send({
      message: "task created",
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

// createTask(
//   "1597421159304",
//   "A segunda tarefa",
//   "16/08/2020",
//   "Segunda tarefa."
// );

async function fetchTaskById(id: string): Promise<any> {
  try {
    if (id) {
      const result = await connection.raw(`
      SELECT * FROM Tasks WHERE id="${id}"
      `);
      if (result[0][0]) {
        return result[0][0];
      } else {
        console.log("Não foi encontrado uma tarefa com esse id");
      }
    } else {
      console.log("confira o id digitado");
    }
  } catch (error) {
    throw new Error("Falha ao realizar busca no banco");
  }
}

// fetchTaskById("1597605187043");

app.get("/task/:id", async (req: Request, res: Response) => {
  try {
    const result = await fetchTaskById(req.params.id);
    res.status(200).send({
      message: result,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});
