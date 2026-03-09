import { configureStore } from "@reduxjs/toolkit";
import { checkoutSlice } from "./checkoutSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root", // the key for the persist state in storage
  storage,
  
};

const persistedReducer = persistReducer(persistConfig, checkoutSlice.reducer);

export const store = configureStore({
  reducer: { checkout: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        ignoredPaths: ["register", "rehydrate"],
      },
    }),
});
export const persistor = persistStore(store);
