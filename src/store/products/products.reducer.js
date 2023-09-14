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

const productsSlice = createSlice({
  name: "products",
  initialState: PRODUCTS_INITIAL_STATE,
  reducers: {
    setProducts: (state, action) => {},
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
