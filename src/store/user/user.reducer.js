import { createSlice } from "@reduxjs/toolkit";

const USER_INITIAL_STATE = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: USER_INITIAL_STATE,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setUser } = userSlice.actions;
