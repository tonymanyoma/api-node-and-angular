export class Product {
  _id?: string;
  name: string;
  description: string;
  imageURL: string;
  price: number;

  constructor(name: string, description: string, imageURL: string, price: number){
    this.name = name;
    this.description = description;
    this.imageURL = imageURL;
    this.price = price;
  }
}