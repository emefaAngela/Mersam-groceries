import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: string | number;
  [key: string]: any;
}

interface CheckoutState {
  productQuantity: number;
  cartProducts: Product[];
  couponCode: string;
}

const initialState: CheckoutState = {
  productQuantity: 0,
  cartProducts: [],
  couponCode: "",
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers:{
    addtoCart:(state, action: PayloadAction<Product>)=>{
      state.cartProducts.push(action.payload);
      state.productQuantity += 1;
    },
    removefromCart:(state, action: PayloadAction<string | number>)=>{
      state.cartProducts = state.cartProducts.filter(product=>product.id !== action.payload);
      state.productQuantity -= 1;
    }
  }
});

export const {addtoCart,removefromCart} = checkoutSlice.actions;