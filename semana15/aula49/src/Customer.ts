import { User } from "./User";

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

const customer = new Customer(
  "123",
  "lo.pas@gmail.com",
  "Lourenço",
  "123",
  "32"
);

//1) uma vez
//2) uma vez, primeiro ele passar pelo constructor do User, depois pelo constructor do Customer

// console.table(customer);

// console.log(customer.getId());
// console.log(customer.getName());
// console.log(customer.getEmail());
// console.log(customer.getCreditCard());
// console.log(customer.purchaseTotal);

// console.log(customer.password) só seria acessível com um método publico

console.log(customer.introduceYourserlf());
