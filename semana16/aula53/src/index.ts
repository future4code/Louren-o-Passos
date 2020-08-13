import knex from "knex";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { count } from "console";
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

async function fetchMovieTable(): Promise<any> {
  try {
    const result = await connection.raw(`
        SELECT * FROM Movie;
        `);
    return result[0];
  } catch (error) {
    console.log(error);
  }
}

async function fetchActorById(id: string): Promise<void> {
  try {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE id = "${id}"
        `);
    console.log(result[0]);
  } catch (error) {
    console.log(error);
  }
}

async function actorCountByGender(gender: string): Promise<void> {
  try {
    const result = await connection.raw(`
     SELECT COUNT(*) as count, gender
     FROM Actor
     WHERE gender="${gender}"
     `);
    const count = result[0][0].count;

    return count;
  } catch (error) {
    console.log(error);
  }
}

// fetchActorByName("Glória Pires");
//fetchMovieTable();
// actorCountByGender("female");

const updateSalaryById = async (id: string, salary: number): Promise<void> => {
  try {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
    console.log("Sucesso!");
  } catch (error) {
    console.log(error);
  }
};

// updateSalaryById("003", 1000)

const deleteActor = async (id: string): Promise<void> => {
  try {
    await connection("Actor").where("id", id).delete();
    console.log("Sucesso!");
  } catch (error) {
    console.log(error);
  }
};

// deleteActor("003");

const getSalaryAverage = async (gender: string): Promise<void> => {
  try {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
    console.log(result[0].average);
  } catch (error) {
    console.log(error);
  }
};

// getSalaryAverage("male");

app.get("/movies", async (req: Request, res: Response) => {
  try {
    const movies = await fetchMovieTable();

    res.status(200).send(movies);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await actorCountByGender(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
