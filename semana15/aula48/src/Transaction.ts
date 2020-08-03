export class Transaction {
  date: string;
  value: number;
  description: string;

  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description;
  }
}
