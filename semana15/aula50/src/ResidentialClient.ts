import { Client } from "./Client";
import { Residence } from "./Residence";

export class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep);
  }

  calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }

  getCpf(): string {
    return this.cpf;
  }
}

const residence = new ResidentialClient(
  "Lourenço",
  2,
  4,
  "0329491221",
  4,
  "90660900"
);

console.log(residence.getCep());
