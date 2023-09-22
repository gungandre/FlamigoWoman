import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import longger from "redux-logger";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user", "recentProducts", "burgerButton"],
};

const middlewares = [process.env.NODE_ENV !== "production" && longger].filter(
  Boolean
);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefautMiddleware) =>
    getDefautMiddleware({ serializableCheck: false }).concat(middlewares),
});

export const persistor = persistStore(store);
