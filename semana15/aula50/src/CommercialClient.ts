import { Client } from "./Client";
import { Commerce } from "./Commerce";

export class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    floorsQuantity: number,
    cep: string,
    private cnpj: string
  ) {
    super(floorsQuantity, cep);
  }

  calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }

  getCnpj(): string {
    return this.cnpj;
  }

  getRegistrationNumber(): number {
    return this.registrationNumber;
  }

  getConsumedEnergy(): number {
    return this.consumedEnergy;
  }

  getName(): string {
    return this.name;
  }
}

// 1) as semelhanças são por conta das informações que a interface Client chama

//2)
