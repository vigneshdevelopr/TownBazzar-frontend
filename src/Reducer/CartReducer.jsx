import { createSlice } from "@reduxjs/toolkit";

export const cartReducer = createSlice({
  name: "cart", // Add the name option
  initialState: {
    value: 0,
  },
  reducers: {
    add: (state) => {
      state.value += 1;
    },
    remove: (state) => {
      state.value -= 1;
    },
  },
});

export const { add, remove } = cartReducer.actions;

export default cartReducer.reducer;
