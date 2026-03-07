import { createSlice,type  PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  availability: string;
  // add other fields as needed
}

interface CheckoutState {
  productQuantity: number;
  cartProducts: Product[];
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
      state.cartProducts.push(action.payload);
      state.productQuantity += 1;
      console.log(initialState);
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
