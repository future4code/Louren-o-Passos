import { Commerce } from "./Commerce";
import { Client } from "./Client";
import { Industry } from "./Industry";

export class IndustrialClient extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private industrialRegister: string,
    cep: string,
    machinesQuantity: number
  ) {
    super(machinesQuantity, cep);
  }

  public calculateBill() {
    return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
  }

  public getIndustrialRegister() {
    return this.industrialRegister;
  }
}
