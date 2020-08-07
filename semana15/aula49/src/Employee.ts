import { User } from "./User";
import moment from "moment";

export class Employee extends User {
  static LABOR_BENEFITS: number = 400;
  protected admissionDate: string;
  protected baseSalary: number;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    baseSalary: number,
    admissionDate: string
  ) {
    super(id, email, name, password);
    this.admissionDate = admissionDate;
    this.baseSalary = baseSalary;
  }

  public getAdmissionDate(): string {
    return this.admissionDate;
  }

  public getBaseSalary(): number {
    return this.baseSalary;
  }

  public getTotalSalary(): number {
    return this.baseSalary + Employee.LABOR_BENEFITS;
  }
}

const employee = new Employee(
  "12345",
  "lo.passos93@gmail.com",
  "Lourenço",
  "123456",
  1000,
  "25/12/1993"
);

console.table(employee.getTotalSalary());
