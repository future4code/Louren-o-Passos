import { Employee } from "./Employee";

export class Seller extends Employee {
  private salesQuantity: number = 0;
  static SELLING_COMISSION: number = 5;

  public setSalesQuantity(sales: number): number {
    return (this.salesQuantity += sales);
  }
  public calculateTotalSalary(): number {
    return (
      this.baseSalary +
      Seller.LABOR_BENEFITS +
      this.salesQuantity * Seller.SELLING_COMISSION
    );
  }
}

const seller = new Seller(
  "123",
  "lo.passos93@gmail.com",
  "Lourenço",
  "12345",
  1000,
  "25/12/1993"
);

console.log(seller.calculateTotalSalary());
