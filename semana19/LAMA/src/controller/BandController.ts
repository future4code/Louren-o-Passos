import { Request, Response } from "express";
import { BandInputDTO } from "../model/Band";
import { BandBusiness } from "../business/BandBusiness";
import { Authenticator } from "../services/Authenticator";
import { BaseDatabase } from "../data/BaseDatabase";

export class BandController {
  async createBand(req: Request, res: Response) {
    try {
      const band: BandInputDTO = {
        name: req.body.name,
        responsible: req.body.responsible,
        music_genre: req.body.music_genre,
      };

      const token = req.headers.authorization as string;

      const authenticator = new Authenticator();
      const user = authenticator.getData(token);
      const userId = user.id;

      const bandBusiness = new BandBusiness();
      await bandBusiness.createBand(band, userId);
      res.status(200).send({
        message: "Banda criada com sucesso!",
      });
      await BaseDatabase.destroyConnection();
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  }
}
