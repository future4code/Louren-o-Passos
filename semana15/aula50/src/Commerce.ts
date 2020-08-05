import { Place } from "./Place";

export class Commerce extends Place {
  constructor(protected floorsQuantity: number, cep: string) {
    super(cep);
  }

  getFloorsQuantity() {
    return this.floorsQuantity;
  }
}

const commerce = new Commerce(4, "90660900");

// console.log(commerce.getCep());
// console.log(commerce.getFloorsQuantity());
