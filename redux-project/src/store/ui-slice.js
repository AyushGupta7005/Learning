import { createSlice } from "@reduxjs/toolkit";
const initialState = { showCart: false };
const uiSlice = createSlice({
  name: "uiSlice",
  initialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
