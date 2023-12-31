import { combineReducers } from "redux";
import { productsReducer } from "./products/products.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { userReducer } from "./user/user.reducer";
import { recentProductsReducer } from "./recent-product/recent-product.reducer";
import { burgerReducer } from "./burger-buton/burger-button.reducer";
import { cekOngkirApi } from "../utils/cek-ongkir.utils";

export const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
  recentProducts: recentProductsReducer,
  burgerButton: burgerReducer,
  [cekOngkirApi.reducerPath]: cekOngkirApi.reducer,
});
