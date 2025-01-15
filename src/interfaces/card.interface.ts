export default interface ICreditCard {
  cardNumber: string;
  cvc: string;
  cvclenght: number;
  date: any;
}

export default class CreditCard implements ICreditCard {}
