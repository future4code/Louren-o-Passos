import { Client } from "./Client";
import { ResidentialClient } from "./ResidentialClient";
import { CommercialClient } from "./CommercialClient";
import { IndustrialClient } from "./IndustrialClient";

export class ClientManager {
  private clients: Client[] = [];

  public getClientsQuantity(): number {
    return this.clients.length;
  }

  public getClients(): Client[] {
    console.log(this.clients);
    return this.clients;
  }

  public registerClient(client: Client): void {
    this.clients.push(client);
    console.log("Cliente", client.name, "adicionado com sucesso!");
  }

  public calculateClientBill(registrationNumber: number): number {
    const foundClient = this.clients.find((client) => {
      return client.registrationNumber === registrationNumber;
    });

    if (foundClient) {
      return foundClient.calculateBill();
    }
    return 0;
  }

  public totalIncome(): number {
    //     let totalIncome: number = 0;
    //     for (let client of clients) {
    //       let income = this.calculateClientBill(client.registrationNumber);
    //       totalIncome += income;
    //     }
    //     console.log("passei aqui!");
    //     return totalIncome;
    //   }

    let total: number = 0;
    this.clients.forEach((client) => {
      total += client.calculateBill();
    });
    console.log(total);
    return total;
  }
}

const residential: ResidentialClient = new ResidentialClient(
  "Lourenço",
  1,
  20,
  "03294913022",
  2,
  "90600900"
);

const commercial: CommercialClient = new CommercialClient(
  "Fitnet",
  2,
  100,
  1,
  "90600923",
  "022990001690"
);

const industrial: IndustrialClient = new IndustrialClient(
  "Petrobrás",
  3,
  1000,
  "40984BS",
  "90660239",
  100
);

const clientManager = new ClientManager();

clientManager.registerClient(residential);
clientManager.registerClient(industrial);
clientManager.registerClient(commercial);

clientManager.getClients();

clientManager.totalIncome();
