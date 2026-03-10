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

interface CheckoutState {
  productQuantity: number;
  cartProducts: CartProduct[];
  couponCode: string;
}

export const initialState: CheckoutState = {
  productQuantity: 0,
  cartProducts: [],
  couponCode: "",
};
console.log(initialState);
export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addtoCart: (state, action: PayloadAction<Product>) => {
      const filteredProduct = state.cartProducts.find(
        (item) => item.product.id !== action.payload.id,
      );
      if (filteredProduct) {
        filteredProduct.quantity = (filteredProduct.quantity || 1) + 1;
      } else {
        state.cartProducts.push({ product: action.payload, quantity: 1 });
      }
      state.productQuantity += 1;
    },
    removefromCart: (state, action: PayloadAction<Product>) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload.id,
      );
      state.productQuantity -= 1;
    },
  },
});

export const { addtoCart, removefromCart } = checkoutSlice.actions;
