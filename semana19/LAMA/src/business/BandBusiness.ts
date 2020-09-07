import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { BandInputDTO, Band } from "../model/Band";
import { BandDatabase } from "../data/BandDatabase";

export class BandBusiness {
  async createBand(band: BandInputDTO, userId: string): Promise<void> {
    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const userDatabase = new UserDatabase();
    const user = userDatabase.getUserById(userId);
    const userRole = (await user).getRole();

    if (!user) {
      throw new Error("Usuário não encontrado!");
    }

    if (userRole !== "ADMIN") {
      throw new Error("Ação reservada para administradores!");
    }

    const bandDatabase = new BandDatabase();
    const bandNameAlreadyRegistered = bandDatabase.getBandByName(band.name);

    if (bandNameAlreadyRegistered) {
      throw new Error("Já existe banda com este nome! Insira outra banda.");
    }

    await bandDatabase.createBand(
      id,
      band.name,
      band.music_genre,
      band.responsible
    );
  }

  async fetchBandDetailsById(id: string): Promise<Band> {
    const bandDatabase = new BandDatabase();

    const band: Band = await bandDatabase.getBandById(id);

    return band;
  }
}
