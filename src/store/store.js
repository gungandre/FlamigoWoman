import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import longger from "redux-logger";
import storage from "redux-persist/lib/storage";
import { cekOngkirApi } from "../utils/cek-ongkir.utils";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["burgerButton"],
};

const middlewares = [
  process.env.NODE_ENV !== "production" && longger,
  cekOngkirApi.middleware,
].filter(Boolean);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefautMiddleware) =>
    getDefautMiddleware({ serializableCheck: false }).concat(middlewares),
});

export const persistor = persistStore(store);
