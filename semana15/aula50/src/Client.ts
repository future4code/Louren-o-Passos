export interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
  // como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
}

const client: Client = {
  name: "Lourenço",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 2;
  },
};

// console.table(client);
// console.log(client.name);
// console.log(client.registrationNumber);
// console.log(client.consumedEnergy);
// console.log(client.calculateBill());
