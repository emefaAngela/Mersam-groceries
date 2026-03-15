export  type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  availability: string;
  // add other fields as needed
};

export type CategoryType ={
  id:number;
  name:string;
}

export type CartItem = {
  product: ProductType;
  quantity: number;
}

export type Order={
  id:number;
  customer_id:number;
  amount_paid:number;
  order_status:string;
  payment_details:{PaymentDetailsType:PaymentDetailsType};
  order_details:CartItem[];
}

export type PaymentDetailsType={
  reference:string;
  status:string;
  authorization_url:string;
  access_code:string;
  expires_at:string;

}