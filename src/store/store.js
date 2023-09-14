import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products/products.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});
