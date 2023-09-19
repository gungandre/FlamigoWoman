import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const PRODUCTS_INITIAL_STATE = {
  products: [],
  isLoading: false,
};

export const getDataProducts = createAsyncThunk("products", async () => {
  const fetchData = await axios.get("/product.json");

  return fetchData.data;
});

const stockOnlyFunction = (currentState, action) => {
  if (action) {
    return currentState.filter((product) => product.avaiable === true);
  }

  return currentState;
};

const productsSlice = createSlice({
  name: "products",
  initialState: PRODUCTS_INITIAL_STATE,
  reducers: {
    stockOnly: (state, action) => {
      state.products = stockOnlyFunction(state.products, action.payload);
    },
    sort: (state, action) => {
      if (action.payload === "asc") {
        state.products = state.products.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else {
        state.products = state.products.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getDataProducts.pending, (state) => {
        state.isLoading = !state.isLoading;
      })
      .addCase(getDataProducts.fulfilled, (state, action) => {
        state.products = action.payload.product;
        state.isLoading = !state.isLoading;
      });
  },
});

export const productsReducer = productsSlice.reducer;

export const { stockOnly, sort } = productsSlice.actions;
