import { createSlice } from "@reduxjs/toolkit";

const BURGER_BUTTON_INITIAL_STATE = {
  isOpen: false,
};

const burgerSlice = createSlice({
  name: "burger-button",
  initialState: BURGER_BUTTON_INITIAL_STATE,
  reducers: {
    setBurgerButton: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const burgerReducer = burgerSlice.reducer;
export const { setBurgerButton } = burgerSlice.actions;
