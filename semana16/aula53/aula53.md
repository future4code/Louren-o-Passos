### Exercício 1

a) A resposta é como se fosse em linguagem do SQL

b) async function fetchActorByName(name: string): Promise<void> {
  try {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
        `);
    console.log(result[0]);
  } catch (error) {
    console.log(error);
  }
}

c) 
async function actorCountByGender(gender: string): Promise<void> {
  try {
    const result = await connection.raw(`
     SELECT COUNT(*) as count, gender
     FROM Actor
     WHERE gender="${gender}"
     `);
    const count = result[0][0].count;

    console.log(count);
  } catch (error) {
    console.log(error);
  }
}

### Exercício 2

a) const updateSalaryById = async (id: string, salary: number): Promise<void> => {
  try {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
      console.log("Sucesso!")
  } catch (error) {
    console.log(error);
  }
};

b) const deleteActor = async (id: string): Promise<void> => {
  try {
    await connection("Actor").where("id", id).delete();
    console.log("Sucesso!");
  } catch (error) {
    console.log(error);
  }
};

c) const getSalaryAverage = async (gender: string): Promise<void> => {
  try {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
    console.log(result[0].average);
  } catch (error) {
    console.log(error);
  }
};

### Exercício 3

a) Porque o id que vai ser utilizado está vindo como path param no request
b) Caso seja bem sucedida a requisição, ele envia os dados
c)


