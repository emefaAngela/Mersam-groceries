import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type AuthView } from "./types";

interface AuthModalState {
  isOpen: boolean;
  view: AuthView;
}

const initialState: AuthModalState = {
  isOpen: false,
  view: null,
};

export const authModalSlice = createSlice({
  name: "authModal",
  initialState,
  reducers: {
    openAuthModal: (state, action: PayloadAction<AuthView>) => {
      console.log("kofi");
      state.isOpen = true;
      state.view = action.payload;
    },
    closeAuthModal: (state) => {
      state.isOpen = false;
      state.view = null;
    },
    switchAuthview: (state, action: PayloadAction<AuthView>) => {
      state.view = action.payload;
    },
  },
});

export const { openAuthModal, closeAuthModal, switchAuthview } =
  authModalSlice.actions;
