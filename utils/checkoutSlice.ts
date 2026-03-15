import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type CartItem } from "./types";
// import { usePersistedState } from "../src/hooks/usePersistedState";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  availability: string;
  // add other fields as needed
}

interface CartProduct {
  product: Product;
  quantity: number;
}

interface User{
  //id:number;
  firstname:string;
  lastname:string;
  email:string;
  phone:string;
  //address:[city:string, country:string];
}

interface CheckoutState {
  productQuantity: number;
  cartProducts: CartProduct[];
  couponCode: string;
  user: User | null;
}

export const initialState: CheckoutState = {
  productQuantity: 0,
  cartProducts: [],
  couponCode: "",
  user: null,
};
console.log(initialState);
export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addtoCart: (state, action: PayloadAction<Product>) => {
      const filteredProduct = state.cartProducts.find(
        (item) => item.product.id == action.payload.id,
      );
      if (filteredProduct) {
        filteredProduct.quantity += 1;
      } else {
        state.cartProducts.push({ product: action.payload, quantity: 1 });
      }
      state.productQuantity += 1;
    },
    removefromCart: (state, action: PayloadAction<Product>) => {
      state.cartProducts = state.cartProducts.filter(
        (item) => item.product.id !== action.payload.id,
      );
      state.productQuantity -= 1;
    },
    createUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    }
  },
});

export const { addtoCart, removefromCart,createUser } = checkoutSlice.actions;
