import { createSlice } from "@reduxjs/toolkit";

const RECENT_PRODUCTS_INITIAL_STATE = {
  recentProducts: [],
};

const recentProduct = (currentState, productToAdd) => {
  const findProductInCurrentState = currentState.find(
    (product) => product.name === productToAdd.name
  );

  console.log(findProductInCurrentState);

  if (!findProductInCurrentState) {
    return [...currentState, { ...productToAdd }];
  }

  return currentState;
};

const recentProductsSlice = createSlice({
  name: "recentproducts",
  initialState: RECENT_PRODUCTS_INITIAL_STATE,
  reducers: {
    setRecentProducts: (state, action) => {
      state.recentProducts = recentProduct(
        state.recentProducts,
        action.payload
      );
    },
  },
});

export const recentProductsReducer = recentProductsSlice.reducer;

export const { setRecentProducts } = recentProductsSlice.actions;
