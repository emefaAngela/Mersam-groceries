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