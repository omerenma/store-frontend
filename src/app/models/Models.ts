export interface Products  {
  id:number;
  title:string;
  price:number;
  category:string;
  description:string;
  image:string
}

export interface CheckoutProduct {
  image:string;
  price:number;
  title:string;
  amount?:number;
}
