// store.ts
import { configureStore } from "@reduxjs/toolkit";
import abhaycartreducer from "./slice/abhaycart";

// Create the Redux store
export const store = configureStore({
  reducer: {
    abhaycart: abhaycartreducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
